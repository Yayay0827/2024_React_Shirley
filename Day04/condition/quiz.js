// const angle = Number(prompt("각도를 입력하세요."));

// if (angle == 180) {
//   alert("평각");
// } else if (angle > 90) {
//   alert("둔각");
// } else if (angle == 90) {
//   alert("직각");
// } else if (angle > 0) {
//   alert("예각");
// } else {
//   alert("입력 오류!! 너이자식 음수썼냐");
// }

// const englishTest = Number(prompt("영어 시험 점수를 입력하세요"));

// if (englishTest >= 90) {
//   alert("A");
// } else if (englishTest >= 80) {
//   alert("B");
// } else if (englishTest >= 70) {
//   alert("C");
// } else if (englishTest >= 60) {
//   alert("D");
// } else {
//   alert("F");
// }

const first = prompt("e인가요 i인가요?");
const second = prompt("n인가요 s인가요?");
const third = prompt("f인가요 t인가요?");
const fourth = prompt("j인가요 p인가요?");

const mbti = {
  e: "외향적",
  i: "내향적",
  n: "감각적",
  s: "직관적",
  f: "감성적",
  t: "이성적",
  j: "계획적",
  p: "즉흥적",
};

console.log(
  `당신의 mbti는 ${mbti[first]}이고 ${mbti[second]}이고 ${mbti[third]}이고 ${mbti[fourth]}이시군요!`
);
