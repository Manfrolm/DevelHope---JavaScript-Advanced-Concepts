function printAsyncName(callback, name) {
  let interval = setInterval(() => {
    callback();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, 1000);

  setTimeout(() => {
    console.log(name);
  }, 2000);
}

printAsyncName(() => {
  console.log("Hello");
}, "Manfredi");
