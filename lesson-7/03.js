let flatPosition = (floorNumber, flats, flatCount) => {
  entrance = flatCount / (floorNumber * flats);
  floor = 1 + ((flatCount - 1) % (floorNumber * flats)) / flats;

  return { entrance: Math.ceil(entrance), floor: Math.floor(floor) };
};
console.log(flatPosition(5, 3, 45));
