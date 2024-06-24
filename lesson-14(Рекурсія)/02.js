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

function domTree(parent, obj) {
  if (typeof obj === "string") return obj;
  let tag = document.createElement(`${obj.tagName}`);

  if (typeof obj.attrs === "object") {
    for (const [key, value] of Object.entries(obj.attrs)) {
      tag.setAttribute(`${key}`, `${value}`);
    }
  }

  if (typeof obj.children === "object") {
    for (const child of obj.children) {
      if (typeof obj.children[0] === "string") {
        tag.innerText = `${obj.children}`;
      }
      domTree(tag, child);
    }
  }
  parent.append(tag);
}

domTree(document.body, body);
