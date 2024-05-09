const arr = [
  [0, 0, 0, 0, 0],
  [0, 1, 2, 3, 4],
  [0, 2, 4, 6, 8],
  [0, 3, 6, 9, 12],
  [0, 4, 8, 12, 16],
];

const arr2 = arr.slice();
const arr3 = structuredClone(arr);
arr[0].push(1);
console.log(arr2);
console.log(arr3);
console.log(arr);
