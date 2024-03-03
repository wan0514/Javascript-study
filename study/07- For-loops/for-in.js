// for in
// 객체에 사용
const car = {
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
};

for (const i in car) {
  console.log(`${i}: ${car[i]}`);
}

//배열에 사용
// 배열은 key가 없으므로 index에 접근한다.
console.log('===============배열에 for in 사용할 경우');
const fruits = ['apple', 'banana', 'orange'];

for (const i in fruits) {
  console.log(`${i}: ${fruits[i]}`);
}

// 하지만 for in은 주의해서 사용해야한다.

// 1. [성능 문제 유발]
// 프로토타입 체인 순회: for...in 반복문은 객체 자체의 속성 뿐만 아니라 상속된 속성도 반복합니다
// 따라서 다른 반복문 보다 느리고 의도치 않은 속성을 반복할 수도 있다.

const parentCar = {
  engine: true,
  steering: true,
  speed: 'slow',
};

const childCar = Object.create(parentCar); // parentCar로부터  상속
childCar.speed = 'fast';

console.log(' =======for in=====');
for (prop in childCar) {
  console.log(prop); // 상속 받은 값도 출력
}

console.log(' =======for of=====');
for (prop of Object.keys(childCar)) {
  console.log(prop); // childCar 요소만 출력
}

// 2. [반환 문제]
//Array에 for..in loop를 활용하면 index에 할당되는 값들은 "0", "1", "2"과 같이 Number가 아닌 String으로 반환하기 때문에숫자연산을 해야 할 경우 parseInt() 등의 메소드로 일일이 정수로 변환해 주는 작업을 해야 한다.
const myArray2 = [10, 20, 30];
for (const i in myArray2) {
  console.log(parseInt(i) + 50); // parseInt를 통해 숫자로 변환해야하는 번거러움이 있다.
}

const myArray3 = [10, 20, 30];
for (const i in myArray2) {
  console.log(i + 50); // 050, 150, 250   "0" + 50 = 050 와 같은 형태가 된다.
}

// 3. [순서 문제]
// for in으로 반복한 객체의 속성 순서는 보장되지 않는다.
// 자바스크립트 엔진에 따라 순서 보장 여부가 다르다고 한다.
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

console.log('Using for...in loop:');
for (let key in obj) {
  console.log(key);
}
