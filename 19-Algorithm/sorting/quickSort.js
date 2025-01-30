//Q4 퀵소트

// 함수는 숫자로 이루어진 배열을 입력받는다.

// 이 함수는 배열의 모든 요소를 크기가 작은 순서대로 정렬한 배열을 리턴한다.
// 이 함수는 다음의 프로세스를 따른다.
// 아래 프로세스를 할 수 없는 경우, 입력받은 배열을 그대로 리턴한다.

// 배열 내 한 숫자를 고른다.
// 그 숫자보다 작은 것들만 모은 배열과 큰 것만 모은 배열로 나눈다.
// 작은 것 배열과 큰 것 배열을 각각 quickSort(array)로 정렬한다.
// 정렬된 것을 가지고 [ ...작은 것 배열, 기준 숫자, ...큰 것 배열 ] 로 만들어 리턴한다.
// 적당한 무작위 숫자 10개를 배열에 넣어 이 함수에 넣고, 그 결과를 화면에 출력해보자.

// 초기 구현

function quickSort(array) {
  if (array.length <= 1) return array;

  const pivot = array[0];
  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arrarr = [2, 4, 1, 6, 5, 10, 8, 20, 9];
console.log(quickSort(arrarr));

// 고민해볼 점
// 성능이 괜찮을까?
// for문을 쓰지 않고 만드는 방법은 없을까?
// 있다면 그것이 시간 복잡도가 더 좋을까?

/* 
🔥 고민해본 점
1. for문을 대신할 방법 : filter
filter 매서드를 사용하여 for문을 쓰지 않고 pivot을 기준으로 작은 쪽, 큰 쪽 배열 생성이 가능하다.
하지만 시간 복잡도는 괜찮은가?

push() vs filter() 총 시간 복잡도 비교

push()  	: O(n)	O(n log n)	더 적은 연산 수행
filter()	: O(2n)	O(n log n) (엄밀히는 O(2n log n)) ,	push()보다 상수 배만큼 더 느릴 수 있음

따라서 현재 push 방법을 유지하는 게 좋은 거 같다. 데이터 양이 많지 않다면 filter을 사용해도 괜찮을 거 같고.

2. 첫 번째 요소를 피벗하지 않고 중간 인덱스 값을 사용하자!
현재 코드에서는 항상 array[0]을 피벗으로 사용하지만, 가장 앞/뒤 요소는 편향된 데이터에서 비효율적일 수 있다.
개선 방법: "중간값"을 피벗으로 선택하면 평균적인 경우에 더 안정적인 성능을 보일 수 있다. (편향적인 데이터일 경우 첫번째 값이 비효율적)

따라서 2번 개선점을 생각하고 코드를 다시 짰다.

*/

// 수정 코드
// pivot을 첫 번째 값이 아닌 중간 값으로 사용. => 편향적인 데이터에 효율적으로 대응

function quickSort2(array) {
  if (array.length <= 1) return array;

  // 피벗을 중간값으로 선택
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {
    // 첫번째 값도 비교해야하므로 1이 아닌 0으로 시작!
    if (i === pivotIndex) continue; // 피벗은 제외하고 처리

    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

console.log(quickSort2([10, 11, 12, 13, 14, 15, 16]));
