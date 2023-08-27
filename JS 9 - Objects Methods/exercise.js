const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

objKeys = Object.keys(person);

for(var key of objKeys){
  console.log(key + ": " + person[key]);
}
