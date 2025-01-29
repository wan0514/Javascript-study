//null 연산자

let a = 10;
let b = null;

const result01 = a ?? 20; // a가 null이나 undefined이면  ?? 뒤의 값을 사용, 아니라면 기본값 a를 사용
const result02 = b ?? 20;

console.log(result01); // 10    기본값 사용
console.log(result02); // 20    뒤의 값 사용

// 옵셔널 체이닝

const user = {
  name: 'kath',
  address: {
    street: '123 main',
    city: 'wonderland',
  },
};

console.log(user.address?.street);
// console.log(user.contact.email); //  TypeError: Cannot read properties of undefined (reading 'email')

console.log(
  '옵셔널 체이닝을 사용하면 error가 발생하지 않고 undefined 를 반환한다'
);
console.log(user.contact?.email); //  TypeError: Cannot read properties of undefined (reading 'email')

// 혼합 사용 예시

const newUser = {
  profile: {
    name: 'alice',
    age: null,
  },
};

let age = newUser.profile?.age ?? 30; // newUser이란 곳의 profile 이 null과 undefined가 아닐때 -> age 가 null과 undefined면 30  아니라면 age 값;
let name = newUser.profile?.name ?? 'katty';

console.log(age); // 30
console.log(name); // alice

// || (or 연산자)

let f = 0;
let g = null;
let h = undefined;
let j = '';
let k = NaN;
let trueMan = 20;

console.log(f || '뒤에거 출력');
console.log(g || '뒤에거 출력');
console.log(h || '뒤에거 출력');
console.log(j || '뒤에거 출력');
console.log(k || '뒤에거 출력');
console.log(trueMan || '뒤에거 출력'); // true한 값을 반환

//

//1. ?? (null 병합 연산자)
//null이나 undefined일 경우에만 기본값을 반환.
//"falsy" 값들(0, false, "", NaN 등)에는 영향을 미치지 않음.

//2.. (옵셔널 체이닝)
//객체 속성에 접근할 때, 해당 속성이 null 또는 undefined이면 에러를 방지하고 **undefined**를 반환.

let aa = 0;
let bb = null;

console.log(aa || 42); // 42 (0은 falsy이므로 기본값 42 사용)
console.log(bb || 42); // 42 (null은 falsy이므로 기본값 42 사용)

console.log(aa ?? 42); // 0 (0은 null도 아니고 undefined도 아니므로 기본값 사용 안 함)
console.log(bb ?? 42); // 42 (null은 null 병합 연산자에 의해 기본값 42 사용)
