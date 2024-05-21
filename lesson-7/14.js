const input1 = document.createElement("input");
input1.type = "number";
input1.id = "firstNumber";

const input2 = document.createElement("input");
input2.type = "number";
input2.id = "secondNumber";

const div = document.createElement("div");
div.id = "divisionResult";

document.body.append(input1);
document.body.append(input2);
document.body.append(div);

const calcResult = () => {
  divisionResult.innerHTML = `${firstNumber.value / secondNumber.value}`;
};
firstNumber.oninput = secondNumber.oninput = calcResult;
