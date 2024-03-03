// 예제 2 : 클래스 인스턴스를 다른 클래스의 생성자 속성으로 사용이 가능하다.

class StationaryBike {
  constructor(position, gears) {
    this.position = position;
    this.gears = gears;
  }
}

class Treadmill {
  constructor(position, modes) {
    this.position = position;
    this.modes = modes;
  }
}

class Gym {
  constructor(openHrs, stationaryBikePos, treadmillPos) {
    this.openHrs = openHrs;
    this.stationaryBikePos = new StationaryBike(stationaryBikePos, 8);
    this.treadmillPos = new Treadmill(treadmillPos, 5);
  }
}

const boxingGym = new Gym('7-22', 'right corner', 'left corner');

console.log(boxingGym.openHrs);
console.log(boxingGym.stationaryBikePos);
console.log(boxingGym.treadmillPos);

//예제 3 : 복합적인 class 상속 관계

class Animal {
  constructor(color = 'yellow', energy = 100) {
    this.color = color;
    this.energy = energy;
  }

  isActive() {
    if (this.energy > 0) {
      this.energy -= 10;
      console.log('currently energy: ', this.energy);
    } else if (this.energy == 0) {
      this.sleep();
    }
  }
  sleep() {
    this.energy += 10;
    console.log('energy is increasing, currently at :', this.energy);
  }

  getColor() {
    console.log('Color is: ', this.color);
  }
}

class Cat extends Animal {
  constructor(
    sound = 'purr',
    canJumpHigh = true,
    canClimbTrees = true,
    color,
    energy
  ) {
    super(color, energy);
    this.sound = sound;
    this.canJumpHigh = canJumpHigh;
    this.canClimbTrees = canClimbTrees;
  }

  makeSound() {
    console.log(this.sound);
  }
}

class Bird extends Animal {
  constructor(sound = 'chirp', canFly = true, color, energy) {
    super(color, energy);
    this.sound = sound;
    this.canFly = canFly;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class HouseCat extends Cat {
  constructor(
    houseCatSound = 'meow',
    sound,
    canFly,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canFly, canClimbTrees, color, energy);
    this.houseCatSound = houseCatSound;
  }

  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.houseCatSound);
  }
}

class Tigher extends Cat {
  constructor(
    tigerSound = 'Roar',
    sound,
    canJumpHigh,
    canClimbTrees,
    color,
    energy
  ) {
    super(sound, canJumpHigh, canClimbTrees, color, energy);
    this.tigerSound = tigerSound;
  }

  // 나머지는 houseCat 유사하게 넣으려면 어떻게 해야하나?
  makeSound(option) {
    if (option) {
      super.makeSound();
    }
    console.log(this.tigerSound);
  }
}

class Parrot extends Bird {
  constructor(canTalk = false, sound, canFly, color, energy) {
    super(sound, canFly, color, energy);
    this.canTalk = canTalk;
  }
  makeSound(option) {
    if (option) {
      // console.log(this.sound);  >> 이 방법도 가능!
      super.makeSound();
      //console.log(this.makeSound());  // makeSound()의 반환값이 없으므로 undefinde 출력
    }
    if (this.canTalk) {
      console.log("I'm a talking parrot!");
    }

    if (!option && !this.canTalk) {
      console.log("I can't make sound");
    }
  }
}

const myParrot = new Parrot();
const mySmartParrot = new Parrot(true);

console.log('myParrot result===============');
console.log(myParrot.canTalk); //false
console.log(myParrot.canFly); // true  (bird 상속)
console.log(myParrot.sound); // chipr (bird 상속)
console.log(myParrot.color); //yellow (animal 상속)
console.log(myParrot.energy); //100    (animal 상속)
myParrot.makeSound(true); // chirp + undefined
myParrot.makeSound(false); // undefined   makeSound()의 반환값이 아무것도 없다!

console.log('mySmartParrot=======');
mySmartParrot.makeSound(true); // chirp + i'm a talking parrot
mySmartParrot.makeSound(); // i'm a talking parrot.
