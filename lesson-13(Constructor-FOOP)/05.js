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
    return input.type;
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

const form = document.createElement("form");
document.body.append(form);

const login = document.createElement("input");
form.append(login);

const br = document.createElement("br");
form.append(br);

const password = new Password(form, true);

const br1 = document.createElement("br");

form.append(br1);

const button = document.createElement("button");
button.innerText = "Log in";
button.disabled = true;
form.append(button);

login.oninput = password.onChange = () => {
  button.disabled = !(login.value && password.getValue());
};
