let readArrayOfObjects = () => {
  let arr = [];
  while (confirm("Створимо новий об'єкт?")) {
    let obj = {};
    while ((text = prompt("Введіть ключ"))) {
      obj[text] = prompt("Введіть значення ");
    }
    arr.push(obj);
  }
  console.log(arr);
};
readArrayOfObjects();
