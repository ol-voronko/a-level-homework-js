const noSwitch = (key, cases, defaultKey = "default") => {
  if (key in cases) {
    cases[key]();
  } else {
    cases[defaultKey]();
  }
};

const drink = prompt("Що ви любите пити");
noSwitch(drink, {
  воду: () => console.log("Найздоровіший вибір!"),
  чай() {
    console.log("Смачна та корисна штука. Не перестарайтеся з цукром");
  },
  пиво: () => console.log("Добре влітку, та в міру"),
  віскі: function () {
    console.log("Та ви, батечку, естет! Не забудьте лід і сигару");
  },
  default() {
    console.log("шото я не зрозумів");
  },
});
