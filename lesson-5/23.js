const badWords = ["блін", "фігня", "фіг"];
let words = prompt("Напишіть щось").split(" ");
let str = words.filter((word) => badWords.indexOf(word) < 0).join(" ");
console.log(str);
