/*
    연산자 우선순위
    : MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

let a = 2;
let b = 3;
let result = a + b * 4; 
console.log(result); // 14 (3 * 4) + 2
result = a++ + b * 4; 
console.log(result); // 14 (3 * 4) + 2(연산하고 증가되므로 현재a의 값은 2)
console.log(a)// 3
result = (a + b) * 4; 
console.log(result) // 24 (3 + 3) * 4 
// 우선순위를 명확하게 코드상에서 ()로 명시 해주는 것이 좋다 ! 

