const cook = (recipe) => {
  console.log("요리 시작!");
  recipe();
  console.log("요리 끝!");
};
const taco = (x) => {
  console.log("1. 타코 준비");
  console.log(`2. ${x} 넣기`);
  console.log("3. 감싸기");
};
const ramen = () => {
  console.log("1. 물 끓이기 2. 면 넣기 3. 스프넣기 4. 불 끄기");
};
cook(() => taco("🍤"));
cook(() => taco("🧀"));
cook(() => taco("🥑"));
cook(ramen);
cook(() => {
  console.log("물 끓이기");
  console.log("소금 넣기");
  console.log("고기 넣기");
  console.log("음식물 쓰레기에 버리기");
});
