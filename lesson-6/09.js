fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let str =
      '<table style="border: 1px solid black;border-collapse:collapse; ">';
    str += '<tr style="background-color:grey">';
    str += `<th style="border: 1px solid black;border-collapse:collapse; ">  </th>`;
    for (const currency of Object.keys(data.rates)) {
      str += `<td style="border: 1px solid black;border-collapse:collapse; " > ${currency} </td>`;
    }
    str += "</tr>";
    for (const [currency, rate] of Object.entries(data.rates)) {
      str += "<tr>";
      str += `<td style="border: 1px solid black;border-collapse:collapse; "> ${currency} </td>`;
      for (const currency of Object.keys(data.rates)) {
        str += `<td style="border: 1px solid black;border-collapse:collapse; "> ${(
          (1 / rate) *
          data.rates[currency]
        ).toFixed(3)} </td>`;
      }
      str += "</tr>";
    }
    document.write(str);
  });
