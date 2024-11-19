//symbol : 유일성 보장

const user = {
  name: 'mike',
  age: 30,
};

const id = Symbol('id');
user[id] = 'myid';

console.log(user.id); //undefined

console.log(user); // { name: 'mike', age: 30, [Symbol(id)]: 'myid' }

// 아래 매서드는 symbol은 출력하지 않는다.
console.log(Object.keys(user)); //[ 'name', 'age' ]
console.log(Object.values(user)); //[ 'mike', 30 ]
console.log(Object.entries(user)); // [ [ 'name', 'mike' ], [ 'age', 30 ] ]

for (i in user) {
  console.log(`${i} :, ${user.i}`); // symbol은 출력되지 않음.
}

//언제 symbol을 사용하는가?  -> 노출되지 않아야할 때. 숨기고 싶은 데이터가 있을 떄, 수정이 되면 안될때.

//Symbol.for() : 전역 심볼

// 하나의 심볼만 보장받을 수 있다
// 없으면 만들고, 있으면 가져오기 때문
// Symbol 함수는 매번 다른 Symbol 값을 생성하지만
// Symbol.for 매소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다.

const id1 = Symbol.for('id');
const id2 = Symbol.for('id');

console.log(id1 === id2); // true

const id3 = Symbol('ids');
const id4 = Symbol('ids');

console.log(id3 === id4); // false

//숨겨진 Symbol key 보는 법

const id222 = Symbol('id');

const userss = {
  name: 'nike',
  age: 30,
  [id222]: 'myid',
};

// 객체가 가지고 있는 symbol을 출력
console.log(Object.getOwnPropertySymbols(userss)); //[ Symbol(id) ]

// 객체가 가지고 있는 모든 key 출력
console.log(Reflect.ownKeys(userss)); //[ 'name', 'age', Symbol(id) ]
