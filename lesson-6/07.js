fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let currencyRate =
      data.rates[prompt("Введіть вхідну валюту ").toUpperCase()];
    console.log(currencyRate);
    let resultRate =
      data.rates[prompt("Введіть валюту ,яку хочете отримати").toUpperCase()];
    console.log(resultRate);
    let sum = prompt("Введіть суму обміну");
    result = (sum / currencyRate) * resultRate;
    alert(`Ви отримаєте  ${result.toFixed(2)}`);

    return result;
  });
