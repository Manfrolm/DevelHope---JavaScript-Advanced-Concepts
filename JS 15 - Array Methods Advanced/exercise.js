function sortPeopleByAge(arr) {

  arr.sort(function (a, b) {

    if (a.age < b.age) {
        return -1;      // Se il risultato viene negativo A viene prima di B
    }
    if (a.age > b.age) {
        return 1;       // Se il risultato viene positivo A viene dopo di B
    }
    return 0;           // Se il risultato viene 0, A e B sono considerati uguali
});


console.log(arr);

}

const people = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

sortPeopleByAge(people);

