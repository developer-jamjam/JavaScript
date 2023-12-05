/*
    산술연산자 (Arithmetic Operators)
    + 더하기 
    - 빼기 
    * 곱하기
    / 나누기
    % 나머지값
    ** 지수(거듭제곱)
*/

console.log(5+2); //7
console.log(5-2); //3
console.log(5*2); //10
console.log(5/2); //2.5
console.log(5%2) //1
console.log(5**2); //25 (es7에서 추가)
console.log(Math.pow(5,2)); //25 es7에서 지수(거듭제곱)이 추가되기전에 사용한 함수

// + 연산자 주의점 !
let text = '두개의' + '문자를 연결 할 때 사용';
console.log(text); // 두개의문자를 연결 할 때 사용
text = '1'+ 1
console.log(text); // 11
console.log(typeof text); // string 숫자와 문자열을 더하면 문자열로 변환된다.