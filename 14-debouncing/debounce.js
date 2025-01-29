// debouncing (디바운싱) : 연이어 호출되는 함수들 중 마지막 함수만 호출시키는 작업

// example

window.addEventListener(
  'input',
  debounce(function (e) {
    console.log(e.target.value);
  }, 200)
);

// 쓰로틀링(throttling) : 일정 시간 동안 이벤트 핸들러를 한 번만 실행하도록 제어하는 것
