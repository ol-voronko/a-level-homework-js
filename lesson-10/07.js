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
      input.value = getSet[getKey]();
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

getSetForm(document.body, car);
