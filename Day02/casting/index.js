//type casting: 타입 바꾸기

//1. 문자/불리언 숫자로!

const first = Number("100"); //숫자 100으로 바뀐다.
const second = Number("24");
const result = first + second;

const result1 = "100" + "24";

window.alert(result); //124
window.alert(result1); //10024

const a = String(1500); //"1500"
const b = String(true); //"true"

const third = Number(true); // 1
const fourth = Number(false); // 0

Boolean("마라탕");
