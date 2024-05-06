let choice = prompt("Введіть номер завдання від 1 до 14");

if (choice == 1) {
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
} else if (choice == 2) {
  let userText = prompt("Напишіть щось ");
  if (userText.indexOf("bad word") != -1) {
    alert("Як не соромно!");
  } else {
    alert("Вихована людина!)");
  }
} else if (choice == 3) {
  let today = confirm("Сьогодні зустрінемось?");
  console.log(today);

  let gender = confirm("Ви жінка?");
  console.log(gender);

  let age = confirm("Вaм вже є 18?");
  console.log(age);
} else if (choice == 4) {
  let gender = confirm("Ви жінка?");

  if (gender) {
    alert("Ви-жінка");
  } else {
    alert("Ви чоловік");
  }
  let today = confirm("зустрінемось сьогодні?");
  if (today) {
    alert("До зустрічі)");
  } else {
    alert("Шкода(");
  }
} else if (choice == 5) {
  let size = prompt("Введіть ваш розмір білизни");

  if (size == 42) {
    alert("Вaш розмір 36");
  } else if (size == 44) {
    alert("Вaш розмір 38");
  } else if (size == 46) {
    alert("Вaш розмір 40");
  } else if (size == 48) {
    alert("Вaш розмір 42");
  } else if (size == 50) {
    alert("Вaш розмір 44");
  } else if (size == 52) {
    alert("Вaш розмір 46");
  } else if (size == 54) {
    alert("Вaш розмір 48");
  } else if (size == 56) {
    alert("Вaш розмір 50");
  } else if (size < 42 || size > 56) {
    alert("Нажаль в нас немає такого розміру");
  }
} else if (choice == 6) {
  alert(confirm("Ви чоловік?") ? "Ви чоловік" : "Ви жінка");
} else if (choice == 7) {
  let age = prompt("Скільки Вам років?") || "Напишіть правильну відповідь!";
  alert(age);
} else if (choice == 8) {
  confirm("Шоппинг?") || alert("Ти бяка!!!");
} else if (choice == 9) {
  if (!confirm("Shopping?")) {
    alert("Ти бяка!!!");
  }
} else if (choice == 10) {
  let lastName = prompt("Введіть своє прізвище") || "Петренко";
  let firstName = prompt("Введіть своє ім'я") || "Петро";
  let surname = prompt("Введіть своє  по-батькові") || "Петрович";

  alert(lastName + " " + firstName + " " + surname);
} else if (choice == 11) {
  let firstName = prompt("Введіть Ваше ім'я");
  if (firstName) {
    firstName = firstName;
  } else {
    firstName = "Петро";
  }
  let surname = prompt("Введіть Ваше по-батькові");
  if (surname) {
    surname = surname;
  } else {
    surname = "Петрович";
  }
  let lastName = prompt("Введіть Ваше прізвище");
  if (lastName) {
    lastName = lastName;
  } else {
    lastName = "Петренко";
  }

  alert(lastName + " " + firstName + " " + surname);
} else if (choice == 12) {
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
} else if (choice == 13) {
  let usdPurchase = 39.4;
  let usdSale = 39.85;
  let eurPurchase = 42.25;
  let eurSale = 42.95;
  let plnPurchase = 9.71;
  let plnSale = 9.875;
  let rate;
  let currency = prompt("Введіть назву валюти для обміну: USD,EUR,PLN");

  let operation = confirm(
    "Якщо бажаєте купити натисніть ОК,якщо бажаєте продати натисніть Cansel(Скасувати)"
  );

  if (currency.toUpperCase() === "USD") {
    rate = operation ? usdSale : usdPurchase;
  } else if (currency.toUpperCase() === "EUR") {
    rate = operation ? eurSale : eurPurchase;
  } else if (currency.toUpperCase() === "PLN") {
    rate = operation ? plnSale : plnPurchase;
  } else {
    alert("Некорректно вказано назву валюти!");
  }

  let sum = prompt("Введіть суму обміну");
  let result = operation ? sum / rate : sum * rate;

  if (!isNaN(result)) {
    operation
      ? alert(`Ви отримаєте ${result.toFixed(2)} ${currency.toUpperCase()}`)
      : alert(`Ви отримаєте ${result.toFixed(2)} грн`);
  } else {
    alert("Почніть спочатку");
  }
} else if (choice == 14) {
  let userMove = prompt("Ваш хід:камінь,ножиці чи папір?");
  if (
    userMove.toLowerCase() !== "камінь" &&
    userMove.toLowerCase() !== "ножиці" &&
    userMove.toLowerCase() !== "папір"
  ) {
    alert("Будьте уважні!Ви ввели некорректне значення і програли(");
  } else {
    let botMove = Math.floor(Math.random() * 3);
    if (botMove == 0) {
      botMove = "камінь";
    } else if (botMove == 1) {
      botMove = "ножиці";
    } else if (botMove == 2) {
      botMove = "папір";
    }
    alert(`Хід комп'ютера:${botMove}`);
    if (userMove.toLowerCase() === botMove) {
      alert("нічия");
    } else if (
      (userMove.toLowerCase() === "камінь" && botMove === "ножиці") ||
      (userMove.toLowerCase() === "ножиці" && botMove === "папір") ||
      (userMove.toLowerCase() === "папір" && botMove === "камінь")
    ) {
      alert("Вітаємо з виграшем!");
    } else {
      alert("Ви програли(");
    }
  }
} else {
  alert("Номер завдання некорректно введений!");
}
