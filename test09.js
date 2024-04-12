// 정렬되지 않는 배열에서 특정한 요소를 검색하는 경우,
// 배열의 모든 요소를 처음부터 특정 요소를 발견할 때까지
//차례대로(linear search)선향검색 해야한다.

// 선형검색을 통해 배열에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 1)); //0
console.log(linearSearch([1, 2, 3, 4, 5, 6], 2)); //1
console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); //2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 4)); //3
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); //-1
