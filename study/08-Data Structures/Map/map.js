//Map 객체

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
