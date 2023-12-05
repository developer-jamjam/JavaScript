/*
    데이터 타입 
    : 원시 (primitive) 단일데이터 [number,string,boolean,null,undefined,symbol]
    : 객체 (object) 복합데이터 [array,function]
*/

let integer = 123; //정수
let negative = -123; //음수
let double = 1.23; //실수

console.log(integer); //123
console.log(negative); //-123
console.log(double); //1.23

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; //16진수

console.log(binary); //123
console.log(octal); //123
console.log(hex); //123

console.log(0/123); //0
console.log(123/0); // Infinity 
console.log(123/-0); //-Infinity
console.log(123/'text'); //NaN (Not a Number)

/* 
    BigInt : 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체
    정수 리터럴의 뒤에 n을 붙이거나(10n) 함수 BigInt()를 호출해 생성
*/
let bigInt = 1234567890123456789012345678901234567890n;
let functionBigInt = BigInt("1234567890123456789012345678901234567890");
console.log(bigInt); // 1234567890123456789012345678901234567890n
console.log(functionBigInt) //1234567890123456789012345678901234567890n

// MDN Number : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number