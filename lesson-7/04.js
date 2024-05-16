let credentials = () => {
  const capitalize = (str) =>
    (result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase());

  const person = {};

  let name = prompt("Ваше ім'я?").trim();
  if (name) person.name = capitalize(name);

  let fatherName = prompt("По-батькові?").trim();
  if (fatherName) person.fatherName = capitalize(fatherName);

  let surname = prompt("Ваше прізвище ?").trim();
  if (surname) person.surname = capitalize(surname);

  person.fullName = `${person.name} ${person.fatherName} ${person.surname}`;

  return person;
};
console.log(credentials());
