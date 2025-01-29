// ' "

// 특정 단어가 잇는 문장 여부 판별하기

const desc = 'hi my name is wan';

console.log(desc.indexOf('hi')); // 0 번째 자리에 존재
console.log(desc.indexOf('my')); //  3 번째 자리에 존재

console.log(desc.includes('is')); // includes : 있으면 true, 없으면 false

// slice(n,m)
// m은 없으면 문자열 끝까지
// 양수면 그 숫자까지(포함되지 않음)
// 음수면 끝에서부터 셈
// 공백도 하나의 index로 생각한다.

console.log(desc.slice(0, 2)); // hi  0번째부터  2개
console.log(desc.slice(3, 5)); // my  4번째부터 8번째까지지만 8번째는 포함하지 않음.

//substring(n,m) n과 m 사이
// n과 m 바꿔도 동작
// n 포함  m 포함하지 않음

console.log(desc.substring(3, 6)); // my

//substr(n,m)  n부터 시작  m개를 가져옴

//str.trim() : 앞 뒤 공백 제거

//문자열 비교도 가능하다

1 < 3; // true

'a' < 'c'; // true

//아스키코드표를 보면 10진법으로 문자도 숫자로 표현이 가능하다.
// 아스키코드표를 외울 필요는 없지만 대문자 < 소문자 , a < z  정도만 기억하자!
// 구하는 방법

'a'.codePointAt(0); // 97    문자 -> 10진법
String.fromCodePoint(97); // 'a'   10진법 -> 문자

//example.01

const arr2 = ['01: 감자', '02: 고구마', '03: 파', '04: 양파', '05: 두부'];

// 제목 제외 타이틀만 얻고 싶을 때

let newarr = [];

for (i = 0; i < arr2.length; i++) {
  newarr.push(arr2[i].slice(4));
}

console.log(newarr);

//example.02

// 금칙어 : 콜라
// indexOf 활용

function hasCoke(str) {
  if (str.indexOf('콜라') > -1) {
    console.log('금칙어가 있어요');
  } else {
    console.log('통과');
  }
}

hasCoke('와 사이다가 짱이야'); //통과
hasCoke('와 콜라가 짱이야'); //금칙어

//다른 방법 : includes
// 문자가 있으면 true
// 없으면 false

function hasCoke2(str) {
  if (str.includes('콜라')) {
    console.log('금칙어가 있어요');
  } else {
    console.log('통과');
  }
}

hasCoke2('와 사이다가 짱이야'); //통과
hasCoke2('와 콜라가 짱이야'); //금칙어
