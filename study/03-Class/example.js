// class 생성
class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLigths() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log('Lights on? ', this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    const proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

const train4 = new Train('red', false);

train4.toggleLigths(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// 하위 class 생성
class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }

  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log('High speed status:', this.highSpeedOn);
  }
  //특정 매서드를 다르게 구현하고 싶다면 아래처럼도 가능하다.
  toggleLights() {
    super.toggleLigths();
    super.lightsStatus();
    console.log('Lights are 100% operational.');
  }
}

const highSpeed1 = new HighSpeedTrain('wan', false, 'blue', false);

console.log('highSpeed1 ==================');
highSpeed1.toggleLights(); // undefined
highSpeed1.lightsStatus(); // Lights on? true

train4.getPrototype();
highSpeed1.getPrototype();
