const badWords = ["блін", "фігня", "фіг"];
let words = prompt("Напишіть декілька слів").split(" ");
let str = words
  .map((word) => (badWords.includes(word) ? "BEEP" : word))
  .join(" ");
console.log(str);
