let rightLogin = "admin";
let rightPassword = "qwerty";

let login = prompt("Введіть логін");
if (login === rightLogin) {
  let password = prompt("Введіть пароль");
  if (password === rightPassword) {
    alert("Вітаємо Вас на нашому сайті!");
  } else {
    alert("Пароль невірний( ");
  }
} else {
  alert("Логін невірний!");
}
