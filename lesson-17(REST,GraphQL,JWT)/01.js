const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

async function trafficLight() {
  const redDiv = document.createElement("div");
  const yellowDiv = document.createElement("div");
  const greenDiv = document.createElement("div");
  const defaultStyle = `width:50px;height:50px;border:1px solid grey;border-radius:50px;`;

  redDiv.style = yellowDiv.style = greenDiv.style = defaultStyle;

  document.body.append(redDiv);
  document.body.append(yellowDiv);
  document.body.append(greenDiv);
  while (true) {
    // включаємо зелений
    greenDiv.style = `background-color:green; ${defaultStyle}`;
    await delay(3000);
    // включаємо жовтий
    greenDiv.style = ` ${defaultStyle}`;
    yellowDiv.style = `background-color:yellow; ${defaultStyle}`;
    await delay(2000);
    // включаємо червоний
    yellowDiv.style = `${defaultStyle}`;
    redDiv.style = `background-color:red; ${defaultStyle}`;
    await delay(3000);
    redDiv.style = `${defaultStyle}`;
    //   для більшої схожості зі справжнім
    greenDiv.style = ` ${defaultStyle}`;
    yellowDiv.style = `background-color:yellow; ${defaultStyle}`;
    await delay(2000);
    yellowDiv.style = `${defaultStyle}`;
  }
}
trafficLight();
