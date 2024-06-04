function createPersonClosureDestruct({
  name = "Ivan",
  fatherName = "Ivanovich",
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
      (name = newName);
  }

  function setSurname(newSurname) {
    newSurname ===
      newSurname.slice(0, 1).toUpperCase() +
        newSurname.slice(1).toLowerCase() && (surname = newSurname);
  }
  function setFatherName(newFatherName) {
    newFatherName ===
      newFatherName.slice(0, 1).toUpperCase() +
        newFatherName.slice(1).toLowerCase() && (fatherName = newFatherName);
  }
  function setAge(newAge) {
    newAge > 0 && newAge < 100 && (age = newAge);
  }
  function setFullName(newFullName) {
    const [newName, newFatherName, newSurname, ...rest] =
      newFullName.split(" ");
    setSurname(newSurname);
    setName(newName);
    setFatherName(newFatherName);
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

function personForm(parent, person) {
  let inputName = document.createElement("input");
  let inputSurname = document.createElement("input");
  let inputFatherName = document.createElement("input");
  let inputAge = document.createElement("input");
  let inputFullName = document.createElement("input");

  inputAge.type = "number";

  inputName.value = person.getName();
  inputSurname.value = person.getSurname();
  inputFatherName.value = person.getFatherName();
  inputAge.value = person.getAge();
  inputFullName.value = person.getFullName();

  inputName.oninput = () => {
    person.setName(inputName.value);
    inputName.value = person.getName();
    inputFullName.value = person.getFullName();
  };
  inputFatherName.oninput = () => {
    person.setFatherName(inputFatherName.value);
    inputFatherName.value = person.getFatherName(inputFatherName.value);
    inputFullName.value = person.getFullName();
  };
  inputSurname.oninput = () => {
    person.setSurname(inputSurname.value);
    inputSurname.value = person.getSurname(inputSurname.value);
    inputFullName.value = person.getFullName();
  };

  inputFullName.oninput = () => {
    person.setFullName(inputFullName.value);
    inputFullName.value = person.getFullName();
    inputName.value = person.getName();
    inputFatherName.value = person.getFatherName();
    inputSurname.value = person.getSurname();
  };

  inputAge.oninput = () => {
    person.setAge(inputAge.value);
    inputAge.value = person.getAge();
  };

  parent.append(inputName);
  parent.append(inputFatherName);
  parent.append(inputSurname);
  parent.append(inputFullName);
  parent.append(inputAge);
}

personForm(
  document.body,
  createPersonClosureDestruct({ name: "Ганна", surname: "Petrova" })
);
