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
console.log(body.children[1].children[1].children);
console.log(body.children[0].children[3].attrs.id);

// Parent
body.children[0].parent = body;
body.children[1].parent = body;
body.children[0].children[0].parent = body.children[0];
body.children[0].children[1].parent = body.children[0];
body.children[0].children[2].parent = body.children[0];
body.children[0].children[3].parent = body.children[0];
body.children[1].children[0].parent = body.children[1];
body.children[1].children[1].parent = body.children[1];

// Change OK
body.children[1].children[0].attrs[prompt("Введіть атрибут тега <button>")] =
  prompt("Введіть значення");
