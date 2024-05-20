let createForm = (obj) => {
  let str = "<form>";
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "string") {
      str += `<label> ${key}: <input type="text" value="${value}"/></label><br>`;
    } else if (typeof value === "number") {
      str += `<label> ${key}: <input type="number" value="${value}"/></label><br>`;
    } else if (typeof value === "boolean") {
      str += `<label> ${key}: <input type="checkbox" /></label>`;
    }
  }
  str += "</form>";

  return document.write(str);
};

// АБО

// let createForm = (obj) => {
//   const types = {
//     string: "text",
//     number: "number",
//     boolean: "checkbox",
//   };
//   let str = "<form>";
//   for (const [key, value] of Object.entries(obj)) {
//     str += `<label> ${key}: <input type=
//       "${types[typeof value]}"
//      value="${value}" /></label><br>`;
//   }
//     str += "</form>";
//     return str;

// }
