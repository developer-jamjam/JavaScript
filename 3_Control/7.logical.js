/*
    논리 연산자 (Logical Operators)

    && 그리고 (모든 조건이 true)
    || 또는 (조건중에 하나라도 true 라면)
    ! 부정 (단항연산자에서 온 것)
    !! 불리언 값으로 변환 (단항연산자 응용버전)
*/

let num = 25;
if (num >= 0 && num < 9) { // num 이 0보다 크고 그리고 9보다 작으면 출력 
    console.log('&&👍')
}

if (num >= 0 || num < 9) { // num 이 0보다 크거나 또는 9보다 작으면 출력 
    console.log('||👍')
}

if (!(num >= 0 || num < 9)) { // num 이 0보다 크고 그리고 9보다 작은 값이 true 가 아닐때 출력 
    console.log('!👍')
}

console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false

console.log(!'text'); //문자열 = true, 부정시 false
console.log(!!'text'); //문자열 = true, 이중부정 true (문자열을 boolean값으로 변환)