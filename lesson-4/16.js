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
  alert(`Хід комп'ютера:  ${botMove}`);

  (userMove.toLowerCase() === botMove && alert("нічия")) ||
    (((userMove.toLowerCase() === "камінь" && botMove === "ножиці") ||
      (userMove.toLowerCase() === "ножиці" && botMove === "папір") ||
      (userMove.toLowerCase() === "папір" && botMove === "камінь")) &&
      alert("Вітаємо з виграшем!")) ||
    (userMove.toLowerCase() !== botMove &&
      !(
        (userMove.toLowerCase() === "камінь" && botMove === "ножиці") ||
        (userMove.toLowerCase() === "ножиці" && botMove === "папір") ||
        (userMove.toLowerCase() === "папір" && botMove === "камінь")
      ) &&
      alert("Ви програли!"));
}
