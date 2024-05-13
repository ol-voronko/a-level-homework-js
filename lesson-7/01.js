const Temperature = (degrees) => {
  const fahrenheit = degrees * 1.8 + 32;
  return fahrenheit;
};
console.log(Temperature(10));
