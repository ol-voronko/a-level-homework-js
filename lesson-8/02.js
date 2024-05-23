let age = +prompt("Скільки вам років?", "");
if (age < 0) {
  alert("Who are you? Where are you?");
} else if (age < 18) {
  alert("школяр");
} else {
  if (age > 18 && age < 30) {
    alert("молодь");
  } else {
    if (age > 30 && age < 45) {
      alert("зрілість");
    } else {
      if (age > 45 && age < 60) {
        alert("захід сонця");
      } else {
        alert("як пенсія?");
      }
    }
  }
}
