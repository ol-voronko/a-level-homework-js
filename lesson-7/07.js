let loginandPassword = (rightLogin, rightPassword) => {
  let login = prompt("Enter login :");
  let password = prompt("Enter password :");
  return login === rightLogin && password === rightPassword;
};
