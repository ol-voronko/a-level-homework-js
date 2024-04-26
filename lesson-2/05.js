const rate = 36.954;

let currentValue = prompt(
  "Введіть кількість грн,яку бажаєте обміняти на долари"
);

let exchange = currentValue / rate;

alert("Отримаєте " + exchange.toFixed(2));
