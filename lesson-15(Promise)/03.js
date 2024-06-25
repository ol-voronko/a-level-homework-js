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
  delay(250)
    .then((result) =>
      console.log(`Секунда пройшла. Результат промісу: ${result}`)
    )
    .then(() => delay(1000))
    .then((ms) => console.log(`І ще дві секунди минуло: ${ms}`)),
]).then((value) => console.log(value));
