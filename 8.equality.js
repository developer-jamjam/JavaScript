/*
    동등 비교 관계 연산자 (Equality Operators)
    == 값이 같음
    != 값이 다름
    === 값과 타입이 둘다 같음
    !== 값과 타입이 다름
*/

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(true == 1); //true
console.log(true === 1); // false
console.log(false == 0); // true
console.log(false === 0); // false

console.clear()

const black = {
    codename: 'jin'
};

const blackCompany = {
    codename: 'jin'
}

console.log(black == blackCompany); // false 
console.log(black === blackCompany) // false

/*
    why false ...? 
    - black 오브젝트 생성 => 메모리 어딘가에 보관 => black에는 ex) 0X1111이라는 메모리 주소가 할당
    - blackCompany 오브젝트 생성 => 또다른 메모리 공간 어딘가에 보관 => blackCompany에는 ex) 0X4869라는 메모리 주소가 할당
    black와 blackCompany는 서로 다른 메모리 주소를 가지고 있기 때문에 false
*/

console.log(black.codename == blackCompany.codename); // true
console.log(black.codename === blackCompany.codename); // true

const aptx4869 = blackCompany;

console.log(blackCompany == aptx4869); // true
console.log(blackCompany === aptx4869);  // true

/*
    wyh true ...? 
    - blackCompany 와 aptx4869는 동일한 메모리 주소를 가지고 있으므로 true
*/