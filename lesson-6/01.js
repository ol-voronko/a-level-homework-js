const cat = {
  name: "Котя",
  age: "2",
  status: "улюблена сволота",
  [prompt("Питання про кота")]: prompt("Відповідь на це питання"),
  [prompt()]: prompt("Відповідь на це питання"),
};
const house = {
  size: "middle",
  floor: "1",
  rooms: "5",
  [prompt("Якийсь параметр будинку")]: prompt("Відповідь на це питання"),
  [prompt("Якийсь параметр будинку")]: prompt("Відповідь на це питання"),
};
const table = {
  material: "wood",
  height: "1m",
  color: "apple",

  [prompt("Параметр стола")]: prompt("Відповідь на це питання"),
  [prompt("параметр стола")]: prompt("Відповідь на це питання"),
};
console.log(cat);
console.log(table);
console.log(house);
const obj = {
  [prompt("Введіть якусь властивість")]: prompt("Якесь значення"),
  ...table,
};
console.log(obj);
