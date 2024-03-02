// super
// super은 부모 클래스에 대한 참조를 나타낸다.

// 사용목적 1. 부모 클래스의 생성자 호출  super()
// 사용목적 2. 부모 클래스의 매서드 호출  super.function()

//부모 클래스
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

// 자식 클래스

class Dog extends Animal {
  constructor(name, breed) {
    super(name); //부모 클래스의 생성자 호출
    this.breed = breed;
  }

  speak() {
    super.speak(); // 부모 클래스의 매서드 호출
    console.log(this.name + ' barks.');
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myDog.name); // Buddy
myDog.speak(); // Buddy makes a noise. Buddy barks.
