function createPerson(name, surname) {
  function getFullName() {
    return `${this.name}  ${
      this.fatherName != undefined ? this.fatherName : ""
    } ${this.surname}`;
  }
  return {
    name,
    surname,
    getFullName,
  };
}
const a = createPerson("Vasya", "pupkin");
console.log(a.getFullName());
a.fatherName = "Ivanovich";
console.log(a.getFullName());
const b = createPerson("Ганна", "Іванова");
console.log(b.getFullName());
b.fatherName = "vnbm";
console.log(b.getFullName());
