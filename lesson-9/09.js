let n, m;
for (let i = 0; i < n; i++) {
  let str = "";
  if (i % 2) {
    for (j = 0; j < m; j++) {
      if (j % 2) {
        str += "#";
      } else {
        str += ".";
      }
    }
  } else {
    for (j = 0; j < m; j++) {
      if (j % 2) {
        str += ".";
      } else {
        str += "#";
      }
    }
  }
  console.log(str);
}
