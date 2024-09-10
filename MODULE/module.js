function getGQL(endpoint) {
  function gql(query, variables = {}) {
    return fetch(`${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(store.getState().auth.token
          ? { Authorization: "Bearer " + store.getState().auth.token }
          : {}),
      },
      body: JSON.stringify({ query, variables }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error();
      })
      .then((data) => {
        if (!data.data && data.errors) {
          throw new Error(JSON.stringify(data.errors));
        }
        return Object.values(data.data)[0];
      });
  }
  return gql;
}

const endpoint = "http://shop-roles.node.ed.asmer.org.ua/";
const gql = getGQL(endpoint + "graphql");

function jwtDecode(token) {
  try {
    const idPart = token.split(".")[1];
    const decoded = window.atob(idPart);
    const result = JSON.parse(decoded);
    return result;
  } catch (err) {
    return undefined;
  }
}

// GraphQL-запити
const actionRootCategories = () =>
  actionPromise(
    "rootCats",
    gql(
      `query categories{
  CategoryFind(query:"[{\\"parent\\":null}]"){
    name _id
  }
}`
    )
  );
const actionOneCategory = (_id) =>
  actionPromise(
    "oneCat",
    gql(
      `query category($q:String){
  CategoryFindOne(query:$q) {
   name subCategories{name _id}
    goods {
      _id
      name
      price      
      images{
      url
      }
    }
    subCategories{
      name
    }
  }
} `,
      { q: JSON.stringify([{ _id }]) }
    )
  );

const actionOneGood = (_id) =>
  actionPromise(
    "oneGood",
    gql(
      `query good($q:String){
  GoodFindOne(query:$q){
    name
    _id
    price
     description
    images{
    url
    }
  }
}`,
      { q: JSON.stringify([{ _id }]) }
    )
  );

const actionRegistration = (login, password) =>
  actionPromise(
    "registration",
    gql(
      `mutation register($login:String, $password: String){
    UserUpsert(user: {login:$login, password: $password}){
        _id login createdAt
    }
}`,
      {
        login,
        password,
      }
    )
  );

const actionLogin = (login, password) =>
  actionPromise(
    "login",
    gql(
      `query login($login:String, $password:String){
                            	login(login:$login, password:$password)
                        }`,
      {
        login,
        password,
      }
    )
  );

const actionHistory = () =>
  actionPromise(
    "orders",
    gql(`query orders{
      OrderFind(query:"[{}]"){
      total createdAt orderGoods{      
      good{_id name images{url} }
      price
      count
      total
  }}}`)
  );

function createStore(reducer) {
  let state = reducer(undefined, {}); //стартова ініціалізація стану, запуск редьюсера зі state === undefined
  let cbs = []; //масив передплатників

  const getState = () => state; //функція, що повертає змінну із замикання
  const subscribe = (cb) => (
    cbs.push(cb), //запам'ятовуємо передплатників у масиві
    () => (cbs = cbs.filter((c) => c !== cb))
  ); //повертаємо функцію unsubscribe, яка видаляє передплатника зі списку

  const dispatch = (action) => {
    if (typeof action === "function") {
      //якщо action – не об'єкт, а функція
      return action(dispatch, getState); //запускаємо цю функцію і даємо їй dispatch і getState для роботи
    }
    const newState = reducer(state, action); //пробуємо запустити редьюсер
    if (newState !== state) {
      //перевіряємо, чи зміг ред'юсер обробити action
      state = newState; //якщо зміг, то оновлюємо state
      for (let cb of cbs) cb(); //та запускаємо передплатників
    }
  };

  return {
    getState, //додавання функції getState в результуючий об'єкт
    dispatch,
    subscribe, //додавання subscribe в об'єкт
  };
}
const actionPromise = (promiseName, promise) => async (dispatch) => {
  dispatch(actionPending(promiseName)); //сигналізуємо redux, що проміс почався
  try {
    const payload = await promise; //очікуємо промісу
    dispatch(actionFulfilled(promiseName, payload)); //сигналізуємо redux, що проміс успішно виконано
    return payload; //у місці запуску store.dispatch з цим thunk можна також отримати результат промісу
  } catch (error) {
    dispatch(actionRejected(promiseName, error)); //у разі помилки - сигналізуємо redux, що проміс не склався
  }
};

const actionPending = (promiseName) => ({
  type: "PROMISE",
  status: "PENDING",
  promiseName,
});
const actionFulfilled = (promiseName, payload) => ({
  type: "PROMISE",
  status: "FULFILLED",
  payload,
  promiseName,
});
const actionRejected = (promiseName, error) => ({
  type: "PROMISE",
  status: "REJECTED",
  error,
  promiseName,
});

function promiseReducer(
  state = {},
  { type, status, payload, error, promiseName }
) {
  if (type === "PROMISE") {
    return { ...state, [promiseName]: { status, payload, error } };
  }
  return state;
}

const actionAuthLogin = (token) => ({ type: "AUTH_LOGIN", token });
const actionAuthLogout = () => ({ type: "AUTH_LOGOUT" });

function authReducer(state = {}, { type, token }) {
  if (type === "AUTH_LOGIN") {
    if (jwtDecode(token)) {
      return { token, payload: jwtDecode(token) };
    } else {
      return state;
    }
  } else if (type === "AUTH_LOGOUT") {
    return {};
  } else return state;
}

const actionCartAdd = (good, count = 1) => ({ type: "CART_ADD", count, good });
const actionCartSub = (good, count = 1) => ({ type: "CART_SUB", count, good });
const actionCartDel = (good) => ({ type: "CART_DEL", good });
const actionCartSet = (good, count = 1) => ({ type: "CART_SET", count, good });
const actionCartClear = () => ({ type: "CART_CLEAR" });

function cartReducer(state = {}, { type, good, count }) {
  if (type === "CART_ADD") {
    return {
      ...state,
      [good._id]: {
        good,
        count: state[good._id] ? state[good._id].count + count : count,
      },
    };
  } else if (type === "CART_SUB") {
    if (state[good._id].count - count <= 0) {
      const newState = { ...state };
      delete newState[good._id];
      return newState;
    }
    return {
      ...state,
      [good._id]: { good, count: state[good._id].count - count },
    };
  } else if (type === "CART_DEL") {
    const newState = { ...state };
    delete newState[good._id];
    return newState;
  } else if (type === "CART_SET") {
    if (count <= 0) {
      const newState = { ...state };
      delete newState[good._id];
      return newState;
    }
    return { ...state, [good._id]: { good, count } };
  } else if (type === "CART_CLEAR") {
    return {};
  } else {
    return state;
  }
}
function combineReducers(reducers) {
  function totalReducer(state = {}, action) {
    const newTotalState = {};
    for (const [reducerName, reducer] of Object.entries(reducers)) {
      const newSubState = reducer(state[reducerName], action);
      if (newSubState !== state[reducerName]) {
        newTotalState[reducerName] = newSubState;
      }
    }
    if (Object.keys(newTotalState).length) {
      return { ...state, ...newTotalState };
    }
    return state;
  }

  return totalReducer;
}

const reducers = {
  promise: promiseReducer, //допилить много имен для многих промисо
  auth: localStoredReducer(authReducer, "auth"), //часть предыдущего ДЗ
  cart: localStoredReducer(cartReducer, "cart"), //часть предыдущего ДЗ
};

const totalReducer = combineReducers(reducers);
const store = createStore(totalReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(actionRootCategories());

store.subscribe(() => {
  const { status, payload, error } = store.getState().promise.rootCats || {}; //.имя третье
  if (status === "FULFILLED" && payload) {
    aside.innerHTML = "";
    for (const { _id, name } of payload) {
      aside.innerHTML += `<a href="#/category/${_id}">${name}</a>`;
    }
  }
});

window.onhashchange = () => {
  const [, route, _id] = location.hash.split("/");

  const routes = {
    category() {
      store.dispatch(actionOneCategory(_id));
      console.log(route, _id);
    },
    good() {
      store.dispatch(actionOneGood(_id));
      console.log("good", _id);
    },
    login() {
      drawLogin();

      //нарисовать форму логина, которая по нажатию кнопки Login делает store.dispatch(actionFullLogin(login, password))
    },
    cart() {
      console.log(store.getState().cart);
      drawCart();
    },
    register() {
      drawRegister();
      //нарисовать форму регистрации, которая по нажатию кнопки Login делает store.dispatch(actionFullRegister(login, password))
    },
    history() {
      console.log("History is written by winner");
      store.dispatch(actionHistory());
    },
  };

  if (route in routes) {
    routes[route]();
  }
};

window.onhashchange();
const drawCategory = () => {
  const [, route] = location.hash.split("/");
  if (route !== "category") return;

  const { status, payload, error } = store.getState().promise.oneCat || {}; //.имя другое
  if (status === "PENDING") {
    main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`;
  }
  if (status === "FULFILLED") {
    const { name, goods, subCategories } = payload;
    main.innerHTML = `<h1>${name}</h1>`;

    if (subCategories.length) {
      const subCatLinks = document.createElement("div");
      subCatLinks.style = `display:flex; gap:20px;margin-bottom:20px`;
      for (const { name, _id } of subCategories) {
        subCatLinks.innerHTML += `<a href="#/category/${_id}">${name}</a>`;
      }
      main.append(subCatLinks);
    }
    for (const good of goods) {
      const { _id, name, price, images } = good;
      const section = document.createElement("section");
      section.innerHTML += `
      <img src="${endpoint}${images[0].url}" max-height="50"/>
     
      `;
      section.style = `font-size:10px;display:flex`;
      main.append(section);
      const divGood = document.createElement("div");
      divGood.innerHTML = ` <a href="#/good/${_id}">${name}</a>
      <strong>${price} грн</strong>`;
      divGood.style = `display:flex;flex-direction:column`;
      section.append(divGood);
      const button = document.createElement("button");
      button.innerHTML = "Додати в кошик";
      button.style = `font-size:10px;background-color:aliceblue;border:1px solid lightgrey;border-radius:5px`;
      divGood.append(button);
      button.onclick = () => store.dispatch(actionCartAdd(good));
    }
  }
};

store.subscribe(drawCategory);

const drawGood = () => {
  const [, route] = location.hash.split("/");
  if (route !== "good") return;

  const { status, payload, error } = store.getState().promise.oneGood || {}; //.имя другое
  if (status === "PENDING") {
    main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`;
  }
  if (status === "FULFILLED") {
    const { _id, name, price, description, images } = payload;

    // main.innerHTML = `<h1>${name}</h1>`;
    //                      <section>ЖЫРНОСТЬ: ${mass}кг</section>
    //                      <section style="color: ${eye_color}">Цвет глаз</section>
    //                      `;
    // for (const good of goods) {
    main.innerHTML = ` <h1>${name}</h1>`;
    const section = document.createElement("section");
    section.innerHTML = `     
      <img src="${endpoint}${images[0].url}"/>   

    `;
    // }
    section.style = `font-size:10px`;
    const divGood = document.createElement("div");
    divGood.innerHTML = `<p>${description}</p>
      <strong>${price} грн</strong>`;
    divGood.style = `display:flex;flex-direction:column;`;
    section.append(divGood);
    main.append(section);
    const button = document.createElement("button");
    button.innerText = "Додати в кошик";
    button.style = `font-size:10px;`;
    section.append(button);
    button.onclick = () => store.dispatch(actionCartAdd(payload));
  }
};
store.subscribe(drawGood);

function drawCart() {
  const [, route] = location.hash.split("/");
  if (route !== "cart") return;
  main.innerHTML = "";
  const cart = store.getState().cart; //.имя другое
  // if (status === "PENDING") {
  //   main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`;
  // }
  // if (status === "FULFILLED") {
  // const goods = payload;
  // main.innerHTML = `<h1>${name}</h1>`;
  //                      <section>ЖЫРНОСТЬ: ${mass}кг</section>
  //                      <section style="color: ${eye_color}">Цвет глаз</section>
  //                      `;
  // main.innerHTML += `<h1>Кошик</h1>`;
  if (Object.keys(cart).length === 0) {
    main.innerText = "Ой,а в кошику пусто ((";
    main.style = `font-size:24px;color:blue;margin:auto;`;
  } else {
    for (const { good, count } of Object.values(cart)) {
      const { _id, name, price, images } = good;
      const section = document.createElement("section");
      section.innerHTML += `
      <img src="${endpoint}${images[0].url}" max-height="50"/>`;

      section.style = `font-size:10px`;
      main.append(section);
      const divGood = document.createElement("div");
      section.append(divGood);
      divGood.innerHTML = `<a href="#/good/${_id}">${name}</a>
      <strong>Ціна : ${price}грн </strong>`;

      const buttonMinus = document.createElement("button");
      const inputCount = document.createElement("input");
      const buttonPlus = document.createElement("button");

      buttonMinus.innerText = "-";
      inputCount.type = "text";
      inputCount.value = `${count}`;
      inputCount.style = `font-size:10px;max-width:30px`;
      buttonPlus.innerText = "+";

      divGood.append(buttonMinus);
      divGood.append(inputCount);
      divGood.append(buttonPlus);
      inputCount.onchange =
        inputCount.oninput =
        buttonMinus.onclick =
          () => store.dispatch(actionCartSub(good));
      inputCount.onchange =
        inputCount.oninput =
        buttonPlus.onclick =
          () => store.dispatch(actionCartAdd(good));
      inputCount.addEventListener("change", () =>
        store.dispatch(actionCartSet(good, +inputCount.value))
      );
      const buttonDel = document.createElement("button");
      buttonDel.innerText = "Видалити з кошика";

      buttonDel.onclick = () => store.dispatch(actionCartDel(good));
      section.append(buttonDel);
    }
  }
  const buttonOrder = document.createElement("button");
  buttonOrder.innerText = "Оформити замовлення";

  buttonOrder.style.display =
    Object.keys(cart).length === 0 ? `none` : `inline`;

  buttonOrder.onclick = () => store.dispatch(actionFullOrder());
  main.append(buttonOrder);
}

store.subscribe(drawCart);
function localStoredReducer(originalReducer, localStorageKey) {
  function wrapper(state, action) {
    if (state === undefined) {
      try {
        return JSON.parse(localStorage[localStorageKey]);
      } catch {}
    }

    const newState = originalReducer(state, action);
    localStorage[localStorageKey] = JSON.stringify(newState);
    return newState;
  }

  return wrapper;
}

function Password(parent, open) {
  const input = document.createElement("input");
  const checkbox = document.createElement("input");

  input.placeholder = "password";
  input.type = open ? "text" : "password";

  checkbox.type = "checkbox";
  checkbox.checked = open;
  parent.append(input);
  parent.append(checkbox);

  input.oninput = () => this.setValue(input.value);
  checkbox.onchange = () => this.setOpen(checkbox.checked);

  this.getOpen = function () {
    return open;
  };
  this.setOpen = function (open) {
    checkbox.checked = open;
    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }
    if (open) {
      return (input.type = "text");
    } else {
      return (input.type = "password");
    }
  };
  this.getValue = function () {
    return input.value;
  };
  this.setValue = function (value) {
    if (typeof this.onChange === "function") {
      this.onChange();
    }
    return (input.value = value);
  };
  this.setValue(input.value);
  this.setStyle = function (style) {
    input.style = style;
  };
}

function LoginForm(parent) {
  const login = document.createElement("input");
  login.placeholder = "login";
  parent.append(login);
  login.oninput = () => this.setLogin(login.value);
  this.getLogin = function () {
    return login.value;
  };
  this.setLogin = function (value) {
    if (typeof this.onChange === "function") {
      this.onLoginChange();
    }
    return (login.value = value);
  };
  this.setLogin(login.value);

  const br = document.createElement("br");
  parent.append(br);

  const password = new Password(parent, true);

  const br1 = document.createElement("br");
  parent.append(br1);

  const button = document.createElement("button");
  button.innerText = "Log in";
  button.disabled = true;
  button.onclick = () => {
    if (typeof this.onClick === "function") {
      this.onClick(this.getLogin(), password.getValue());
    }
  };
  parent.append(button);
  login.oninput = password.onChange = () => {
    button.disabled = !(this.getLogin() && password.getValue());
  };
}
function drawLogin() {
  const [, route] = location.hash.split("/");
  if (route !== "login") return;
  main.innerHTML = "";

  if (store.getState().auth.token) {
    location.hash = "#/history/";
    return;
  }
  if (store.getState().promise.login) {
    if (store.getState().promise.login.payload === null) {
      main.innerHTML += `<p style="color:red;">Невірно вказані логін або пароль!</p>`;
    }
  }
  const loginForm = new LoginForm(main);
  loginForm.onClick = (login, password) => {
    store.dispatch(actionFullLogin(login, password));
  };
}
store.subscribe(drawLogin);
const actionFullLogin = (login, password) => async (dispatch, getState) => {
  //dispatch повертає те, що повернув thunk, що повертається actionLogin, а там проміс,
  //бо actionPromise повертає асинхронну функцію
  const token = await dispatch(actionLogin(login, password));

  dispatch(actionAuthLogin(token));
  if (getState().auth.token) {
    location.hash = "#/history/";
  }
};
function drawRegister() {
  const [, route] = location.hash.split("/");
  if (route !== "register") return;
  main.innerHTML = "";

  if (store.getState().auth.token) {
    location.hash = "#/history/";
    return;
  }
  const login = document.createElement("input");
  login.placeholder = "Login";
  main.append(login);

  const br = document.createElement("br");
  main.append(br);

  const password = new Password(main, false);
  password.placeholder = "password";

  const br1 = document.createElement("br");

  main.append(br1);

  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "repeat password";
  main.append(input);
  const br2 = document.createElement("br");
  main.append(br2);
  password.onOpenChange = (open) => {
    if (open) {
      input.style.display = `none`;
    } else {
      input.style.display = `inline`;
    }
  };
  input.oninput = password.onChange = () => {
    if (input.value === password.getValue() || input.value == "") {
      input.style = `border:1px grey solid`;
      password.setStyle(`border:1px grey solid`);
    } else {
      input.style = `border: 1px red solid`;
      password.setStyle(`border:1px red solid`);
    }
  };

  const button = document.createElement("button");
  button.innerText = "Log in";
  button.disabled = true;
  main.append(button);

  login.oninput = password.onChange = () => {
    button.disabled =
      !(login.value && password.getValue()) &&
      !(input.value === password.getValue() || input.value == "");
  };

  button.onclick = () => {
    store.dispatch(actionFullRegister(login.value, password.getValue()));
  };
}

const actionFullRegister = (login, password) => async (dispatch) => {
  await dispatch(actionRegistration(login, password));
  dispatch(actionFullLogin(login, password));
};
const buttonLogout = document.getElementById("logout");

buttonLogout.onclick = () => store.dispatch(actionAuthLogout());

const actionFullOrder = () => async (dispatch, getState) => {
  const cart = getState().cart;
  const order = {};
  order.orderGoods = Object.values(cart).map(({ count, good: { _id } }) => ({
    count,
    good: { _id },
  }));

  try {
    const response = await gql(
      `mutation newOrder($order:OrderInput){
    OrderUpsert(order:$order){_id}}`,
      { order }
    );

    console.log(response);
    dispatch(actionCartClear());
  } catch {
    console.log("Fignya");
  }
};
const drawHistory = () => {
  const [, route] = location.hash.split("/");
  if (route !== "history") return;
  main.innerHTML = "";
  const { status, payload, error } = store.getState().promise.orders || {};
  if (status === "PENDING") {
    main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`;
  }
  if (status === "FULFILLED") {
    main.innerHTML = `<h1>Історія замовлень</h1>`;
    for (const { total, createdAt, orderGoods } of payload) {
      main.innerHTML += `<p>Замовлення від ${new Date(+createdAt)
        .getDate()
        .toString()
        .padStart(2, "0")}/ ${new Date(+createdAt)
        .getMonth()
        .toString()
        .padStart(2, "0")}/ ${new Date(+createdAt).getFullYear()}  ${new Date(
        +createdAt
      )
        .getHours()
        .toString()
        .padStart(2, "0")}:${new Date(+createdAt)
        .getMinutes()
        .toString()
        .padStart(2, "0")}</p>`;
      let table = `<table style ="border:1px solid black;border-collapse:collapse;">`;
      // const table = document.createElement("table");
      // table.style = `border:1px solid black;border-collapse:collapse;`;
      for (const { good, price, count, total } of orderGoods) {
        const { name, images } = good;
        //   const row = document.createElement("tr");
        //   row.innerHTML = `<td style ="border:1px solid black;border-collapse:collapse;"> ${name} </td>
        // <td style ="border:1px solid black;border-collapse:collapse;"> <img src="${endpoint}${images[0].url}" height="25"/> </td>
        // <td style ="border:1px solid black;border-collapse:collapse;"> ${price} грн </td>
        // <td style ="border:1px solid black;border-collapse:collapse;"> ${count} шт </td>
        //  <td style ="border:1px solid black;border-collapse:collapse;"> ${total} грн </td>`;

        //   table.append(row);
        table += `<tr> <td style ="border:1px solid black;border-collapse:collapse;"> ${name} </td>
          <td style ="border:1px solid black;border-collapse:collapse;"> <img src="${endpoint}${images[0].url}" height="25"/> </td>
         <td style ="border:1px solid black;border-collapse:collapse;"> ${price} грн </td>
          <td style ="border:1px solid black;border-collapse:collapse;"> ${count} шт </td>
          <td style ="border:1px solid black;border-collapse:collapse;"> ${total} грн </td> </tr> `;
      }
      // main.append(table);
      table += `</table>`;
      main.innerHTML += table;
      main.innerHTML += `<p>Total : ${total} грн</p>`;
    }
  }
};

store.subscribe(drawHistory);

store.subscribe(() => {
  cartButton.innerText = `${Object.values(store.getState().cart).reduce(
    (acc, el) => acc + el.count,
    0
  )}`;
  if (store.getState().auth.token) {
    btnsLogin.style = `display:none`;
    btnsLogout.style = `display:inline-block`;
    btnHistory.innerText = `${store.getState().auth.payload.sub.login}`;
  } else {
    btnsLogout.style = `display:none`;
    btnsLogin.style = `display:block`;
  }
});
