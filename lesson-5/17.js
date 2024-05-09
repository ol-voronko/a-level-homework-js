const names = ["John", "Paul", "George", "Ringo"];
let str = "<table>";
str += "<tr>";
for (const name of names) {
  str += "<td>" + name + "</td>";
}
str += "</tr>";
str += "</table>";
document.write(str);
