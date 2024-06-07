function createPersonClosure(name, surname) {
  let age, fatherName;
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
    if (
      newName &&
      typeof newName === "string" &&
      newName ===
        newName.slice(0, 1).toUpperCase() + newName.slice(1).toLowerCase()
    ) {
      name = newName;
    }
    return name;
  }

  function setSurname(newSurname) {
    if (
      newSurname &&
      typeof newSurname === "string" &&
      newSurname ===
        newSurname.slice(0, 1).toUpperCase() + newSurname.slice(1).toLowerCase()
    ) {
      surname = newSurname;
    }
    return surname;
  }
  function setFatherName(newFatherName) {
    if (
      newFatherName &&
      typeof newFatherName === "string" &&
      newFatherName ===
        newFatherName.slice(0, 1).toUpperCase() +
          newFatherName.slice(1).toLowerCase()
    ) {
      fatherName = newFatherName;
    }
    return fatherName;
  }
  function setAge(newAge) {
    newAge = +newAge;
    if (newAge > 0 && newAge < 100) {
      age = newAge;
    }
    return age;
  }
  function setFullName(newFullName) {
    const [newSurname, newName, newFatherName] = newFullName.split(" ");
    setName(newName);
    setSurname(newSurname);
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
