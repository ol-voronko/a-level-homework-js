let counterForPay = (firstCounter, lastCounter, price) => {
  let resultCounter = lastCounter - firstCounter;
  let forPay = resultCounter * price;
  return {
    resultCounter: resultCounter,
    forPay: forPay,
  };
};
