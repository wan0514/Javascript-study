console.log('========1.first class function=========');
// 1.first class function

function greeting() {
  console.log('hello world');
}

greeting(); // hello world

// 함수도 객체처럼 프로퍼티를 추가할 수 있다. (함수 오브잭트에 프로퍼티를 추가하는 것은 권장하지x. object 사용 권장)
greeting.lang = 'English';

console.log(greeting); // English
