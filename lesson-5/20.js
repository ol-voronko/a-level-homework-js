const arrays = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];
let i;
let str = "<table>";
for (const array of arrays) {
  str += i % 2 !== 0 ? '<tr style="color:blue">' : '<tr style="color:red";>';

  for (const number of array) {
    str += "<td>" + number + "</td>";
  }
  str += "</tr>";
}
str += "</table >";
document.write(str);
