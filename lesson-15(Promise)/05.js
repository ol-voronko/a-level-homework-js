function promptPromise(text) {
  return new Promise((resolve, reject) => {
    let name = prompt(text);
    if (name) {
      resolve(name);
    } else {
      reject();
    }
  });
}
// function promptPromise(text) {
//   function executor(resolve, reject) {
//     if (prompt(text)) {
//       resolve(prompt(text));
//     } else {
//       reject();
//     }
//   }
//   return new Promise(executor);
// }
promptPromise("Як тебе звуть?").then(
  (name) => console.log(`Тебе звуть ${name}`),
  () => console.log("'Ну навіщо морозитися, нормально ж спілкувалися'")
);
