let table = document.createElement("table");

document.body.append(table);

for (let i = 1; i < 10; i++) {
  let row = document.createElement("tr");

  for (let j = 1; j < 10; j++) {
    let data = document.createElement("td");

    data.innerText = `${i * j}`;
    data.style = `  border: 1px solid black;
      `;
    if (i % 2) {
      data.style.backgroundColor = `lightgrey`;
    }
    data.onmouseover = () => (data.style.backgroundColor = `lightblue`);
    data.onmouseout = () =>
      (data.style.backgroundColor = i % 2 ? `lightgrey` : `white`);
    row.append(data);
  }
  table.append(row);
}
