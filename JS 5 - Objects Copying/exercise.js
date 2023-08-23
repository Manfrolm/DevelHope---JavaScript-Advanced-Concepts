const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

person2.firstName = "Simon";

console.log(person1);
console.log(person2);



/* 

In questo esercizio alla riga 7 stiamo passando un valore per riferimento, ovvero, 
utilizzando person2 andiamo ad usare lo stesso riferiento in memoria di person1 e quindi 
andremo a sostiutire i dati dell'Oggetto originale (person1)


Per copiare un Oggetto per valore il codice è il seguente:

let person2 = {};     // Creazione Oggetto person2

for (const key in person1) {
  person2[key] = person1[key];   
}

person2.firstName = "Simon";

console.log(person1);
console.log(person2);

In questo caso copiamo l'Oggetto person2 by value e non reference e nel console.log() vedremo la modifica solo su person2

*/

