const arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];
const arrWithoutNulls = arr.slice(-4);
arrWithoutNulls[0] = arrWithoutNulls[0].slice(-4);
arrWithoutNulls[1] = arrWithoutNulls[1].slice(-4);
arrWithoutNulls[2] = arrWithoutNulls[2].slice(-4);
arrWithoutNulls[3] = arrWithoutNulls[3].slice(-4);
console.log(arrWithoutNulls);
