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
