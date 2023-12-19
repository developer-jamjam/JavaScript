/*
    일급객체 First-class object 
    - 일반 객체처럼 모든 연산이 가능한 것
        - 함수의 매개변수로 전달
        - 함수의 반환값으로 사용
        - 할당 명령문
        - 동일 비교 대상
    함수가 일반 객체처럼 모든 연산이 가능 한 것 => 일급함수 First - class function

    고차함수 Higher-order function
    - 인자로 함수를 받거나 (콜백함수)
    - 함수를 반환하는 함수
*/

//콜백함수
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

/*
    전달된 action은 콜백함수이다.
    전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라, 
    함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
    그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 된다.
*/
function calculator(a, b, action) { // a와 b를 전달 받고 action이라는 함수를 전달 받는다. 외부로 부터 전달받는 함수 => callback함수
    if ( a< 0 || b< 0) {
        return;
    }
    let result = action(a,b);
    console.log(result);
    return result;
}

calculator(1, 2, add); //3 이름만 호출 => add가 가르키고있는 함수의 주소를 전달한다. 
calculator(2, 5, multiply); // 10
calculator(-1,2, add); //if문에서 조건에 해당되므로 바로 return되어 callback함수 동작 X 