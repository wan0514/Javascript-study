// 1. functional programming
const shoes = 100;
const stateTax = 1.2;

function totalPrice(shoes, tax) {
  return shoes * tax;
}

const toPay = totalPrice(shoes, stateTax);
console.log(toPay); //120

// 2. object oriented programming

const purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    const calculation = purchase1.shoes * purchase1.stateTax;
    console.log('Total Price :', calculation);
  },
};

purchase1.totalPrice();

//2-1. 위의 함수를 this를 사용해 객체 자신을 가리킬 수 있다.
const purchase1UseThis = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    const calculation = this.shoes * this.stateTax;
    console.log('Total Price :', calculation);
  },
};

purchase1UseThis.totalPrice(); // purchase1과 동일한 결과값 반환.

// 2-2. 만약에 비슷한 구조의 객체가 존재한다면 효율적이지 못하다! 코드 낭비!
const purchase2 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    const calculation = this.shoes * this.stateTax;
    console.log('Total Price :', calculation);
  },
};

purchase2.totalPrice();

// 방법은 class 사용! >> class.js로 이동!
