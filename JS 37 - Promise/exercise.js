const number = 15;

const myPromise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve(number)
    } else {
        reject(number)
    }
})

myPromise
.then((val) => console.log(`${number} is greater than 10`))
.catch((val) => console.log(`${number} is minor than 10`))

