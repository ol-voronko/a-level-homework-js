// const persons = [
//   {
//     name: "Марія",
//     fatherName: "Іванівна",
//     surname: "Іванова",
//     sex: "female",
//   },
//   {
//     name: "Миколай",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     age: 15,
//   },
//   {
//     name: "Петро",
//     fatherName: "Іванович",
//     surname: "Іванов",
//     married: true,
//   },
// ];
const persons = [
  {
    Name: "chevrolet chevelle malibu",
    Cylinders: 8,
    Displacement: 307,
    Horsepower: 130,
    Weight_in_lbs: 3504,
    Origin: "USA",
  },
  {
    Name: "buick skylark 320",
    Miles_per_Gallon: 15,
    Cylinders: 8,
    Displacement: 350,
    Horsepower: 165,
    Weight_in_lbs: 3693,
    Acceleration: 11.5,
    Year: "1970-01-01",
  },
  {
    Miles_per_Gallon: 18,
    Cylinders: 8,
    Displacement: 318,
    Horsepower: 150,
    Weight_in_lbs: 3436,
    Year: "1970-01-01",
    Origin: "USA",
  },
  {
    Name: "amc rebel sst",
    Miles_per_Gallon: 16,
    Cylinders: 8,
    Displacement: 304,
    Horsepower: 150,
    Year: "1970-01-01",
    Origin: "USA",
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
let str = '<table style="border: 1px solid black;border-collapse:collapse;">';
str += '<tr style="background-color:grey;">';
for (const column of columns) {
  str += `<th style="border: 1px solid black;border-collapse:collapse;"> ${column.padStart(
    20
  )}  </th>`;
}
str += "</tr>";

for (const person of persons) {
  str += "<tr>";

  for (const column of columns) {
    str += `<td style="border: 1px solid black;border-collapse:collapse;" > ${
      person[column] === undefined ? " " : person[column]
    } </td>`;
  }
}

str += "</tr>";

document.write(str);
