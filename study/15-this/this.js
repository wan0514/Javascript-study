//js에서 this는 선언될 때 정해지는 것이 아니라 **호출될 때 정해진다.**
//기본적으로 this는 window를 가리키는데 strict mode 일 때는 undefined가 된다.

// 예제 01

const obj = {
  name: 'wan',
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName(); // wan

//obj라는 객체 내의 sayName을 호출했기 때문에 this = obj 가 된다.

const obj2 = {
  name: 'wan',
  sayName() {
    console.log(this.name);
  },
};

obj2.sayName(); // wan

// 이런식으로 function을 생략하고 작성이 가능하다. 위와 같은 결과.
console.log('객체의 내장 함수 안에서 선언된 함수를 호출했을 때');

const obj3 = {
  name: 'wan',
  sayName() {
    console.log(this.name);
    function inner() {
      console.log('특정 :', this.name);
    }
    inner();
  },
};

obj3.sayName(); // wan  , undefined

//inner가 호출되었을 때 객체를 가리키는 것도 아니고 this를 바꿔주는 행위도 하지 않았기 때문에 window를 가리키게 된다.

// 규칙01 : 객체의 함수를 새로운 변수에 담아서 호출을 했을 때에는 this는 window가 된다.

console.log('특정변수에 객체에 내장된 함수를 담아서 사용했을 때');

const sayName02 = obj2.sayName;

sayName02(); // undefinded  = window를 가리킨다. 왜냐면 저 함수를 호출했을 때 앞에 객체를 지칭하는 것이 없으니 this는 window가 된다.

// 2. bind apply call 등의 매서드를 사용하여 this를 직접 바꿔줄 수가 있다.
// 첫번째 매개 변수로 this 값을 명시적으로 지정할 수 있다.

console.log('bind apply call 등의 매서드를 사용');

sayName02.apply(obj2); // wan
sayName02.call(obj2); // wan
sayName02.bind(obj2)(); // wan  ** apply,call이 바로 함수가 호출되는 것과 달리 bind는 함수를 반환하기 때문에 호출 () 를 적어줘야한다.**

//3. 화살표 함수는 부모의 this를 따른다.
console.log('화살표 함수는 부모의 this를 따른다.');

const obj04 = {
  name: 'wan',
  sayName: () => {
    console.log(this.name);

    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

obj04.sayName(); //  화살표 함수의 부모의 this는 gloabl. 그 안의 inner함수는 호출되었을 때 this를 바꿔주지 않았으니 마찬가지로 global.
// undefined undefined

console.log('화살표 함수의 부모함수가 객체에 내장된 function일 때');

const obj05 = {
  name: 'wan',
  sayName() {
    console.log(this.name);
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

obj05.sayName(); // wan  wan

//inner는 화살표 함수이고, 화살표 함수는 부모의 this를 그대로 가져온다.
// inner의 스코프 체인은 inner -> sayName -> global 이다.
// sayName의 this는 호출되었을 때 정해지는데, obj05.sayName 으로 호출이 되었고 앞에 객체가 붙었으니 this는 obj05가 된다.
// 따라서 inner의 this는 부모인 sayName의 this인 obj05가 되므로 결과값이 wan  wan 이 찍히게 된다.

//여기서 중요한 점. 선언되었을 때 정해지는 것이 아니라 호출되었을 때 정해진다. 부모인 sayName이 호출이 되었고 그 안에서 inner도 호출이 되었기 때문에
// this가 부모를 따르는 것이지, 선언된 것만으로는 알 수가 없다.
