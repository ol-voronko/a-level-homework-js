function checkResult(original, validator) {
  function wrapper(...params) {
    let result = original(...params);

    while (!validator(result)) {
      result = original(...params);
    }
    return result;
  }

  return wrapper;
}
const numberPrompt = checkResult(prompt, (x) => !isNaN(+x));
let number = +numberPrompt("Введіть число", "0");

const gamePrompt = checkResult(prompt, (x) =>
  ["камень", "ножиці", "папір"].includes(x.toLowerCase())
);
const turn = gamePrompt("Введіть щось зі списку: 'камень', 'ножиці', 'папір'");
