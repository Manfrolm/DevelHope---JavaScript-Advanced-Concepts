function repeatHello(callback){
    let interval = setInterval(callback, 1000);
}


const helloCallback = () => {
    return console.log("Hello");
} 


repeatHello(helloCallback);


// Non ho utilizzato il clearInterval() perchè l'esercizio successivo richiedeva di aggiungerlo