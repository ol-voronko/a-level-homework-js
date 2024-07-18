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
function htmlTree(obj) {
  if (typeof obj === "string") return obj;
  let str = `< ${obj.tagName} `;
  if (typeof obj.attrs === "object") {
    for (const [key, value] of Object.entries(obj.attrs)) {
      str += ` ${key} =${value}`;
    }
  }
  str += `>`;
  if (typeof obj.children === "object") {
    for (const child of obj.children) {
      str += htmlTree(child);
    }
  }
  str += `< / ${obj.tagName} >`;
  return str;
}

const html = htmlTree(table);
document.write(html);
