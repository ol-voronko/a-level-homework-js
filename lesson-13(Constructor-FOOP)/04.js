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
      this.onChange(value);
    }
    return (input.value = value);
  };
  this.setValue(input.value);
}
let p = new Password(document.body, true);

p.onChange = (data) => console.log(data);
p.onOpenChange = (open) => console.log(open);

p.setValue("qwerty");
console.log(p.getValue());

p.setOpen(false);
console.log(p.getOpen());

console.log(p);
