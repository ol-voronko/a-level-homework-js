const line = prompt();
const bracketsStack = [];
let i = 0;
// for (const character of line) {
//   //не звертайте уваги на символи, крім трьох видів дужок
//   if (character === "[" || character === "{" || character === "(") {
//     bracketsStack.push(character);
//   } else if (
//     (character === ")" && line[i - 1] === "(") ||
//     (character === "}" && line[i - 1] === "{") ||
//     (character === "]" && line[i - 1] === "[")
//   ) {
//     bracketsStack.pop();
//     break;
//   } else if (
//     (character === ")" && line[i - 1] !== "(") ||
//     (character === "}" && line[i - 1] !== "{") ||
//     (character === "]" && line[i - 1] !== "[")
//   ) {
//     console.log("Mistake!");
//     break;
//   }
//   i++; //iндекс поточної лiтери
// }
