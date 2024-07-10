function jwtDecode(token) {
  try {
    const idPart = token.split(".")[1];
    const decoded = window.atob(idPart);
    const result = JSON.parse(decoded);
    return result;
  } catch (err) {
    return undefined;
  }
}

// АБО
// як краще писати ?Перший варіант здається більш зрозумілим

// function jwtDecode(token) {
//   try {
//     const result = JSON.parse(window.atob(token.split(".")[1]));
//     return result;
//   } catch (err) {
//     return undefined;
//   }
// }
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";
console.log(jwtDecode(token));
try {
  console.log(jwtDecode()); //undefined
  console.log(jwtDecode("дічь")); //undefined
  console.log(jwtDecode("ey.ey.ey")); //undefined

  console.log(
    "до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором"
  );
} finally {
  console.log("ДЗ, мабуть, закінчено");
}
console.log(jwtDecode());
