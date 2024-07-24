const carSpeed = Number(window.prompt("현재 자동차 속도는?"));
const carSpeedLimit = Number(window.prompt("자동차 제한 속도는?"));
const carSpeedLimitText =
  carSpeed > carSpeedLimit ? "과속입니다!" : "안전운행 중이네요!";
console.log(carSpeedLimitText);

const countries = ["영국", "프랑스", "독일", "스페인", "이탈리아", "스위스"];
const cNumber = Number(window.prompt("0~5까지 번호를 입력해보세요."));
console.log(countries[cNumber]);

