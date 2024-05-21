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

let createAndSortTable = (arrOfObjects, key, isSortGrow = true) => {
  const copyArrOfObjects = [...arrOfObjects];
  console.log(copyArrOfObjects);

  let sort = (copyArrOfObjects) => {
    copyArrOfObjects.sort((a, b) => {
      if (isSortGrow) {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
      } else {
        if (a[key] < b[key]) return 1;
        if (a[key] > b[key]) return -1;
      }
    });
    return copyArrOfObjects;
  };
  let sortCopyOfArray = sort(copyArrOfObjects);
  console.log(sortCopyOfArray);
  let columns = [];
  for (const object of sortCopyOfArray) {
    for (const key in object) {
      if (!columns.includes(key)) {
        columns.push(key);
      }
    }
  }
  let str = '<table style="border: 1px solid black;border-collapse:collapse;">';
  str += '<tr style="background-color:grey;">';
  for (const column of columns) {
    str += `<th style="border: 1px solid black;border-collapse:collapse;"> ${column}  </th>`;
  }
  str += "</tr>";

  for (const object of sortCopyOfArray) {
    str += "<tr>";

    for (const column of columns) {
      str += `<td style="border: 1px solid black;border-collapse:collapse;" > ${
        object[column] === undefined ? " " : object[column]
      } </td>`;
    }
  }
  str += "</tr>";
  str += "</table>";

  document.write(str);
};
createAndSortTable(persons, "Name");
