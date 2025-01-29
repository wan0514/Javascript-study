//Object.create : 직접 상속
// 이 매서드는 명시적으로 프로토타입을 지정하여 새로운 객체를 생성한다.
// 사용방법 : Object.create(상속받을 부모 object)

const bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

const eagle1 = Object.create(bird); //bird가 eagle1의 프로토타입이 된다.
console.log('eagle', eagle1); // eagle{}  // bird의 프로퍼티만 상속 받은 상태.
// 상속 받았기 때문에 프로토타입인 부모객체로부터 프로퍼티를 상속 받아서 출력이 된다.

console.log(eagle1.hasWings); //true
console.log(eagle1.canFly); //true
console.log(eagle1.hasFeathers); //true

const penguin = Object.create(bird);
penguin.canFly = false;

console.log(penguin.hasWings); //true    부모로부터 상속
console.log(penguin.canFly); //false   재정의했기 때문에 변경됨!
console.log(penguin.hasFeathers); //true  부모로부터 상속

//부모로부터 상속받은 canFly 값이 나오지 않는 이유는?
// 자바스크립트 오브젝트 자료형에서 특정 자료를 꺼낼 때 묻는 순서가 있다. (자바스크립트 알고리즘)

// 예를 들어 penguin의 canFly를 꺼내주세요 -> Js는 아래와 같은 순서로 질문한다.
// 1. 자식에 canFly 속성이 있는가? 있으면 출력 없다면 2
// 2. 자식의 부모 prototype에 canFly 속성이 있는가? 있으면 출력 없다면 3
// 3. 부모의 부모 prototype에 canFly 속성이 있는가? 있으면 출력 없다면 다음
// ...

// 의 순서로 출력하기 때문에 자식이 canFly 속성을 가지게 되었기 때문에 false가 출력이 된다.
