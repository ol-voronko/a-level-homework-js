let degrees = prompt("Введіть градуси Цельсія");

let fahrenheit = degrees * 1.8 + 32;

alert("В градусах за Фаренгейтом це : " + fahrenheit + "F");

let degreesFahrenheit = prompt(
  "Введіть кількість градусів за шкалою Фаренгейту"
);
let degreesCelsius = (degreesFahrenheit - 32) / 1.8;
alert("За шкалою Цельсія : " + degreesCelsius);
