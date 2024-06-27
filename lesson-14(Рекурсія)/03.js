const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, 4], d: undefined, e: true },
  true,
  false,
];
function deepCopy(obj) {
  if (typeof obj === "object" && obj) {
    let result;
    if (Array.isArray(obj)) {
      result = [];
    } else {
      result = {};
    }
    for (const key in obj) {
      result[key] = deepCopy(obj[key]);
    }
    return result;
  } else {
    return obj;
  }
}
const arr2 = deepCopy(arr);
console.log(arr2);
arr2[4].a = 100500;
console.log(arr);

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
const table2 = deepCopy(table);
table.children[0].tagName = "AWSXD";

console.log(table2);
