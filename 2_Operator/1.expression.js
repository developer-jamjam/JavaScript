let black; // 선언문
black = 'jin'; // 표현식, 할당문

//let aptx4869 = let black; //선언문 자체는 값을 생성하지 않는다. 할당 불가.
/*
    let aptx4869 = let black;
                   ^^^^^

    SyntaxError: Unexpected identifier
*/

let aptx4869 = black = 'sherry';
console.log(aptx4869); //sherry