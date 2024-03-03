// for 을 이용하여 배열의 요소를 반복시킬 수 있다.
const alphabet = ['a', 'b', 'c', 'd'];

for (let letter of alphabet) {
  console.log(letter);
}

//주로 사용하는 방식은 아래와 같다.
console.log('==============일반적으로 for loop를 사용하는 방식');
function getLetter() {
  for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
  }
}
getLetter();

// iterable인 객체들은 전부 for loop로 사용이 가능하다.
// stirng도 가능.
console.log('==============string도 for loop 시킬 수 있다.');
const apple = 'apple';
for (let letter of apple) {
  console.log(letter);
}

//그렇다면 객체는?
// 객체는 iterable 객체가 아니기 때문이 사용이 불가능하다.

const myObj = {
  name: 'bob',
  age: 30,
};

for (let pros of myObj) {
  console.log(pros); // TypeError: myObj is not iterable
}

// 그렇다면 객체의 요소를 for loop 구문에 사용할 방법이 없는가?
// 가능하다! >> forLoops-obj.js로 이동
