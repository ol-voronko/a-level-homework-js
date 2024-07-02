async function speedtest(getPromise, count, parallel = 1) {
  let t = performance.now();
  for (let i = 1; i <= count; i++) {
    const promises = [];

    for (let j = 1; j <= parallel; j++) {
      let promise = getPromise();
      promises.push(promise);
    }
    await Promise.all(promises);
  }
  let duration = Math.floor(performance.now() - t);
  let querySpeed = (count / duration).toFixed(3);
  let queryDuration = Math.floor(duration / count);
  let parallelSpeed = ((count * parallel) / duration).toFixed(3);
  let parallelDuration = Math.floor(duration / (count * parallel));

  return {
    duration,
    querySpeed,
    queryDuration,
    parallelSpeed,
    parallelDuration,
  };
}
const delay = (ms) => new Promise((ok) => setTimeout(() => ok(ms), ms));
speedtest(() => delay(1000), 10, 10).then((result) => console.log(result));
speedtest(
  () => fetch("http://swapi.dev/api/people/1").then((res) => res.json()),
  5,
  5
).then((result) => console.log(result));
