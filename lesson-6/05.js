// Destruct string
let arr = [1, "abc"];
const [number, [s1, s2, s3]] = arr;

// Destruct2
let obj = {
  name: "Ivan",
  surname: "Petrov",
  children: [{ name: "Maria" }, { name: "Nikolay" }],
};
const {
  children: [{ name: name1 }, { name: name2 }],
} = obj;
