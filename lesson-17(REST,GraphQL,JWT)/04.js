const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));

function domEventPromise(element, eventName) {
  function executor(resolve) {
    const handler = (e) => {
      resolve(e.target);
      element.removeEventListener(eventName, handler);
    };
    element.addEventListener(eventName, handler);
  }
  return new Promise(executor);
}

async function pedestrianTrafficLight(parent, redLight, greenLight) {
  const redDiv = document.createElement("div");
  const greenDiv = document.createElement("div");
  const switcherButton = document.createElement("button");
  switcherButton.innerText = "Click and GO";

  const defaultStyle = `width:50px;height:50px;border:1px solid grey;border-radius:50px;`;

  redDiv.style = greenDiv.style = defaultStyle;

  parent.append(redDiv);
  parent.append(greenDiv);
  parent.append(switcherButton);
  switcherButton.onclick = () => {
    switcherButton.disabled = true;
    setTimeout(() => (switcherButton.disabled = false), 2000);
  };
  while (true) {
    redDiv.style = `background-color:red;${defaultStyle}`;
    await Promise.race([
      delay(redLight),
      domEventPromise(switcherButton, "click"),
    ]);

    redDiv.style = defaultStyle;
    greenDiv.style = `background-color:green; ${defaultStyle}`;

    await delay(greenLight);
    greenDiv.style = defaultStyle;
  }
}

pedestrianTrafficLight(document.body, 3000, 3000);
