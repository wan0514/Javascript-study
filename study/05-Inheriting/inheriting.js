const bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

const eagle1 = Object.create(bird);
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
