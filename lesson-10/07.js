let car;
{
  let brand = "BMW",
    model = "X5",
    volume = 2.4;
  car = {
    getBrand() {
      return brand;
    },
    setBrand(newBrand) {
      if (newBrand && typeof newBrand === "string") {
        brand = newBrand;
      }
      return brand;
    },

    getModel() {
      return model;
    },
    setModel(newModel) {
      if (newModel && typeof newModel === "string") {
        model = newModel;
      }
      return model;
    },

    getVolume() {
      return volume;
    },
    setVolume(newVolume) {
      newVolume = +newVolume;
      if (newVolume && newVolume > 0 && newVolume < 20) {
        volume = newVolume;
      }
      return volume;
    },

    getTax() {
      return volume * 100;
    },
  };
}

function getSetForm(parent, getSet) {
  const inputs = {}; //реєстр
  const updateInputs = () => {
    for (const fieldName of Object.keys(inputs)) {
      const getKey = "get" + fieldName;
      if (getKey in getSet) {
        inputs[fieldName].value = getSet[getKey]();
      }
    }
  };

  for (const getSetName in getSet) {
    const fieldName = getSetName.slice(3);
    const setKey = "set" + fieldName;
    const getKey = "get" + fieldName;
    const input = document.createElement("input");

    if (!(fieldName in inputs)) {
      inputs[fieldName] = input;
      input.placeholder = `${fieldName}`;
      input.type = typeof getSet[getKey]();

      if (!(input.value = getSet[getKey]())) {
        input.value = "";
      }
      if (!(setKey in getSet)) {
        input.disabled = true;
      } else {
        input.oninput = () => {
          getSet[setKey](input.value);
          updateInputs();
        };
      }
      parent.append(input);
    }
  }
}
function createPersonClosure(name, surname) {
  let age = 1,
    fatherName = "";
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
    const [newName, newFatherName, newSurname] = newFullName.split(" ");
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
getSetForm(document.body, createPersonClosure("Ганна", "Іванова"));
