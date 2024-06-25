function confirmPromise(text) {
  function executor(resolve, reject) {
    if (confirm(text)) {
      resolve();
    } else {
      reject();
    }
  }

  return new Promise(executor);
}
confirmPromise("Проміси це складно?").then(
  () => console.log("Не так вже й складно"),
  () => console.log("respect за посидючість і уважність")
);
