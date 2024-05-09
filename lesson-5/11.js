const arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];
const arr1 = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4]];
console.log(arr1);
console.log(arr1.length);
