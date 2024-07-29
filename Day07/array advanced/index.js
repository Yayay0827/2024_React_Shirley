// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.push(6)
// const test = arr.map(() => {
//   return "🍅";
// });
// console.log(test);
// const test = arr.map(() => {
//   return 10;
// });

// console.log(test);

// const oneTwo = arr.map((x) => {
//   return x % 2 == 1 ? 1 : 2;
// });

// console.log(oneTwo);
// const tomato = arr.map((x) => {
//   return x == 3 ? "🍅" : x;
// });
// console.log(tomato);
// const words = arr.map((x) => {
//   return String(x);
// });
// console.log(words);

//filter: 요소들을 필터링
// const oddArr = arr.filter((x) => {
//   return x % 2 == 1;
// });
// console.log(`oddArr:${oddArr}`);

// const timesThree = arr.filter((x) => {
//   return x % 3 == 0;
// });
// console.log(`timesThree ${timesThree}`);

// const sixUp = arr.filter((x) => {
//   return x >= 6;
// });
// console.log(`bigger than six ${sixUp}`);

const fruits = [
  "peach",
  "apple",
  "mango",
  "strawberry",
  "avocado",
  "grape",
  "kiwi",
  "watermelon",
  "melon",
];
const melon = fruits.filter((x) => {
  return x.includes("melon");
});
console.log(melon);

const sixCharacters = fruits.filter((x) => {
  return x.length >= 6;
});
console.log(sixCharacters);

const uppercase = fruits.map((x) => {
  return x.toUpperCase();
});
console.log(uppercase);
