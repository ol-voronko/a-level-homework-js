function Person(name, surname) {
  this.name = () => name;
  this.surname = () => surname;
  this.getFullName = () =>
    `${this.name()} ${this.fatherName || ""} ${this.surname()}`;
}
