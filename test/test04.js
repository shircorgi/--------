// Array
let courseRanking = ["Index 1", "Index 2", "Index 3", "Index 4"];

// index == Property
//indexing (0~...)
console.log(courseRanking[2 + 1]);

//맴버들의 이름을 나열
//배열도 객체의 한 종류
let members = ["1", "2", "3", "4", "5"];

console.log(members.length);
console.log(members["length"]);
console.log(members[members.length - 1]);

//존재하지 않는 요소에 접근할 시 undefined로 표시
console.log(members[5]);

// 값을 넣어 존재하지 않는 요소에 접근 및 새로운 값을 할당
// 배열 요소가 추가 및 수정됨
members[5] = "NiceCode";
console.log(members[5]);
