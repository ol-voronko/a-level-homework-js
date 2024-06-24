function fetchTable(DOM, JSON) {
  let table = document.createElement("table");

  for (const [key, value] of Object.entries(JSON)) {
    const row = document.createElement("tr");
    const nameParam = document.createElement("td");
    nameParam.innerText = `${key}`;
    const valueParam = document.createElement("td");
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
