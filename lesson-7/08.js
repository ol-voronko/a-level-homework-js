let createTable = (arrOfArrays) => {
  let str = '<table style="border: 1px solid black;border-collapse:collapse;">';
  for (const array of arrays) {
    str +=
      arrays.indexOf(array) % 2 !== 0
        ? '<tr style="background-color:blue;border: 1px solid black;border-collapse:collapse;">'
        : '<tr style="background-color:yellow;border: 1px solid black;border-collapse:collapse;">';

    for (const number of array) {
      str += `<td style="border: 1px solid black;border-collapse:collapse;"> ${number} </td>`;
    }
    str += "</tr>";
  }
  str += "</table >";
  return str;
};
