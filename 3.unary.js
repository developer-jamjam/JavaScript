/*
    단항 연산자 Unary Operators
    + (양)
    - (음)
    ! (부정)
*/

let a = 5;
a = -a; // -1 * 5 
console.log(a); // -5
a = -a // -1 * -5
console.log(a); // 5 

a = +a; 
console.log(a); //5

a = -a; // -5
a = +a; // +(-5)
console.log(a); // -5

let boolean = true;
console.log(boolean); //true
console.log(!boolean); //false
console.log(!!boolean); //true

// + : 숫자가 아닌 타입들을 숫자로 변환하면 어떤값이 나오는지 확인 할 수 있다.
console.clear(); //콘솔 clear
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); //0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

// ! 부정연산자
// !! 값을 Boolean 타입으로 변환 함
console.log(!1); // false
console.log(!!1); // true