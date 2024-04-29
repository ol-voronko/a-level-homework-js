let floor = prompt("Введіть кількість поверхів");
let flats = prompt("Введіть кількість квартир на поверсі");
let flatCount = prompt(" Введіть номер квартири");

let flatNumber = floor * flats;

let entrance = flatCount / flatNumber;

let flatFloor = 1 + ((flatCount - 1) % flatNumber) / flats;

alert(
  "Під'їзд :" + Math.ceil(entrance) + " " + "Поверх: " + Math.floor(flatFloor)
);
