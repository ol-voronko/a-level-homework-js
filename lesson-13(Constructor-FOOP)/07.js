function Password(parent, open) {
  const input = document.createElement("input");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  checkbox.checked = open;
  input.type = open ? "text" : "password";
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
const password = new Password(document.body, true);

const br = document.createElement("br");
document.body.append(br);

const input = document.createElement("input");
input.type = "password";
document.body.append(input);
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
