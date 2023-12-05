/*
    컴파일러를 이용하는 프로그래밍 언어 => 정적타입 Static Type
    인터프리터 타입의 프로그래밍 언어 => 동적타입 Dynamic Type

    typeof 
    : 데이터 타입을 확인 하는 연산자
    : 값을 타입 문자열로 반환
*/

let variable;
console.log(typeof variable); //undefined

variable = '';
console.log(typeof variable); // string

variable = 123;
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

// 할당 된 값에 따라 타입이 결정 된다. (동적으로 실행할 때 할당된 값에 따라서 타입이 변경된다.)
// 자바스크립트에도 타입이 있다. ( dynamic , weakly typed programming language)