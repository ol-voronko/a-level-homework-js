const persons = [
  {
    name: "Марія",
    fatherName: "Іванівна",
    surname: "Іванова",
    sex: "female",
  },
  {
    name: "Миколай",
    fatherName: "Іванович",
    surname: "Іванов",
    age: 15,
  },
  {
    name: "Петро",
    fatherName: "Іванович",
    surname: "Іванов",
    married: true,
  },
];
let columns = [];
for (const person of persons) {
  for (const key in person) {
    if (!columns.includes(key)) {
      columns.push(key);
    }
  }
}
console.log(columns);
let str = "<table>";
str += '<tr style="background-color:grey">';
for (const column of columns) {
  str += `<th> ${column.padStart(20)}  </th>`;
}
str += "</tr>";

for (const person of persons) {
  str += "<tr>";

  for (const column of columns) {
    str += `<td> ${person[column] === undefined ? " " : person[column]} </td>`;
  }
}

str += "</tr>";

document.write(str);
