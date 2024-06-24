function fetchTable(DOM, JSON) {
  let table = document.createElement("table");
  table.style = `border: 1px solid black;border-collapse:collapse; `;
  for (const [key, value] of Object.entries(JSON)) {
    const row = document.createElement("tr");

    const nameParam = document.createElement("td");
    nameParam.style = `border: 1px solid black;border-collapse:collapse; `;
    nameParam.innerText = `${key}`;
    const valueParam = document.createElement("td");
    valueParam.style = `border: 1px solid black;border-collapse:collapse; `;
    valueParam.innerText = `${value}`;
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
