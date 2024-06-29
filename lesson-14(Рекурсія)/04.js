const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true },
  true,
  false,
];

function stringify(obj) {
  if (typeof obj === "object" && obj) {
    let result;
    if (Array.isArray(obj)) {
      result = "[";
      for (const key in obj) {
        if (typeof obj[key] === "undefined" && Array.isArray(obj)) {
          result += null;
        } else if (typeof obj[key] === "string") {
          result += `"${obj[key]}"`;
        } else {
          result += stringify(obj[key]);
        }
        result += ",";
      }
      result = result.slice(0, -1);
      result += "]";
    } else {
      result = "{";
      for (const key in obj) {
        if (typeof obj[key] === "undefined") {
          result += "";
        } else {
          result += `"${key}":`;

          if (typeof obj[key] === "string") {
            result += `"${obj[key]}"`;
          } else if (
            obj[key] === null ||
            typeof obj[key] === "boolean" ||
            typeof obj[key] === "number"
          ) {
            result += `${obj[key]}`;
          } else {
            result += stringify(obj[key]);
          }
          result += ",";
        }
      }
      result = result.slice(0, -1);
      result += "}";
    }
    return result;
  } else {
    return obj;
  }
}

const jsonString = stringify(arr);
console.log(jsonString);
console.log(arr);
console.log(JSON.stringify(arr));
const table = {
  tagName: "table",
  attrs: {
    border: "1",
  },
  children: [
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["1x1"],
        },
        {
          tagName: "td",
          children: ["1x2"],
        },
      ],
    },
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["2x1"],
        },
        {
          tagName: "td",
          children: ["2x2"],
        },
      ],
    },
  ],
};
const jsonString2 = stringify(table);
console.log(jsonString2);
console.log(JSON.stringify(table));
console.log(JSON.parse(jsonString));
