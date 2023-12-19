// 매개변수의 기본값은 무조건 undefined 
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장이 된다.
function add(a,b) {
    console.log(a);
    console.log(b);
    console.log(arguments); 
    /*
        함수는 객체이기때문에 함수라는 객체안에 property들이 들어있다.  그 property 중 유용한 property arguments
        index가 0부터 시작한다. 
        0번째 인자는 첫번째 전달한 값 1 
        1번째 인자는 두번째 전달한 값 2
        2번째 인자는 세번째 전달한 값 3 
    */
    return a + b;
}

add(); // 함수호출 a = undefined , b = undefined [Arguments] {}
add(1,2,3); // 함수호출 a = 1 , b = 2 , 추가적으로 전달한 값 3 무시된다. [Arguments] { '0': 1, '1': 2, '2': 3 }

// 매개변수 기본값 Default Parameters
function sum(a = 1,b = 1) { //기본값을 미리 지정 해 둘 수 있다. 기본값은 인자에 값이 전해지지 않았을때만 적용된다.
    console.log(a);
    console.log(b);
    console.log(arguments); 
    return a + b;
}

sum(); // 함수호출 a = 기본값인 1  , b = 기본값인 1 [Arguments] {}
sum(3); // 함수호출 a = 3  , b = 기본값인 1 [Arguments] { '0': 3 }
sum(2,2); // 함수호출 a = 2 , b = 2 [Arguments] { '0': 2, '1': 2 }

//Rest 매개변수 Rest Parameters
function numarray(...numbers) { // 얼마나 많은 갯수의 인자가 들어올 지 모를때 모든것들을 다 배열로 받고 싶을때 사용.
    console.log(numbers)
}

numarray(1,2,3,4,5,6,7,8,9,0); 
/* 
    [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 0
    ]
*/
function numarray2(a,b,...numbers) { // 얼마나 많은 갯수의 인자가 들어올 지 모를때 모든것들을 다 배열로 받고 싶을때 사용.
    console.log(a);
    console.log(b);
    console.log(numbers)
}
numarray2(1,2,3,4,5,6,7,8,9,0);
/*
    a = 1, b= 2
    [
        3, 4, 5, 6,
        7, 8, 9, 0
    ]
*/