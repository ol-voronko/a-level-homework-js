function domEventPromise(element, eventName) {
  function executor(resolve) {
    const handler = (e) => {
      resolve(e.target);
      element.removeEventListener(eventName, handler);
    };
    element.addEventListener(eventName, handler);
  }
  return new Promise(executor);
}
const knopka = document.createElement("button");
document.body.append(knopka);
domEventPromise(knopka, "click").then((e) => {
  console.log("event click happens", e);
});
