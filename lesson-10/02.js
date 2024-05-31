function createPerson(name, surname) {
  function getFullName() {
    return `${this.name}  ${this.fatherName || ""} ${this.surname}`;
  }
  return {
    name,
    surname,
    getFullName,
  };
}
