function multiplyByTwo(value) {
  let number = 2;

  function inner(){
    return value * number;
  }

  console.log(inner());
}

multiplyByTwo(6);


