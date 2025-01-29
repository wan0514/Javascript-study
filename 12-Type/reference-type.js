//Reference type (참조 타입)
//참조 타입은 아래와 같다.

const referenceType = ['object', 'array', 'function'];

//참조 타입은 메모리에 저장된 값을 가리키는 것이 아니라, 메모리에 저장된 값의 주소를 가리킨다.
// 참조타입  -> call stack( heap을 가리키는 주소 ) ->  Heap (메모리 값)

//example 1 ( array )

// myArr를 선언하고 배열을 할당했다.
// newArr에 myArr를 할당함으로서 메모리 값을 가리키는 주소가 같아진다.
// 주소가 같기 때문에 myArr를 통해 배열을 수정하면 해당 주소에 해당하는 값이 바뀌기 때문에
// 같은 주소를 참조하고 있는 newArr도 수정된다.

let myArr = [1, 2, 3, 4];
let newArr = myArr;

newArr.push(5);

console.log('myArr: ', myArr);
console.log('newArr', newArr);

//원시타입이라면 myArr = [1,2,3,4]  ,  newArr = [1,2,3,4,5] 로 출력이 되어야하지만 참조타입은 그렇지 않다.
// 둘 다 [1,2,3,4,5] 로 변경되어 있다.
// 참조타입은 불변성을 갖고 있지 않다.
// 따라서 기존 데이터를 변경해버릴 수 있는 위험이 있기 때문에 함부로 값을 변경하면 안된다.
// 의도치 않은 사이드 이팩트를 발생시킬 수 있기 떄문이다. (ex: 같은 변수를 사용하는 다른 곳에서도 값이 변경 된다던가)

// example 2 (object)

const myObj = { name: 'bob', age: 50 };

const newObj = myObj;

console.log('myObj === newObj: ', newObj === myObj); //true

myObj.name = 'milly';

console.log('newObj: ', newObj); // { name: 'new object', age: 50 }

// 그렇다면 어떻게 해야하는가?
// 참조를 끊어주면 된다.
// 참조를 끊기 위해서는 spread,map,filter,slice,reduce 와 같은 매서드를 사용해주면 된다.

const myObj2 = { name: 'bob', age: 50 };

const newObj2 = { ...myObj };

console.log('myObj2 === newObj2: ', myObj2 === newObj2); // false :참조하는 객체가 다르다.

newObj2.name = 'wario';

console.log('newObj2: ', newObj2); // spread 문법을 사용해서 새로운 객체로 만들었기 때문에 같은 객체를 가리키고 있지 않다. 참조가 끊겼다. 원본 배열이 수정되지 않는다.
console.log('myObj: ', myObj); // 기존 값은 그대로 유지한다.

// example3 . 함수

const myFunction = () => {
  return 0;
};

const newFunction = myFunction;

console.log(`newFunction === myFunction : ${newFunction === myFunction}`); //true

myFunction.concoler = () => {
  console.log('im myFunction');
};

console.log(myFunction.concoler()); // im myFunction (console만 있으므로 undefined 도 반환)
console.log(newFunction.concoler()); // 위와 동일 : 같은 콜스텍 주소를 참조하고 있기 때문.
