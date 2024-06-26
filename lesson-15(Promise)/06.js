function Password(parent, open) {
  const input = document.createElement("input");
  const checkbox = document.createElement("input");

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
}

function LoginForm(parent) {
  const form = document.createElement("div");

  parent.append(form);

  const login = document.createElement("input");
  form.append(login);
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
  form.append(br);

  const password = new Password(form, true);

  const br1 = document.createElement("br");
  form.append(br1);

  const button = document.createElement("button");
  button.innerText = "Log in";
  button.disabled = true;
  button.onclick = () => {
    this.onClick(password);
  };
  form.append(button);
  login.oninput = password.onChange = () => {
    button.disabled = !(this.getLogin() && password.getValue());
  };
}

function loginPromise(parent) {
  function executor(resolve, reject) {
    const form = new LoginForm(parent);
    form.onClick = (password) =>
      resolve({ login: form.getLogin(), password: password.getValue() });
  }
  return new Promise(executor);
}
loginPromise(document.body).then(({ login, password }) =>
  console.log(`Ви ввели ${login} та ${password}`)
);
