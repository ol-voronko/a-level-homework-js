fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    //ця функція запускається коли дані завантажуються.
    //Інший код працює РАНIШЕ.
    //тільки тут є змінна data з завантаженими даними
    console.log(data); // Вивчіть структуру, що отримується з сервера в консолі
    let currencyRate =
      data.rates[prompt("Введіть вхідну валюту ").toUpperCase()];

    let resultRate =
      data.rates[prompt("Введіть валюту ,яку хочете отримати").toUpperCase()];
    let sum = prompt("Введіть суму обміну");
    result = (sum * currencyRate) / resultRate;
    alert(`Ви отримаєте  ${result.toFixed(2)}`);

    return result;
  });
