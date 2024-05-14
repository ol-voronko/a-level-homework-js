fetch("https://open.er-api.com/v6/latest/USD")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let str = "<select>";
    for (const currency of Object.keys(data.rates)) {
      str += "<option>" + currency + "</option>";
    }
    str += "</select>";
    document.write(str);
  });
