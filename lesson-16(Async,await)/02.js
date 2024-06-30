async function swapiLinks(link) {
  let response = await fetch(link);
  let responseData = await response.json();

  for (const key of Object.keys(responseData)) {
    if (
      typeof responseData[key] === "string" &&
      responseData[key].includes("https://")
    ) {
      fetch(`${responseData[key]}`)
        .then((res) => res.json())
        .then((res) => (responseData[key] = res));
    } else if (Array.isArray(responseData[key])) {
      responseData[key] = responseData[key].map(async (el) => {
        if (el.startsWith("https://")) {
          const response = await fetch(`${el}`).then((res) => res.json());
          return response;
        } else {
          return el;
        }
      });
      await Promise.all(responseData[key]);
    }
  }
  return responseData;
}
swapiLinks("https://swapi.dev/api/people/20/").then((yodaWithLinks) =>
  console.log(JSON.stringify(yodaWithLinks, null, 4))
);
