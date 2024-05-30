let table = document.createElement("table");

document.body.append(table);

for (let i = 1; i < 10; i++) {
  let row = document.createElement("tr");
  if (i % 2) {
    row.style.backgroundColor = `lightgrey`;
  }
  for (let j = 1; j < 10; j++) {
    let data = document.createElement("td");

    data.innerText = `${i * j}`;
    data.style = `  border: 1px solid black;
      `;

    data.onmouseover = () => {
      row.style.backgroundColor = `lightblue`;
      for (const td of document.querySelectorAll(`td:nth-child(${j})`)) {
        td.style.backgroundColor = `lightblue`;
      }
    };
    data.onmouseout = () => {
      row.style.backgroundColor = i % 2 ? `lightgrey` : `white`;
      for (const td of document.querySelectorAll(`td:nth-child(${j})`)) {
        td.style.backgroundColor = `transparent`;
      }
    };
    row.append(data);
  }
  table.append(row);
}
