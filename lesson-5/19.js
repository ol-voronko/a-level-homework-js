const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = '<table style="border: 1px solid black;border-collapse:collapse; ">';
for (const currency of currencies) {
  str += "<tr >";
  for (const letter of currency) {
    str += `<td style="border: 1px solid black;border-collapse:collapse;"> ${letter} </td>`;
  }
  str += "</tr>";
}
str += "</table>";
document.write(str);
