const div = document.createElement("div");
div.id = "div";
document.body.append(div);
fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    for (const [currency, rate] of Object.entries(data.rates)) {
      const button = document.createElement("button");
      button.innerText = `${currency}`;
      div.append(button);
      button.onclick = () => {
        let sum = +prompt("Введіть суму");
        alert(sum ? `${(sum / rate).toFixed(2)} $` : "А суму вказать?");
      };
    }
  });
