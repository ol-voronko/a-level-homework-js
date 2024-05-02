let number = prompt("Введіть число");
if (isNaN(number)) {
  alert("Некорректно!");
} else {
  if (number % 2) {
    alert(`Число ${number} непарне`);
  } else {
    alert(`Число ${number} парне`);
  }
}
