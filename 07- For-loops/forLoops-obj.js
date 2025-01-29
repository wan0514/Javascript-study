// 객체의 프로퍼티를 for loop 구문에 사용하는 방법은 매서드를 사용하는 것이다.
// 아래의 매서드는 객체의 프로퍼티를 배열로 만들어준다.
// Object.keys(), Object.values(), Object.entries();

// 1. Object.keys()
// 객체의 key를 배열로 반환한다.
const car2 = {
  speed: 200,
  color: 'red',
};
console.log(Object.keys(car2)); // ['speed','color']

// 2. Object.values()
// 객체의 value를 배열로 반환한다.
const car3 = {
  speed: 300,
  color: 'yellow',
};
console.log(Object.values(car3)); // [300, 'yellow']

// 3.  Object.entries()
// 객체의 key와 value 모두 나열하는 배열을 반환한다.
const car4 = {
  speed: 400,
  color: 'magenta',
};
console.log(Object.entries(car4)); // [ [ 'speed', 400 ], [ 'color', 'magenta' ] ]

// 위의 매서드를 활용해 객체를 배열로 만들고 for loop 구문에 사용할 수 있다.

// 예제 1. 키 :value  형태로 반복하고 싶을 때.

const clothingItem = {
  price: 50,
  color: 'purple',
  material: 'cotton',
  season: 'autumn',
};

for (const key of Object.keys(clothingItem)) {
  console.log(key, ':', clothingItem[key]);
}
// price : 50
// color : purple
// material : cotton
// season : autumn

// ✨ 위의 매서드를 사용하지 않고 for in 구문을 활요해 객체의 키에 접근할 수도 있다.
// >> for in.js
