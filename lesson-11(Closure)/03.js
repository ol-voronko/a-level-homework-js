function myBind(fn, context, defaultParams) {
  function wrapper(...params) {
    const args = [];
    for (let i = 0; i < defaultParams.length; i++) {
      if (defaultParams[i] === undefined) {
        args.push(params.shift());
      } else {
        args.push(defaultParams[i]);
      }
    }
    return fn.apply(context, args);
  }
  return wrapper;
}
let pow5 = myBind(Math.pow, Math, [, 5]);
console.log(pow5(2));
let chessMin = myBind(Math.min, Math, [, 4, , 5, , 8, , 9]);
console.log(chessMin(-1, -5, 3, 15));
const bindedJoiner = myBind((...params) => params.join(""), null, [
  ,
  "b",
  ,
  ,
  "e",
  "f",
]); //('a','c','d') === 'abcdef'
console.log(bindedJoiner("a", "c", "d") === "abcdef");
console.log(bindedJoiner("1", "2", "3") === "1b23ef");
