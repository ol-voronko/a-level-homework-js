let arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = [];
  for (let j = 0; j < 10; j++) {
    arr[i][j] = i * j;
  }
}
console.log(arr);
