const first = [];
first.push(prompt("Введіть якесь слово"));
first.push(prompt("Введіть якесь слово"));
first.push(prompt("Введіть якесь слово"));
first.push(prompt("Введіть якесь слово"));
first.push(prompt("Введіть якесь слово"));
console.log(first);

const second = [];
second.push(first.pop());
second.push(first.pop());
second.push(first.pop());
second.push(first.pop());
second.push(first.pop());
console.log(second);

const third = [];
third.unshift(second.shift());
third.unshift(second.shift());
third.unshift(second.shift());
third.unshift(second.shift());
third.unshift(second.shift());
console.log(third);
