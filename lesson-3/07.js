let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let result = str.slice(0, str.indexOf("<")) + str.slice(str.indexOf(">") + 1);

console.log(result);
