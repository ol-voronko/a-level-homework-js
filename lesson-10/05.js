function isSorted(...params) {
  let i;
  for (i = 1; i < params.length + 1; i++) {
    if (params[i] < params[i - 1]) {
      return false;
    }
  }
  return true;
}

let array = [];

while ((el = +prompt("Напишіть щось"))) {
  array.push(el);
}
console.log(array);
console.log(isSorted(...array));
