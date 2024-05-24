fetch(
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (const country of Object.keys(data)) {
      const option = document.createElement("option");
      option.innerText = `${country}`;
      countries.append(option);
    }
    countries.onchange = () => {
      cities.innerText = " ";
      for (const town of data[countries.value]) {
        const option1 = document.createElement("option");
        option1.innerText = `${town}`;
        cities.append(option1);
      }
    };
  });
