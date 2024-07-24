//Number, String, Boolean, Array []
//변수에 들어가면 데이터 타입 따지기
//Object

//key - value[KV]
//key - 중복안됨, 문자나 숫자만 가능.
//value - 중복됨, 아무 데이터타입 가능.
const inSideOut = {
  title: "인사이드아웃",
  limit_age: 12,
  company: "PIXAR",
  running_time: 90,
  genre: ["kids", "drama", "fantasy"],
};

//object 데이터 조회
inSideOut.title;
inSideOut.genre[1]; //drama
inSideOut["genre"][1]; //drama

//object 데이터 추가
inSideOut.director = "켈시 맨";

//object 데이터 삭제
delete inSideOut.limit_age;

const coffee = {
  name: "바닐라 라떼",
  price: 3500,
  caffeine: true,
  coffeeBean: "아라비카 원두",
  components: [
    (kcal = "1059kcal"),
    (carbon = "20g"),
    (Na = "8g"),
    (fat = "9g"),
  ],
};
