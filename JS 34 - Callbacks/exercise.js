function printAsyncName(callback, name) {
    let interval = setInterval(() => console.log("Hello"), 1000)
    setTimeout(() => clearInterval(interval), 1000);

    setTimeout(() => console.log(name), 2000);
}

printAsyncName(() => {}, "Manfredi");