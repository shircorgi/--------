// 배열의 메소드 (Array's Method)
let members = ["나선계단", "장수풍뎅이", "폐허도시", "무화과 타르트", "특이점"];

console.log(members);
delete members[4];
console.log(members);

//splice (startIndex, deleteCount)
//지우고 새로운 요소를 추가 가능
//splice (startIndex, deleteCount, item)
members.splice(1, 2, "지오토", "엔젤");
console.log(members); // [나선계단, 지오토, 엔젤, 무화과 타르트]
