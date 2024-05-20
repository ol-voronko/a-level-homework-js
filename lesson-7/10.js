let currencyTable = () => {
  fetch("https://open.er-api.com/v6/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const tables = [];
      const headRow = [" ", ...Object.keys(data.rates)];
      tables.push(headRow);
      for (const [currency, rate] of Object.entries(data.rates)) {
        const row = [];
        row.push(currency);
        for (const currency of Object.keys(data.rates)) {
          row.push(((1 / rate) * data.rates[currency]).toFixed(2));
        }
        tables.push(row);
      }

      console.log(tables);

      let createTable = (arrOfArrays) => {
        let str =
          '<table style="border: 1px solid black;border-collapse:collapse;">';
        for (const array of arrOfArrays) {
          str +=
            arrOfArrays.indexOf(array) % 2 !== 0
              ? '<tr style="background-color:lightgrey;border: 1px solid black;border-collapse:collapse;">'
              : '<tr style="background-color:lightblue;border: 1px solid black;border-collapse:collapse;">';

          for (const number of array) {
            str += `<td style="border: 1px solid black;border-collapse:collapse;"> ${number} </td>`;
          }
          str += "</tr>";
        }
        str += "</table >";
        return document.write(str);
      };
      createTable(tables);
    });
};
currencyTable();
