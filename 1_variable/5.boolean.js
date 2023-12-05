// boolean Type 

let 참 = true;
let 거짓 = false;
// 변수명은 한글로 짓는것을 권장하지 않는다.

console.log(참,거짓); // true false 

// 활용 ex.

let isFree = true;
let isActivated = false;
let isEntrolled = true;

console.log(isActivated); //false 

console.clear();
//Falsy 거짓인 값
console.log(!!0); // false 느낌표2개 붙이면 값을 true or false 로 나타내 준다.
console.log(!!-0); // false
console.log(!!''); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!NaN); // false

//Truthy 참인 값
console.log(!!1); //true
console.log(!!-1); //true
console.log(!!'text'); //true
console.log(!!{}); //true
console.log(!!Infinity); //true

//MDN Boolean : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean