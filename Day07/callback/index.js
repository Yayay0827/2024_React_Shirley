// const luckybicky = (x) => {
//   return x + "럭키비키잖아!";
// };

// luckybicky("월요일 아침");
// luckybicky("자바스크립트");

const dreamTeam = (x) => {
  console.log("Members of the DreamTeam😋");
  x();
  console.log("끝");
};

const dream = () => {
  console.log("Dream");
};

const sapnap = () => {
  console.log("Sapnap");
};

const george = () => {
  console.log("GeorgeNotFound");
};

dreamTeam(dream);
dreamTeam(sapnap);
dreamTeam(george);
