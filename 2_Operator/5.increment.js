/*
    증가 & 감소 연산자 Increment & Decrement Operators
*/

let a = 0;
console.log(a); // 0
a++ // a = a + 1; 축약버전
console.log(a); // 1
a-- // a = a - 1; 축약버전
console.log(a); // 0

/*
    주의 !
    a++ 필요한 연산을 하고, 그 뒤 값을 증가시킨다.
    ++a 값을 먼저 증가하고, 필요한 연산을 한다.
*/
console.clear();
a = 0; 
let b = a++;
console.log(b); // 0 a의 값 0을 할당하는것이 먼저 이후 a의 값을 증가시킨다.
console.log(a); // 1
a = 0 
b = ++a;
console.log(b); //1 a의 값을 할당하기전 a의 값을 먼저 증가하고 할당.
console.log(a); //1 
