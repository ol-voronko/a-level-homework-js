function temperature(degrees) {
  return degrees * 1.8 + 32;
}

function color(r, g, b) {
  return (
    "#" +
    r.toString(16).padStart(2, 0) +
    g.toString(16).padStart(2, 0) +
    b.toString(16).padStart(2, 0)
  );
}

function flatPosition(floorNumber, flats, flatCount) {
  entrance = flatCount / (floorNumber * flats);
  floor = 1 + ((flatCount - 1) % (floorNumber * flats)) / flats;

  return { entrance: Math.ceil(entrance), floor: Math.floor(floor) };
}

function createNewLine(str) {
  return str.split("\n").join("\n");
}

function loginandPassword(rightLogin, rightPassword) {
  let login = prompt("Enter login :");
  let password = prompt("Enter password :");
  return login === rightLogin && password === rightPassword;
}
