const arrOfArrays = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];
let str = '<table style="border: 1px solid black;border-collapse:collapse;">';
for (const array of arrOfArrays) {
  str +=
    arrOfArrays.indexOf(array) % 2 !== 0
      ? '<tr style="background-color:blue;border: 1px solid black;border-collapse:collapse;">'
      : '<tr style="background-color:yellow;border: 1px solid black;border-collapse:collapse;">';

  for (const number of array) {
    str += `<td style="border: 1px solid black;border-collapse:collapse;"> ${number} </td>`;
  }
  str += "</tr>";
}
str += "</table >";
document.write(str);
