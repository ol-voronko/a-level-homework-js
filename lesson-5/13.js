let string = prompt("введіть щось");
const [, second = "!", , fourth = "!", fifth = "!"] = string;
alert(`second : ${second} , fourth : ${fourth}, fifth : ${fifth}`);
