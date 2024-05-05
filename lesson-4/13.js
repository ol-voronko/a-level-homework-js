let usdPurchase = 39.4;
let usdSale = 39.85;
let eurPurchase = 42.25;
let eurSale = 42.95;
let plnPurchase = 9.71;
let plnSale = 9.875;
let rate;
let currency = prompt("Введіть назву валюти для обміну: USD,EUR,PLN");

let operation = confirm(
  "Якщо бажаєте купити натисніть ОК,якщо бажаєте продати натисніть Cansel(Скасувати)"
);

if (currency.toUpperCase() === "USD") {
  rate = operation ? usdSale : usdPurchase;
} else if (currency.toUpperCase() === "EUR") {
  rate = operation ? eurSale : eurPurchase;
} else if (currency.toUpperCase() === "PLN") {
  rate = operation ? plnSale : plnPurchase;
} else {
  alert("Некорректно вказано назву валюти!");
}

let sum = prompt("Введіть суму обміну");
let result = operation ? sum / rate : sum * rate;

if (!isNaN(result)) {
  operation
    ? alert(`Ви отримаєте ${result.toFixed(2)} ${currency.toUpperCase()}`)
    : alert(`Ви отримаєте ${result.toFixed(2)} грн`);
} else {
  alert("Почніть спочатку");
}
