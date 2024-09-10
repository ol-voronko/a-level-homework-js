function makeSaver(f) {
  let result;
  return () => {
    if (result === undefined) {
      result = f();
    }
    return result;
  };
}

let saver = makeSaver(Math.random);
let value1 = saver();
let value2 = saver();

alert(`Random: ${value1} === ${value2}`);

let saver2 = makeSaver(() => {
  console.log("saved function called");
  return [null, undefined, false, "", 0, Math.random()][
    Math.floor(Math.random() * 6)
  ];
});
let value3 = saver2();
let value4 = saver2();

alert(value3 === value4);

let namePrompt = prompt.bind(window, "Як тебе звуть?");
let nameSaver = makeSaver(namePrompt);
alert(`Привіт! Prompt ще не було!`);
alert(`Привіт ${nameSaver()}. Щойно запустився prompt, перший та останній раз`);
alert(`Слухай, ${nameSaver()}, го пити пиво. Адже prompt був лише один раз`);
