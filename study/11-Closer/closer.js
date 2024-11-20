//closer
//closer이란 내부 함수가 선언 당시의 환경 스코프를 기억하고 그 환경 외부에서 실행이 되어도 선언 당시의 스코프에 접근이 가능한 함수를 말한다.

//예제01
console.log('===== example01 ======');

function example() {
  let count = 0;

  const increase = () => {
    console.log(++count);
  };
  return increase;
}

const increaseFunction = example(); // increase함수가 할당된다.

console.log(increaseFunction()); //  1
console.log(increaseFunction()); //  2  : 실행될 때 마다 업데이트

// increase함수가 외부에서 실행이 되었음에도 선언된 시점의 환경 스코프를 기억해 count 변수에 접근이 가능한 것이다.

// 유용한 특징 1. 상태 유지
// 예제01
console.log('=====유용한 특징 1. 상태 유지 ======');

const toggle = () => {
  let isShow = false;

  return function () {
    if (isShow) {
      console.log('on');
    } else if (isShow == false) {
      console.log('off');
    } else {
      throw new error('error');
    }

    isShow = !isShow;
  };
};

const handleToggle = toggle();

handleToggle(); //off : 초기 isShow 값 출력과 동시에 isShow ture로 전환
handleToggle(); //on : true로 변한 상태를 기억하고 on 출력. & false로 전환
handleToggle(); //off : 위의 상태를 기억함 . 반복

// 예제02
console.log('=====example 02 ======');

function makeCounter(predicate) {
  let counter = 0;

  return function () {
    counter = predicate(counter);
    return counter;
  };
}

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
const decreaser = makeCounter(decrease);

console.log(increaser()); //1
console.log(increaser()); //2

//increaser와 decreaser는 각자 독립된 렉시컬 환경을 갖기 때문에 변수를 공유하지 않는다.

console.log(decreaser()); //-1
console.log(decreaser()); // -2

// 유용한 특징3. 정보 은닉
console.log('=======특징2. 정보 은닉====');
// 생성자 함수를 통해 예시를 들어보겠다.

function Counter() {
  let counter = 0;

  //클로저
  this.increase = function () {
    return ++counter;
  };

  //클로저
  this.decrease = function () {
    return --counter;
  };
}

const counter = new Counter();

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());

console.log(counter); // counter이란 변수에 접근 불가능 (은닉)

//이렇게 작성하면 같은 랙시컬 환경을 갖게 되어 변수를 공유한다.
// 외부에서 counter이란 변수에 접근할 수 없다.
