let arr = prompt("Напишіть декілька слів через пробіл").split(" ");
console.log(arr);
let place = arr.indexOf(prompt("Яке слово будемо шукати?"));
place == -1
  ? alert("Слово не знайдено")
  : alert(`Його місце в рядку : ${place + 1}`);
