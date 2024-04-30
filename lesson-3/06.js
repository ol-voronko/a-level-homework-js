let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let words = str.split(" ");
words.splice(4, 1, "чай");
let result = words.join(" ");
console.log(result);
