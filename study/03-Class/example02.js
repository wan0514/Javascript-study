// 클래스 인스턴스를 다른 클래스의 생성자 속성으로 사용이 가능하다.

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
