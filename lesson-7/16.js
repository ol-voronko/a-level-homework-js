const input1 = document.createElement("input");
input1.type = "number";
input1.id = "firstCounter";

const input2 = document.createElement("input");
input2.type = "number";
input2.id = "lastCounter";

const input3 = document.createElement("input");
input3.type = "number";
input3.id = "price";

const div = document.createElement("div");
div.id = "divisionResult";

document.body.append(input1);
document.body.append(input2);
document.body.append(input3);
document.body.append(div);

let counterForPay = () => {
  let counter = lastCounter.value - firstCounter.value;
  let forPay = counter * price.value;
  divisionResult.innerHTML = `counter: ${counter},
    forPay: ${forPay.toFixed(2)}`;
};

firstCounter.oninput = lastCounter.oninput = price.oninput = counterForPay;
