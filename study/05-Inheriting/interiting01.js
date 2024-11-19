//생성자 함수의 문제

function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius;
  };
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

//Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
//getArea 매서드를 중복 생성하고 모든 인스턴스가 중복 소유된다
// getArea 매서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.

console.log(circle1.getArea());
console.log(circle2.getArea());

console.log(circle1.getArea === circle2.getArea); //False 같은 인스턴스가 아님 -> 메모리 낭비

// 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 매서드를 중복 소유하는 것은 메모리를 불필요하게 낭비한다.
// 또한 인스턴스를 생성할 때마다 메서드를 생성하므로 퍼포먼스에 악영향을 준다.

//그렇다면 어떻게? -> 상속을 통해서 중복을 제거하자!
// 자바스크립트는 프로토타입을 기반으로 상속을 구현한다.

function CircleTwo(radius) {
  this.radius = radius;
}

CircleTwo.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle3 = new CircleTwo(1);
const circle4 = new CircleTwo(2);

// console.log(circle3.getArea());
console.log(circle4.getArea());

console.log(circle3.getArea === circle4.getArea); //true
