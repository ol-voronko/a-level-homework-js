const capitalize = (str) => {
  let result;
  result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  return result;
};
console.log(capitalize("cANBerRa"));
