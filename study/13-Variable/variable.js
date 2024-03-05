// variable (변수)
// 선언문
// 변수 호이스팅 (var,let,const 차이)

console.log(a); //undefined

a = 40;
var a;

console.log(a); // 40

//let의 경우

console.log(b); //ReferenceError: Cannot access 'b' before initialization

b = 40;
let b;

console.log(b); // 40

//const의 경우
// const c; 주석을 풀어서 확인하기!

console.log(c);

c = 40;
// const c;   // SyntaxError: Missing initializer in const declaration

console.log(c); // 40
