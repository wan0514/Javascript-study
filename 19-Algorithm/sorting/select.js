// 선택 정렬 알고리즘

// 초기 구현

function seletionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minNumIndex = i;

    let minNum = Math.min(...array.slice(minNumIndex));
    let index = array.indexOf(minNum, minNumIndex);

    if (minNum === array[minNumIndex]) {
      continue;
    } else {
      [array[index], array[minNumIndex]] = [array[minNumIndex], array[index]];
    }
  }

  return array;
}

const myArray = [1, 5, 2, 6, 9, 8, 7, 10, 3, 4];
seletionSort(myArray);

/** 
초기 구현 코드의 성능 이슈 !

🚨 1. Math.min(...array.slice(minNumIndex))의 비효율성
매 반복마다 slice(minNumIndex)로 새로운 배열을 만들고 Math.min()을 호출하는데,
이 과정에서 O(n) 시간 복잡도가 추가돼서 전체 알고리즘의 시간 복잡도가 O(n²)에서 더 비효율적으로 증가할 수 있다.

🚨 2. indexOf(minNum, minNumIndex) 호출
indexOf()는 배열을 탐색하며 최솟값의 인덱스를 찾는데, **최악의 경우 O(n)**이 걸린다.
즉, Math.min()과 indexOf()를 함께 사용하면 **매 반복마다 O(n) + O(n) = O(2n) ≈ O(n)**의 연산이 추가된다.
결국 전체적으로 O(n²)보다 더 느려질 수 있다.

**/

// 새로운 로직으로 구현

function seletionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // i는 현재 정렬할 위치
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      //j는 i번째 요소 이후로 차례대로 비교할 대상 인덱스
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      continue;
    }
  }

  return array;
}

const myArray = [1, 5, 2, 6, 9, 8, 7, 10, 3, 4];
const result = seletionSort(myArray);

console.log(result);

/** 
🚀 코드 개선점
성능 향상 (O(n²)) 유지하면서 불필요한 연산 제거
Math.min(...array.slice()) → ❌ 배열을 새로 만들지 않음
indexOf(minNum) → ❌ 추가 탐색 없이 for 루프에서 minIndex를 한 번에 찾음
최소값 탐색을 단일 루프로 처리하여 성능 개선
불필요한 else 제거
if에서 조건을 만족하면 continue를 사용하지 않아도 됨.
코드 가독성 향상
변수명 (minNumIndex → minIndex)을 더 직관적으로 변경

 **/
