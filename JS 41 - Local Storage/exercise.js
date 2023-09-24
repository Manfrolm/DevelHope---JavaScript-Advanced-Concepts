const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser() {
  const userJSON = JSON.stringify(user);
  localStorage.setItem("user", userJSON);
}

function printUser() {
  console.log(JSON.parse(localStorage.getItem("user")));
}

saveUser();
printUser();