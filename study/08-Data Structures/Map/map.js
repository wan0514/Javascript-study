// map 매서드

// Map 객체는 키-값 쌍의 집합을 나타냅니다. 키와 값은 모두 다양한 유형의 데이터일 수 있습니다.
// 객체와 비슷하지만, Map 객체는 순서가 보장된다는 점에서 다릅니다.
// 주로 키-값 쌍을 저장하고 검색하는 데 사용됩니다.
// 주요 메서드로는 set(), get(), has(), delete(), clear() 등이 있습니다.

//  각 배열 항목을 다른 배열의 항목에 매핑하는 데 사용된다.

const myArr = [1, 2, 3, 4, 5];

const mappingArr = myArr.map(function (num) {
  return num + 10;
});

console.log(mappingArr);

// 화살표 함수로 간단하게 작성 가능하다.
console.log('======화살표 함수로 간단하게 작성가능=====');
const mappingArr2 = myArr.map((item, index) => item + 10);

console.log(mappingArr); // [11,12,13.14.15]

// 그렇다면 Map 객체는 무엇인가?

new Map();

// object와 유사할 수 있지만 차이점은 상속되지 않는다.
// 프로토타입이 없다!

const bestBoxers = new Map();
bestBoxers.set(1, 'The Champion');
bestBoxers.set(2, 'The Runner-up');
bestBoxers.set(3, 'The third place');

console.log(bestBoxers);

// 특정 값을 얻으려면get() 메서드를 사용해야 합니다.

console.log(bestBoxers.get(1));
