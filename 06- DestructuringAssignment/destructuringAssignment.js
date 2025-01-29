// Destructuring assignment 구조 분해 할당
// 구조 분해 할당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.

// 1. built-in 객체의 경우로 실습을 해보자.
// PI의 경우 다음과 같이 Math 객체를 호출해 PI프로퍼티에 접근을 하였다.
const pi = Math.PI;
console.log(pi); // 3.141592653589793

// 하지만 구조분해 할당을 통해 다음과 같이 작성도 가능하다.
const { PI } = Math;
console.log(PI); // 3.141592653589793

// 2. 직접 구조분해 할당을 실습 해보자.

// 2-1. 배열의 경우
// 할당하려는 변수와 배열의 순서를 맞춰야한다.
let a, b;
[a, b] = [10, 20];

console.log('a: ', a); // 10
console.log('b: ', b); // 20

const myArr = [1, 'apple', 34, false];

const [myNum, myFurits, myAge, isGirl] = myArr;

console.log('myNum : ', myNum);
console.log('myFurits : ', myFurits);
console.log('myAge : ', myAge);
console.log('isGirl : ', isGirl);

//순서가 틀릴 경우 다음과 같이 의도하지 않은 결과를 만든다.
console.log('================= 순서를 생각하지 않고 할당한 경우');

const [isGirl2, myNum2, myFurits2, myAge2] = myArr;

console.log('myNum2: ', myNum2);
console.log('myFurits2 : ', myFurits2);
console.log('myAge2 : ', myAge2);
console.log('isGirl2 : ', isGirl2);

// 특정 부분만 구조분해할당하고 나머지를 한꺼번에 할당도 가능하다.
console.log(
  '========특정 부분만 구조분해할당하고 나머지를 한꺼번에 할당한 경우'
);
let c, d, rest;

[c, d, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('c: ', c);
console.log('d: ', d);
console.log('rest: ', rest);

//💡배열의 개수만큼 변수에 할당하지 않는다면 나머지는 어떻게 될까?
console.log('========배열의 개수만큼 변수에 할당하지 않는 경우');
let f, g;

[f, g] = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('f: ', f);
console.log('g: ', g);

//💡배열의 개수만큼 변수에 할당하지 않는다면 나머지는 어떻게 될까?
console.log('========분해했을 때 값이 undefined일 경우');

const [h = 5, i = 7] = [1]; // 기본값을 지정이 가능하다.
console.log('h: ', h); // 1  : 배열의 0번째 값이 존재하므로 1 할당
console.log('i: ', i); // 7  : 배열의 1번째 값이 존재하지 않으므로 기본값 7 할당

//💡특정 값을 무시하고 싶을 때는 어떻게 해야하지?
console.log('======== 배열의 특정 값을 할당하지 않고 싶은 경우');
// , , 을 사용하여 빈 값을 만들어주면 해당 인덱스에 해당하는 배열 값은 무시하고 다음 값을 할당할 수 있다.
const [j, , k] = [1, 2, 3];

console.log('j: ', j);
console.log('k: ', k);

// 2-2. 객체의 경우
console.log('================= 객체의 경우');

const myObj = { a: 10, b: 20 };

const { num1, num2 } = myObj; // undefined : 객체의 경우 프로퍼티 key 이름을 따라야한다. 객체는 순서가 없기 때문.
const { a: num3, b: num4 } = myObj; // 짓고 싶다면 이렇게 : 을 사용해 명명해줘야한다.

console.log('num1', num1); // undefined :
console.log('num2', num2); // undefined :
console.log('num3', num3); // 10
console.log('num4', num4); // 20
