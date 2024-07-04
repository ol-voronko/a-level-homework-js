function delay(ms) {
  function executor(fulfill, reject) {
    setTimeout(() => fulfill(ms), ms);
  }

  return new Promise(executor);
}
Promise.race([
  fetch("https://swapi.dev/api/people/1/")
    .then((res) => res.json())
    .then((luke) => console.log(luke)),
  delay(250),
]).then((value) => {
  console.log(value);
});
