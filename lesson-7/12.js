var persons = [
  { name: "Іван", age: 17 },
  { name: "Олексій", age: 73 },
  { name: "Яків", age: 12 },
  { name: "Марія", age: 35 },
];

let sort = (arr, key, isSortByGrow = true) => {
  arr.sort((a, b) => {
    if (isSortByGrow) {
      if (a[key] > b[key]) return 1;
      if (a[key] < b[key]) return -1;
    } else {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
    }
  });
  return arr;
};
