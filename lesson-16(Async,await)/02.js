async function swapiLinks(link) {
  let response = await fetch(link);
  let responseData = await response.json();
  let promises = [];
  for (const key of Object.keys(responseData)) {
    if (
      typeof responseData[key] === "string" &&
      responseData[key].includes("https://")
    ) {
      responseData[key] = fetch(`${responseData[key]}`)
        .then((res) => res.json())
        .then((res) => (responseData[key] = res));
      promises.push(responseData[key]);
    } else if (Array.isArray(responseData[key])) {
      responseData[key] = responseData[key].map((el) => {
        if (el.startsWith("https://")) {
          return fetch(`${el}`).then((res) => res.json());
        } else {
          return el;
        }
      });
      const promise = Promise.all(responseData[key]).then(
        (data) => (responseData[key] = data)
      );
      promises.push(promise);
    }
  }
  await Promise.all(promises);

  return responseData;
}
swapiLinks("https://swapi.dev/api/people/20/").then((yodaWithLinks) =>
  console.log(JSON.stringify(yodaWithLinks, null, 4))
);
