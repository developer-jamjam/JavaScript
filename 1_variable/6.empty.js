// null, undefined 

let variable;
console.log(variable); //undefined : 정해지지 않은 상태 

variable = null 
console.log(variable); //null : 비어있는 상태

let activeItem; // 아직 활성화 된 Item이 있는지 없는지 모르는 상태!

activeItem = null // 활성화 된 Item이 없는 상태!

//타입출력 연산자 typeof
console.log(typeof 123); //number
console.log(typeof '123'); //string
console.log(typeof null); //object
console.log(typeof undefined); // undefined

