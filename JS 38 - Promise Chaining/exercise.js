const isLogged = true;

//Promise1 che verifica se isLogged == true e genera un valore random
const promise1 = new Promise((resolve, reject) => {
    if(isLogged == true){
        let random = Math.random()
        resolve(random)
    } else {
        reject("Error from Promise 1")
    }
})

//Promise2 che prende `number` come parametro e verifica se number > 0.5
const promise2 = (number) => {
    return new Promise((resolve, reject) => {
        if(number > 0.5){
            resolve({name: "John", age: 24})
        } else{
            reject("Number is not greater than 0.5")
        }
    })
}

promise1
.then((random) => {
    return promise2(random); //Chain di promise2 se promise1 è risolta
})
.then((data) => {
    console.log(data); //Si esegue solo se promise1 e promise2 sono risolte
})
.catch((error) => {
    console.error(error); //Si esegue se promise1 o promise2 sono rejected
  });

