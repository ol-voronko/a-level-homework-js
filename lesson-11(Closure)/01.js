function makeProfileTimer() {
  let t = performance.now();
  return () => performance.now() - t;
}
const timer = makeProfileTimer();

alert("Вимiрюємо час роботи цього alert"); //якийсь код, час виконання якого ми хочемо виміряти з високою точністю
alert(timer()); //alert повинен вивести час у мілiсекундах від виконання makeProfileTimer до моменту виклику timer(),
// тобто виміряти час виконання alert
const timer2 = makeProfileTimer();
prompt("");
alert(`Час роботи двух аlert та одного prompt ${timer()}`);
alert(`Час роботи prompt та попереднього alert ${timer2()}`);

// const a = {
//   getValue() {
//     console.log("GG");
//   },
//   setValue() {
//     console.log("Ok");
//   },
// };
// for (const field in a) {
//   const fieldName = field.slice(3);
//   console.log(fieldName);
// }
