/*
    Object literal { key: value }
    new Object()
    Object.create()

    key - 문자, 숫자, 문자열, 심볼
    value - 원시값, 객체 (함수)
*/
let alcol = {
    // key : value
    name: 'jin', //특수한 경우를 제외 key값은 문자를 사용한다. 
    'hello' : '💤',
    0 : 'zero',
    ['hello-1'] : '💤',
};

/*
    속성, 데이터에 접근하기 위해서는 ? 
    alcol.name 마침표 표기법 dot notation
    alcol['name']; 대괄호 표기법 bracket notation
*/
console.log(alcol.name); //jin
console.log(alcol[0]); // zero

// 속성 추가
alcol.emoji = '🍸';
console.log(alcol.emoji); //🍸

//속성 삭제 

delete alcol.emoji;
console.log(alcol.emoji); // undefined