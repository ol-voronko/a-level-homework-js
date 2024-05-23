let color = prompt("Введіть колір", "");
if (color === "red") {
  document.write("<div style='background-color: red;'>червоний</div>");
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "black") {
  document.write(
    "<div style='background-color: black; color: white;'>чорний</div>"
  );
} else if (color === "blue") {
  document.write("<div style='background-color: blue;'>синій</div>");
  document.write("<div style='background-color: green;'>зелений</div>");
} else if (color === "green") {
  document.write("<div style='background-color: green;'>зелений</div>");
} else {
  document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
}
