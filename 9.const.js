/*
    let : 재할당 가능
    const : 재할당 불가능
*/

let a = 1;
a = 5;

/*
    const
    1. 상수
    2. 상수변수 또는 변수
*/
const text = 'Hello';
//text = 'Hi'; 재 할당 불가.
/*
    text = 'Hi';
    ^

    TypeError: Assignment to constant variable.
*/

//1. 상수
const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수
const aptx4869 = {
    codename: 'sherry',
    color: 'brown',
    display:'🍸'
};
//aptx4869 = {} 안됨! 

console.log(aptx4869); // { codename: 'sherry', color: 'brown', display: '🍸' }
aptx4869.codename = 'Haibara';
console.log(aptx4869) // { codename: 'Haibara', color: 'brown', display: '🍸' }

/*
    aptx4869가 가르키고 있는 메모리 셀에 재할당 불가능 = aptx4869에 다른 메모리주소를 담을 수 없다.
    메모리 주소가 가르키는 곳에 있는 Object 변경은 가능하다.

    let : 재할당 가능 , 변수가 가르키고 있는 Object의 값을 변경하는 것 가능
    const : 재할당 불가능, 변수가 가르키고 있는 Object의 값을 변경하는 것은 가능하다.
    const = 재할당만 불가능!! 
*/
