const arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];
let [arr1, [a, ...rest1], [b, ...rest2], [c, ...rest3], [d, ...rest4]] = arr;
const arr2 = [rest1, rest2, rest3, rest4];
console.log(arr2);
