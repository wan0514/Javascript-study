// 1.상속
// 객체 지향 프로그래밍의 핵심으로, 어떤 객체의 프로퍼티 또는 매서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것을 말한다.
// 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거한다.
// 중복을 제거하는 방법은 기존의 코드를 재사용하는 것이다!

console.log('=============example 01=============');

// 부모 클래스
class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log('My name is ' + this.name);
  }
}

// 자식 클래스
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  bark() {
    console.log('Woof I am a ' + this.name);
  }
}

// 객체 생성
const myDog = new Dog('Butty', 'Golden Retriever');

// 부모 클래스의 메서드 호출
myDog.sayName(); // 출력: My name is Buddy

// 자식 클래스의 메서드 호출
myDog.bark(); // 출력: Woof! I am a Golden Retriever

// 2. 캡슐화
// 다른 사용자가 코드를 사용하기 위해 내 코드가 어떻게 동작하는지 알 필요가 없다는 의미! 코드 구현을 숨긴다!
// 아래의 toUpperCase가 어떻게 작동하는지는 알 수가 없다. 이 매서드가 어떻게 동작하는지 고민할 필요가 없다! 시간 낭비 x!
'abc'.toUpperCase();

// 3. 추상화
// 추상화는 코드를 보다 일반화할 수 있는 방식으로 코드를 작성하는 rjtdlek

// 4. 다형성

console.log('=============example 01=============');

const bicyle = {
  bell: function () {
    console.log('Ring ring! watch out, please!');
  },
};

const door = {
  bell: function () {
    console.log('Ring ring! Come here, please!');
  },
};

console.log(bicyle.bell());
console.log(door.bell());

//다형성을 갖게 하고 싶다면 아래의 함수를 추가해볼 수 있다.

const ringTheBell = (thing) => {
  console.log(thing.bell());
};

console.log(ringTheBell(bicyle));
console.log(ringTheBell(door));

console.log('=============example 02=============');

class Bird {
  useWings() {
    console.log('Flying');
  }
}

class Eagle extends Bird {
  useWings() {
    super.useWings(); //super에 관해서는 super.js로 이동!!!
    console.log('Barely flapping');
  }
}
// Eagle의 슈퍼 클래스는 Bird.

class Penguin extends Bird {
  useWings() {
    console.log('Diving');
  }
}

const baldEagle = new Eagle();
const kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();
