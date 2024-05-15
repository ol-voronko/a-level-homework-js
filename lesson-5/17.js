const names = ["John", "Paul", "George", "Ringo"];
let str = '<table style="border: 1px solid black;border-collapse:collapse; ">';
str += "<tr>";
for (const name of names) {
  str += `<td style="border: 1px solid black;border-collapse:collapse; "> ${name}  </td>`;
}
str += "</tr>";
str += "</table>";
document.write(str);
