/*
    Primitive difference Object
    원시타입과 객체타입의 차이

    원시타입 
    : 메모리 셀 안에 값이 바로 들어가 있다. 변수가 그 메모리 자체를 가르키고 있다. 
    : 값 Value 자체가 메모리 셀 안에 들어가 있다.
    객체타입 
    : 메모리 셀 안에 실제로 객체가 들어있는 메모리 주소를 보관. 참조값 = 메모리 주소
    : 참조(Reference)값 이 변수에 들어 있다.

    원시타입은 값 자체가 메모리에 들어있고, 객체타입은 참조값이 들어있다.
    할당하거나,다른 함수에 매개변수로 전달 하거나 할 시에는 항상 메모리 안에 들어있는 것이 복사되어 진다.
*/

//원시타입은 값이 복사되어 전달
let a = 1; // a = 1
let b = a; // b = 1 Copy by Value

b = 2; // b = 2 , a = 1
console.log(a,b); // 1, 2

// 객체타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let black = { //ex 메모리주소 : 0X1234
    codeName:'jin',
} // black = { codeName: 'jin' }
let aptx4869 = black; // 메모리주소 : 0X1234
console.log(aptx4869); //  aptx4869 = { codeName: 'jin' }  Copy by Reference
aptx4869.codeName = 'Sherry';
console.log(black); // { codeName: 'Sherry' }
console.log(aptx4869); // { codeName: 'Sherry' }
