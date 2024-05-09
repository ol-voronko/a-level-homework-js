const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";
for (const name of names) {
  str += "<tr>";
  str += "<td>" + name + "</td>";
  str += "</tr>";
}
str += "</table>";
document.write(str);
