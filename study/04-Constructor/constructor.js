// Constructors (생성자 함수)

// buil in 내장 객체 종류 (native objects 라고도 부른다.)
// Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, 등등.

// 생성자 함수는 이러한 기본 제공 네이티브 객체의 인스턴스를 만들 수 있는 특수 함수이다.
// 대표적인 예로 Date 객체가 있다. 현재 날짜와 시간이 반환된다.
new Date();
console.log(new Date()); // 2024-03-02T12:53:24.404Z (작성하고 있는 현재 시점)

// 생성자 함수를 사용하는 객체 예시
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();

// 모든 기본 제공 네이티브 객체에 생성자 함수가 있는 것은 아니다.
// 대표적으로 Math의 경우 생성자 함수를 사용하면 에러가 발생한다.
/*
new Math(); // TypeError: Math is not a constructor
*/

// Math는 객체 안의 프로퍼티와 매서드에 직접 접근할 수 있는 정적 객체이다.

Math.pow(2, 5);
console.log(Math.pow(2, 5)); //32

// 사용자가 직접 생성자 함수를 정의할 수도 있다.

function IceCream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The $(this.name) icecream has melted`);
  };
}

const kiwiIceCream = new IceCream('kiwi');
const appleIceCream = new IceCream('apple');

console.log(kiwiIceCream);
console.log(appleIceCream);

// 생성자 함수는 화살표 함수로 만들 수 없다.
// 화살표 함수는 일반 함수와 다르게 this를 바인딩 하지 않고 외부 스코프 this를 그대로 사용한다.
// 이는 생성자 함수의 핵심적인 기능과 상반되므로 사용이 불가하다!

// 모든 기본 제공 객체에 생성자 함수를 사용하는 것이 최선의 방법은 아니다!

// example stirng

const apple = new String('apple');
console.log(apple); // Stirng: apple   String 유혛의 객체

const pear = 'pear';
console.log(pear); // pear   // 문자열 리터럴 즉 원시값

// 원시값은 항상 객체보다 성능이 좋다
// 각 객체는 고유하기 때문에 값이 동일하더라도 비교할 수가 없다.

const otherApple = 'apple';

console.log(apple === otherApple); // false

const anotherApple = 'apple';

console.log(otherApple === anotherApple); // ture

// 객체를 비교할 때 false 이 반환되는 이유
// 생성자에게 전달하는 값이 아니라 객체가 저장된 메모리 위치가 비교 대상이기 때문이다.

// object 또한 new 말고 {} 를 사용해야한다.

const obj = new Object(); // (△) 권장하지 않는다.

const obj2 = {}; // (o) 권장된다. 더 간편하고 직관적이다.
