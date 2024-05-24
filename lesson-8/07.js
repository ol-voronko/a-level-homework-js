fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (const currency of Object.keys(data.rates)) {
      const option = document.createElement("option");
      const option1 = document.createElement("option");

      option.innerText = `${currency}`;
      option1.innerText = `${currency}`;

      from.append(option);
      to.append(option1);
    }
    from.onchange =
      to.onchange =
      amount.oninput =
        () => {
          rate.innerText = `${data.rates[to.value] / data.rates[from.value]}`;

          result.innerText = `До отримання : ${(
            (data.rates[to.value] / data.rates[from.value]) *
            amount.value
          ).toFixed(2)} ${to.value}`;
        };
  });
