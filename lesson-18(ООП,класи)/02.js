class Password {
  #input = document.createElement("input");
  #checkbox = document.createElement("input");

  constructor(parent, open) {
    this.#checkbox.type = "checkbox";
    this.#checkbox.checked = open;
    this.#input.type = open ? "text" : "password";
    this.#input.oninput = () => this.#setValue(this.#input.value);
    this.#checkbox.onchange = () => this.#setOpen(this.#checkbox.checked);

    parent.append(this.#input);
    parent.append(this.#checkbox);
  }

  getOpen() {
    return open;
  }

  #setOpen(open) {
    this.#checkbox.checked = open;
    if (typeof this.onOpenChange === "function") {
      this.onOpenChange(open);
    }

    if (open) {
      return (this.#input.type = "text");
    } else {
      return (this.#input.type = "password");
    }
  }

  getValue() {
    return this.#input.value;
  }

  #setValue(value) {
    if (typeof this.onChange === "function") {
      this.onChange();
    }

    return (this.#input.value = value);
  }
}

// const p = new Password(document.body, false);

function LoginForm(parent) {
  const form = document.createElement("form");
  parent.append(form);

  const login = document.createElement("input");
  form.append(login);
  login.oninput = () => this.setLogin(login.value);
  this.getLogin = function () {
    return login.value;
  };
  this.setLogin = function (value) {
    // if (typeof this.onChange === "function") {
    //   this.onLoginChange();
    // }
    return (login.value = value);
  };
  this.setLogin(login.value);

  const br = document.createElement("br");
  form.append(br);

  const password = new Password(form, false);

  const br1 = document.createElement("br");
  form.append(br1);

  const button = document.createElement("button");
  button.innerText = "Log in";
  button.disabled = true;
  button.onclick = () => {
    onClick();
  };
  form.append(button);
  login.oninput = password.onChange = () => {
    button.disabled = !(this.getLogin() && password.getValue());
  };
}
let loginForm = new LoginForm(document.body);
