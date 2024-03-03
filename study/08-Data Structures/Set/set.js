// set : 고유한 값의 집합
// Set 객체는 중복을 허용하지 않는 값들의 집합을 나타냅니다. 즉, 모든 요소는 유일해야 합니다.
// 주로 중복을 '제거'하거나 배열과 같은 컬렉션에서 '고유한 값들만을 추출'할 때 사용됩니다.
// Set 객체는 순서를 보장합니다. 즉, 값들이 추가된 순서대로 저장되지만, 정렬은 되지 않습니다.
// 주요 메서드로는 add(), delete(), has(), clear() 등이 있습니다.

new Set();

const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(uniqueNumbers); // Set { 1, 2, 3, 4, 5 }

// set은 특정 배열을 받을 수가 있다.
// 중복되는 값은 제거한다.
const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);

console.log(uniqueFruits); // Set(3) { 'apple', 'pear', 'plum' }
