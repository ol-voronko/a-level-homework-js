let words = prompt("Введіть якесь речення").split(" ");
const capitalize = (str) => {
  let result;
  result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  return result;
};

let str = words.map(capitalize).join(" ");
alert(str);
