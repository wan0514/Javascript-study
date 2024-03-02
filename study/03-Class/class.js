// class

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  turboOn() {
    console.log('turbo is on!');
  }
}

const myCar = new Car('red', 200);

console.log(myCar);
console.log(myCar.color);
console.log(myCar.speed);
console.log(myCar.turboOn());

class Animal {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

const myDog = new Animal('Fido', 'medium');
console.log(myDog);

myDog.name = 'wow';
console.log(myDog); // 'wow' 로 변경된다.

//상속이 가능하다.

class Animal {
  /* ...class code here... */
}
class Bird extends Animal {
  /* ...class code here... */
}
class Eagle extends Bird {
  /* ...class code here... */
}
