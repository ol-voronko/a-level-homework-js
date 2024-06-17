function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.name = function () {
  return this.name;
};

Person.prototype.surname = function () {
  return this.surname;
};

Person.prototype.getFullName = function () {
  return `${this.name}  ${this.fatherName || ""} ${this.surname}`;
};

const a = new Person("Petya", "Pyatochkin");
const b = new Person("Vasya", "Veslo");
console.log(a.getFullName());
b.fatherName = "Petrovich";
console.log(b.getFullName());
