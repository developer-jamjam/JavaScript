/*
    삼항 조건 연산자 (Ternary Operators)
    조건식 ? 참인경우 : 거짓인 경우
    조건식 ? 표현식(조건식이 true일때) : 표현식(조건식이 false일때)
*/

let fruit = 'apple';

fruit === 'apple' ? console.log('🍎') : console.log('🍊'); // 🍎

let emoji = fruit === 'apple' ? '🍎' : '🍿';
console.log(emoji); // 🍎