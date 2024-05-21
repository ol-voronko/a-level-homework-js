const line = prompt();
const bracketsStack = [];
let i = 0;
for (const character of line) {
  if (character === "{" || character === "[" || character === "(") {
    bracketsStack.push(character);
  } else if (character === "}" || character === "]" || character === ")") {
    if (
      (character === "}" && bracketsStack[bracketsStack.length - 1] === "{") ||
      (character === "]" && bracketsStack[bracketsStack.length - 1] === "[") ||
      (character === ")" && bracketsStack[bracketsStack.length - 1] === "(")
    ) {
      bracketsStack.pop();
    } else {
      //   alert(`Помилка на ${i + 1} місці в рядку`);
      break;
    }
  }
  i++;
}
i === line.length && bracketsStack.length == 0
  ? alert("ura!!")
  : alert(`Помилка на ${i + 1} місці в рядку`);
