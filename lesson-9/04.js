let i = 0;
let a;
while ((a = Math.random())) {
  i++;
  if (a > 0.9) {
    break;
  }
}
console.log(`Кількість ітерацій ${i}`);
