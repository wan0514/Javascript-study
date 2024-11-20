// toString()
// 10진수 -> 2진수/16진수

let num = 10;

num.toString(); //"10"  숫자를 문자로
num.toString(2); // "1010"  2진수로 바꾸기  괄호 안의 숫자 진법으로 사용

let num2 = 255;

num2.toString(16); //ff  : 16진수

//Math.ceil  올림

let num1 = 5.1;
let num3 = 5.7;

Math.ceil(num1); // 6
Math.ceil(num3); // 6

console.log(Math.ceil(num1));
console.log(Math.ceil(num3));
//

//Math.floor  내림
//Math.round  반올림

//exapmple : 소수점 둘째자리까지 표현 (셋쨰 자리에서 반올림)

let userRate = 30.1234;

Math.round((userRate * 100) / 100); // 30.12

// toFixed()  괄호 안의 자리수까지 표현.

userRate.toFixed(2); // "30.12"

userRate.toFixed(0); // "30 "     :  소수점 0 -> 정수만 남음
userRate.toFixed(6); // "30.123400"  :  남은 자리수를 0으로 채워줌

// 주의 : 결과값이 string 이다. 주로 Number()를 사용하여 숫자로 바꿔 사용함.
console.log(Number(userRate.toFixed(2))); //30.12

// isNaN() : NaN인지 아닌지 판별하는 유일한 매서드 ==, === 으로는 판별 불가능

let x = Number('x');

console.log(x == NaN, x === NaN, NaN == NaN, isNaN(x), isNaN(3));
//   false, false, false , true, false

//parseInt() : string -> number
// Number()와 차이점은 '16px' 에서 16만 따로 추출이 가능하다는 것.

let margin = '10px';

console.log(parseInt(margin)); // 10
console.log(Number(margin)); // NaN

console.log(parseInt('f3')); // 하지만 문자가 먼저 오는 string은 NaN 출력

console.log(parseInt('11', 2)); // 3  왼쪽 인자를 오른쪽 인자의 진수법으로 바꿀 수 있다.

//parseFloat() : 부동소수점을 반환한다.

let padding = '18.5%';

console.log(parseInt(padding)); // 18   : 소수점 무시
console.log(parseFloat(padding)); // 18.5    " 부동소수점까지 반환"

//Math.random : 0~ 1 사이의 랜덤 숫자

// 1~100 사이의 임의의 숫자를 뽑고 싶다면?

const res = Math.floor(Math.random() * 100) + 1;

console.log(res);

//Math.max() : 최대값 구하기 ,  Math.min() : 최소값 구하기

const arr = [20, 30, 1, 5, 2, 0];

console.log(Math.max(...arr)); // 30
console.log(Math.min(...arr)); // 0
console.log(Math.max(3, 0, 10)); // 10
