let str = "якийсь текст у якому є один тег <br /> і всяке інше";
let result =
  str.slice(0, str.indexOf("<")) +
  str.slice(str.indexOf("<"), str.indexOf(">")).toUpperCase() +
  str.slice(str.indexOf(">"));
console.log(result);
