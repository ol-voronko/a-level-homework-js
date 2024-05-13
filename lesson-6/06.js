const cat = {
  name: "Котя",
  age: "2",
  status: "улюблена сволота",
  [prompt("Питання про кота")]: prompt("Відповідь на це питання"),
  [prompt("Ще щось")]: prompt("Відповідь на це питання"),
};
const { [prompt("Питання про кота")]: value, ...aboutCat } = cat;

const copyCat = { ...aboutCat };
