//arguments

//함수로 넘어 온 모든 인수에 접근
//함수내에서 이용 가능한 지역 변수
// length, index 사용 가능
// Array 형태의 객체
// 배열의 내장 매서드 없음 (forEach, map)

function showName(name) {
  console.log(arguments.length); //2
  console.log(arguments[0]); // white
  console.log(arguments[2]); // kaith
}

showName('white', 'kaith');

// 나머지 매개변수

//만약 전달 받은 모든 수를 더해야한다면?

function add(...numbers) {
  let result = 0;
  numbers.forEach((num) => (result += num));
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8);

function add2(...numbers) {
  let result = 0;
  numbers.reduce((prev, cur) => prev + cur);
  console.log(result);
}

add2(1, 2, 3);

//나머지 매개변수는 제일 마지막에 위치해야한다.

function person(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

console.log(new person('anne', 34, 'html', 'css'));
console.log(new person('jane', 34, 'html', 'css', 'java'));

//전개 구문

let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [0, ...arr, ...arr2, 7, 8, 8];

console.log(result); // [0,1,2,3,4,5,6,7,8]

// 이전에는 push, splice, concat 등을 사용하여 배열의 구성요소를 제어했지만
// 전개구문을 사용하면 쉽게 배열을 조작할 수 있다.

// 객체도 가능하다.

let user = { name: 'mike', age: 30 };
let user2 = { ...user };

user2.name = 'tom';

console.log(user2); // { name: 'tom', age: 30 }

// arr1 을 [4,5,6,1,2,3] 으로

let arr1 = [1, 2, 3];
let arr3 = [4, 5, 6];

// arr3.reverse().forEach((num) => {
//   arr1.unshift(num); // 6,5,4,1,2,3 이 된다.
// });

// console.log(arr1);

//

arr1 = [...arr3, ...arr1];

console.log(arr1);

// 객체 합치기

let user0 = { name: 'wan' };
let info = { age: 30 };
let fe = ['js', 'react'];
let lang = ['korean', 'english'];

// myobj = Object.assign({}, user0, info, {
//   skills: [],
// });

// fe.forEach((item) => {
//   myobj.skills.push(item);
// });

// lang.forEach((item) => {
//   myobj.skills.push(item);
// });

//전개구문으로 쉽게 가능!

myobj = {
  ...user0,
  ...info,
  skills: [...fe, ...lang],
};

console.log(myobj);
