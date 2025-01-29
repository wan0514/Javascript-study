//다른 개발자가 만든 객체
const user = {
  name: 'mike',
  age: 30,
};

const showName = Symbol('showName');

user[showName] = function () {
  console.log(this.name);
};

user[showName]();

for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}

/*
 이렇게 user.name으로 사용하면 안되는 이유

user[showName] = function () {
  console.log(user.name);
};  

위 처럼 작성하면 당장 출력은 잘 되지만, 이 매서드를 다른 객체에서 사용할 수가 없어진다.
예를 들어 같은 매서드를 다른 객체에 복사하여 사용하려고 하면 항상 user.name을 참조하게 되어 동작이 꼬인다.
*/

const anotherUser = {
  name: 'jane',
};

anotherUser[showName] = user[showName];
anotherUser[showName](); // user.name으로 했다면 user의 name 값이 그대로 출력.

console.log(anotherUser);

//{ name: 'jane', [Symbol(showName)]: [Function (anonymous)] }
// 위처럼 함수가 anonymous로 출력되는 이유는 showName Symbol로 지정된 함수에 이름이 없기 때문
// 아래처럼 하면 이름을 붙일 수가 있다.

const showName = Symbol('showName');

function displayUserName() {
  console.log(this.name);
}

user[showName] = displayUserName;

/*

익명 함수 vs 기명 함수 선택 기준
익명 함수를 사용:

단순한 동작을 수행하는 메서드이고, 외부에서 호출할 필요가 없을 때.
간단히 코드 작성하고자 할 때.
기명 함수를 사용:

함수의 역할이 명확해야 하거나, 디버깅이 중요한 경우.
동일한 함수 로직이 여러 곳에서 재사용될 경우.


*/
