function createPersonClosureDestruct({
  name = "Ivan",
  fatherName = "Ivanov",
  surname,
  age = "25",
}) {
  function getName() {
    return name;
  }
  function getSurname() {
    return surname;
  }

  function getFatherName() {
    return fatherName;
  }

  function getAge() {
    return age;
  }
  function getFullName() {
    return `${name} ${fatherName || ""} ${surname}`;
  }
  function setName(newName) {
    newName ===
      newName.slice(0, 1).toUpperCase() + newName.slice(1).toLowerCase() &&
      getName((name = newName));
  }

  function setSurname(newSurname) {
    newSurname ===
      newSurname.slice(0, 1).toUpperCase() +
        newSurname.slice(1).toLowerCase() && getSurname((surname = newSurname));
  }
  function setFatherName(newFatherName) {
    newFatherName ===
      newFatherName.slice(0, 1).toUpperCase() +
        newFatherName.slice(1).toLowerCase() &&
      getFatherName((fatherName = newFatherName));
  }
  function setAge(newAge) {
    newAge > 0 && newAge < 100 && getAge((age = newAge));
  }
  function setFullName(newFullName) {
    [surname, name, fatherName] = newFullName.split(" ");
  }
  return {
    getName,
    getSurname,
    getFatherName,
    getAge,
    getFullName,
    setName,
    setSurname,
    setFatherName,
    setAge,
    setFullName,
  };
}
