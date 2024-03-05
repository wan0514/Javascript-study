//Reference type (참조 타입)
//참조 타입은 아래와 같다.

const referenceType = ['object', 'array', 'function'];

//참조 타입은 메모리에 저장된 값을 가리키는 것이 아니라, 메모리에 저장된 값의 주소를 가리킨다.
// 참조타입  -> call stack( 주소 ) ->  Heap (메모리 값)

//example

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
