// 1.first class function

function greeting() {
  console.log('hello world');
}

greeting(); // hello world

// 함수도 객체처럼 프로퍼티를 추가할 수 있다. (함수 오브잭트에 프로퍼티를 추가하는 것은 권장하지x. object 사용 권장)
greeting.lang = 'English';

console.log(greeting); // English

//2. higer-order-function

//example in javascript

//1. Array.prototype.map
const arr = [1, 2, 3];
const arr2 = arr.map((item) => item + 2);

console.log(arr2); //  [ 3,4,5]

//2. Array.prototype.filter

const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24 },
];
const fullAge = persons.filter((person) => person.age >= 18);

console.log(fullAge);
/* 
[
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Tony', age: 24 }
]
*/

//3. Array.prototype.reduce
// 배열의 함 구하기
const numArr = [5, 6, 1, 3, 4];

//초기값이 주어지지 않았을 때는 accumlator는 배열의 첫번째와 같다.
const sum = numArr.reduce(function (accumlator, currentValue) {
  return accumlator + currentValue;
});

//초기값이 주어졌을 때, accumlator은 10으로 지정이된 채 배열을 순회한다.
const sum2 = numArr.reduce(function (accumlator, currentValue) {
  return accumlator + currentValue;
}, 10);

console.log(sum); //19
console.log(sum2); //29

// 고차 함수 만들어보기.  string 배열을 정수의 배열로 바꾸기. 단 정수는 글자의 수!!
