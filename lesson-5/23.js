const badWords = ["блін", "фігня", "фіг"];
let words = prompt("Напишіть щось").split(" ");
let str = words.filter((word) => badWords.indexOf > -1);
console.log(str);
