function Store(reducer) {
  let state = reducer(undefined, {});
  let cbs = [];

  this.getState = () => state;
  this.subscribe = (cb) => (
    cbs.push(cb), () => (cbs = cbs.filter((c) => c !== cb))
  );
  this.dispatch = (action) => {
    const newState = reducer(state, action);
    if (newState != state) {
      state = newState;
      for (let cb of cbs) cb();
    }
  };
}

// Перевірка
// const state = {
//   iceCream: {
//     price: 20,
//     quantity: 80,
//   },
//   chocolate: {
//     price: 40,
//     quantity: 95,
//   },
//   juice: {
//     price: 30,
//     quantity: 100,
//   },
//   water: {
//     price: 15,
//     quantity: 100,
//   },
//   cupcake: {
//     price: 25,
//     quantity: 55,
//   },
// };

// const select = document.createElement("select");
// document.body.append(select);

// for (const goods of Object.keys(state)) {
//   const option = document.createElement("option");
//   option.innerText = `${goods}`;
//   select.append(option);
// }
// const input = document.createElement("input");
// input.type = "number";
// input.min = "0";
// input.max = `${state[select.value].quantity}`;
// document.body.append(input);

// const input1 = document.createElement("input");
// input1.type = "number";
// document.body.append(input1);

// const button = document.createElement("button");
// button.innerText = "Купити";
// document.body.append(button);

// const divCost = document.createElement("div");
// document.body.append(divCost);

// const divCashChange = document.createElement("div");
// document.body.append(divCashChange);

// select.onchange =
//   input.oninput =
//   input.onchange =
//     () => {
//       divCost.innerText = `Вартість товару:${
//         state[select.value].price * input.value
//       }`;
//     };

// defaultState = { ...state, storeCashRegister: 0, cashChange: 0 };

// function tradeReducer(state = defaultState, { type, channel, quantity, cost }) {
//   if (!state) {
//     return state;
//   }
//   if (type === "Purchase") {
//     if (quantity > state[select.value].quantity) {
//       alert(
//         `${select.value} нажаль менше ніж Ви бажаєте придбати,спробуйте обрати меншу кількість`
//       );
//       return state;
//     }
//     if (cost < defaultState[select.value].price * input.value) {
//       alert("Коштів недостатньо для покупки товару");
//       return state;
//     }
//     if (
//       quantity <= state[select.value].quantity &&
//       cost >= `${defaultState[select.value].price * input.value}`
//     ) {
//       return {
//         ...state,
//         [channel]: {
//           price: state[select.value].price,
//           quantity: state[select.value].quantity - quantity,
//         },
//         storeCashRegister:
//           +cost -
//           (+cost - defaultState[select.value].price * input.value) +
//           state.storeCashRegister,
//         cashChange: +cost - defaultState[select.value].price * input.value,
//       };
//     }
//   }
// }
// const actionPurchase = (channel, quantity, cost) => ({
//   type: "Purchase",
//   channel,
//   quantity,
//   cost,
// });

// const store = new Store(tradeReducer);
// button.onclick = () => {
//   store.dispatch(actionPurchase(`${select.value}`, input.value, input1.value));
// };
// store.subscribe(() => {
//   console.log(store.getState());
//   input1.value = 0;
//   input.value = input.min;
//   input.max = store.getState()[select.value].quantity;
//   document.title = `Каса: ${store.getState().storeCashRegister}`;
//   divCashChange.innerText = `Ваша решта: ${store.getState().cashChange}`;
//   if (store.getState()[select.value].quantity === 0) {
//     input.value = 0;
//     alert(`Увага! ${[select.value]} скінчився!`);
//   }
// });
