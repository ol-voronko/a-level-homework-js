function isSorted(...params) {
  arr1 = [...params];
  arr = params.sort((a, b) => (a > b ? 1 : -1));
  let a;
  for (let i = 0; i < arr1.length; i++) {
    a = arr[i] === arr1[i];
    if (!a) {
      break;
    }
  }
  return a;
}
