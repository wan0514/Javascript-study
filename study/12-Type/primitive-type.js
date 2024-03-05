//Primitive type (원시타입)
// 원시타입은 불변성을 갖는다.
// 불변성이란 메모리의 영역의 값을 변경할 수 없는 속성을 말한다.
// 원시타입의 종류는 다음과 같다.

const primitiveType = ['number', 'bigint', 'boolean', 'undefined', 'symbol'];

//example

let a = 100;
let b = a;

console.log(a === b); // true

a = 50;

//위와 같이 작성하면 a,b 값 모두 50으로 변할 것 같지만 아니다.
console.log('a: ', a); //a:  50
console.log('b: ', b); //b:  100

// 아래의 과정을 거쳤기 떄문이다.
// a에 100을 할당할 시  a: 100 이란 메모리가 생성된다.
// b에 a를 할당할 시 b: 100 이란 메모리가 생성된다.
// a에 50을 재 할당 시 a:100 메모리는 여전히 존재하며, a: 50이라는 메모리가 새로 생성이되며, 새로 생긴 메모리를 가리키게 된다.
// b는 여전히 b: 100이란 메모리를 가리키고 있으므로 100이란 값을 갖게 된다.

console.log('a 변경된 후', a === b); // 그래서 이 결과는 false다
