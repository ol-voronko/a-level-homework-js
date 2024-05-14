const car = {
  Name: "chevrolet chevelle malibu",
  Cylinders: 8,
  Displacement: 307,
  Horsepower: 130,
  Weight_in_lbs: 3504,
  Origin: "USA",
  in_production: false,
};
let str = "<form>";
for (const [key, value] of Object.entries(car)) {
  if (typeof value === "string") {
    str += `<label> ${key}: <input type="text" value="${value}"/></label>`;
  } else if (typeof value === "number") {
    str += `<label> ${key}: <input type="number" value="${value}"/></label>`;
  } else if (typeof value === "boolean") {
    str += `<label> ${key}: <input type="checkbox" /></label>`;
  }
}
str += "</form>";
document.write(str);

// 2-й варіант
// const car = {
//   Name: "chevrolet chevelle malibu",
//   Cylinders: 8,
//   Displacement: 307,
//   Horsepower: 130,
//   Weight_in_lbs: 3504,
//   Origin: "USA",
//   in_production: false,
// };
// const types = {
//   string: "text",
//   number: "number",
//   boolean: "checkbox",
// };
// let str = "<form>";
// for (const [key, value] of Object.entries(car)) {
//   str += `<label> ${key}: <input type=
//     "${types[typeof value]}"
//    value="${value}" /></label>`;
// }
// str += "</form>";
// document.write(str);
