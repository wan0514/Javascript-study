// super
// super은 부모 클래스에 대한 참조를 나타낸다.

// 사용목적 1. 부모 클래스의 생성자 호출  super()
// 사용목적 2. 부모 클래스의 매서드 호출  super.function()

//부모 클래스
class Animal {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

// 자식 클래스

class Dog extends Animal {
  constructor(name, legs, breed) {
    // super(name, legs); //부모 클래스의 생성자 호출
    super(name, 4); // 💡: 이렇게 전달도 가능하지만 Dog의 legs는 무조건 4로 고정된다. 자식 인스턴스에서 legs를 새로 전달받아도 초기화되는 것은 4로 고정이기 때문!
    this.breed = breed;
  }

  speak() {
    super.speak(); // 부모 클래스의 매서드 호출
    console.log(this.name + ' barks.');
  }
}

const myDog = new Dog('Buddy', 3, 'Golden Retriever');

console.log(myDog.name); // Buddy
console.log(myDog.legs); // 💡 3을 전달하였으나 4로 고정된다.
myDog.speak(); // Buddy makes a noise. Buddy barks.
