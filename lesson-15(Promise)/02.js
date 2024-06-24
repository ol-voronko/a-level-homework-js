function fetchTable(DOM, JSON) {
  let table = document.createElement("table");
  table.style = `border: 1px solid black;border-collapse:collapse; `;
  for (const [key, value] of Object.entries(JSON)) {
    const row = document.createElement("tr");

    const nameParam = document.createElement("td");
    nameParam.style = `border: 1px solid black;border-collapse:collapse; `;
    nameParam.innerText = `${key}`;
    const valueParam = document.createElement("td");

    if (typeof value === "string" && value.includes("https://swapi.dev/api/")) {
      const button1 = document.createElement("button");

      button1.innerText = "Want facts?Click me";
      button1.onclick = () => {
        fetch(`${value}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            fetchTable(valueParam, data);
          });
      };
      valueParam.append(button1);
    } else if (
      Array.isArray(value) &&
      value.filter((x) => x.includes("https://swapi.dev/api/"))
    ) {
      value
        .filter((x) => x.includes("https://swapi.dev/api/"))
        .forEach((x) => {
          const button = document.createElement("button");

          button.innerText = "Want facts?Click me";
          button.onclick = () => {
            fetch(`${x}`)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                fetchTable(valueParam, data);
              });
          };
          valueParam.append(button);
        });
    } else {
      valueParam.innerText = `${value}`;
    }
    valueParam.style = `border: 1px solid black;border-collapse:collapse; `;

    row.append(nameParam);
    row.append(valueParam);
    table.append(row);
  }

  DOM.append(table);
}
fetch("https://swapi.dev/api/people/1/")
  .then((res) => res.json())
  .then((luke) => {
    console.log(luke);

    fetchTable(document.body, luke);
  });
