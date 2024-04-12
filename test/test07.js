// 배열이 갖고 있는 값을 요소(element) 라고 부른다.
// 배열 요소는 자신의 위치를 나타내는 0 이상의 정수이 index를 갖는다.
// 배열은 객체타입이다.

const arr = ["apple", "banana", "orange"];

// 배열은 요소의 개수, 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
// 배열의 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //'apple' 'banana' 'orange'
}
