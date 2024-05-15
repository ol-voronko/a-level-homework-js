fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    let str = "<table>";
    str += '<tr style="background-color:grey">';
    str += `<th>  </th>`;
    for (const currency of Object.keys(data.rates)) {
      str += "<td>" + currency + "</td>";
    }
    str += "</tr>";
    for (const [currency, rate] of Object.entries(data.rates)) {
      str += "<tr>";
      str += "<td>" + currency + "</td>";
      for (const currency of Object.keys(data.rates)) {
        str += `<td> ${((1 / rate) * data.rates[currency]).toFixed(3)} </td>`;
      }
      str += "</tr>";
    }
    document.write(str);
  });
