class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    if (figure instanceof Square) {
      return figure.side * figure.side;                 //Area Quadrato (Lato * Lato)
    } else if (figure instanceof Rectangle) { 
      return figure.width * figure.height;              //Area Rettangolo (Base * Altezza)
    } else if (figure instanceof Circle) {
      return Math.PI * figure.radius * figure.radius;   //Area triangolo (Pi greco * raggio al quadrato)
    } else {
      console.log("Error!");
    }
  }
}


//Creazione delle istanze
const square = new Square(5);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

//Print Calcolo Area
console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(Math.round(AreaCalculator.calculate(circle)));    //Math.round() per stampare il numero arrotondato all'intero più vicino