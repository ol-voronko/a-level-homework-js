const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

async function pedestrianTrafficLight(parent, redLight, greenLight) {
  const redDiv = document.createElement("div");
  const greenDiv = document.createElement("div");

  const defaultStyle = `width:50px;height:50px;border:1px solid grey;border-radius:50px;`;

  redDiv.style = greenDiv.style = defaultStyle;

  parent.append(redDiv);
  parent.append(greenDiv);

  while (true) {
    redDiv.style = `background-color:red;${defaultStyle}`;

    await delay(redLight);

    redDiv.style = defaultStyle;
    greenDiv.style = `background-color:green; ${defaultStyle}`;

    await delay(greenLight);

    greenDiv.style = defaultStyle;
  }
}

pedestrianTrafficLight(document.body, 3000, 3000);
