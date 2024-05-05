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
