// const year = window.prompt("몇 년생인가요?");
// const age = 2024 - Number(year);

// window.console.log(`당신의 나이는 ${age}이군요!`);

const number1 = window.prompt("숫자를 적으시오.");
const number2 = window.prompt("숫자를 적으시오.");

const add = Number(number1) + Number(number2);
const subtract = Number(number1) - Number(number2);
const multiply = Number(number1) * Number(number2);
window.console.log(`합: ${add}`);
window.console.log(`차: ${subtract}`);
window.console.log(`곱: ${multiply}`);

const length = window.prompt("한 변의 길이를 입력하시오.");
const totalLength = Number(length) * 4;
window.console.log(`정사각형의 넓이는 ${totalLength}입니다.`);

const americano = window.prompt("아메리카노 주문 갯수를 입력하시오.");
const latte = window.prompt("라떼 주문 갯수를 입력하시오.");
const americanoPrice = Number(americano) * 1500;
const lattePrice = Number(latte) * 2500;
const totalPrice = Number(americanoPrice) + Number(lattePrice);
window.console.log(`총 가격은 ${totalPrice}입니다.`);
