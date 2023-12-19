// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}

// 객체 => 다른 변수에 할당 하거나, 재할당 가능 함수도 객체이므로 가능하다.
let add = function (a,b) { // 함수의 이름이 없는것 => 무명함수 
    return a + b;
}
/*
    값 자체로 함수를 할당하면 함수가 메모리에 생성되고 메모리에 만들어진 그 주소가 add에 할당이 된다.
    표현식으로 사용되는 함수는 이름을 작성해도 되긴하지만 , 외부에서 그 이름에 접근할 수 없다. 
    그러므로 이런 경우에는 주로 함수의 이름을 생략한다.
*/
console.log(add(1,3)); // 4 

// 화살표 함수 const name = () => {}
let sum = (a,b) => a + b; // 바로 값을 리턴할 경우 {} , return 생략 가능하다.


console.log(sum(1,4)); // 5

// 생성자 함수 const object = new Function(); 라는 것도 있다 (차후 객체 공부할때 다시.. )
// 함수 자체는 선언문으로 할때는 문이지만 함수는 값으로 계산될 수 있는 표현식이다.
// IIF (Immediately-Invoked Function Expressions)
(function run(){
    console.log('😎');
})();  // 😎
//함수를 ()로 묶으면 함수가 값으로 변환이 된다. 그래서 ()로 묶어서 바로 호출하면 호출이 된다.
