let filterString = (str, badWords) => {
  return str
    .split(" ")
    .filter((word) => badWords.indexOf(word) < 0)
    .join(" ");
};
