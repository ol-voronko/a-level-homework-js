const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

async function trafficLight(parent, greenLight, yellowLight, redLight) {
  const redDiv = document.createElement("div");
  const yellowDiv = document.createElement("div");
  const greenDiv = document.createElement("div");
  const defaultStyle = `width:50px;height:50px;border:1px solid grey;border-radius:50px;`;

  redDiv.style = yellowDiv.style = greenDiv.style = defaultStyle;

  parent.append(redDiv);
  parent.append(yellowDiv);
  parent.append(greenDiv);
  while (true) {
    // включаємо зелений
    greenDiv.style = `background-color:green; ${defaultStyle}`;
    await delay(greenLight);
    // включаємо жовтий
    greenDiv.style = ` ${defaultStyle}`;
    yellowDiv.style = `background-color:yellow; ${defaultStyle}`;
    await delay(yellowLight);
    // включаємо червоний
    yellowDiv.style = `${defaultStyle}`;
    redDiv.style = `background-color:red; ${defaultStyle}`;
    await delay(redLight);
    redDiv.style = `${defaultStyle}`;
    //   для більшої схожості зі справжнім
    greenDiv.style = ` ${defaultStyle}`;
    yellowDiv.style = `background-color:yellow; ${defaultStyle}`;
    await delay(yellowLight);
    yellowDiv.style = `${defaultStyle}`;
  }
}
trafficLight(document.body, 3000, 2000, 3000);
