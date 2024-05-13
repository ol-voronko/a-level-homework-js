let body = {
  tagName: "body",
  children: [
    {
      tagName: "div",
      children: [
        {
          tagName: "span",
          children: ["Enter a data please: "],
        },
        {
          tagName: "br",
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "name",
          },
        },
        {
          tagName: "input",
          attrs: {
            type: "text",
            id: "surname",
          },
        },
      ],
    },
    {
      tagName: "div",
      children: [
        {
          tagName: "button",
          attrs: {
            id: "ok",
          },
          children: ["OK"],
        },
        {
          tagName: "button",
          attrs: {
            id: "cancel",
          },
          children: ["Cancel"],
        },
      ],
    },
  ],
};
const {
  children: [
    {
      children: [
        { children: textSpan },
        child2,
        child3,
        {
          attrs: { id: idInput2 },
        },
      ],
    },
    {
      children: [button1, { children: textButton2 }],
    },
  ],
} = body;
console.log(textSpan);
console.log(textButton2);
console.log(idInput2);
