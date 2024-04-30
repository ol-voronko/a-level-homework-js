let lastName = prompt("Ваше прізвище ?").trim();
let firstName = prompt("Ваше ім'я?").trim();
let surname = prompt("По-батькові?").trim();

lastName = lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
firstName =
  firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
surname = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase();

let fullName = lastName + " " + firstName + " " + surname;

alert(fullName);
