/*
    객체를 손쉽게 만들 수 있는 템플릿

    1. 생성자 함수(오래된 고전적인 방법)
    2. 클래스 ✨

    MDN - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
*/

// 생성자 함수를 class로 만들어보기 
// function Desert(name,emoji) {
//     this.name = name; 
//     this.emoji = emoji;
//     this.display = () => {
//         console.log(`${this.name} : ${this.emoji}`);
//     }
//     return this
// }

// Class
class Desert {
    // 생성자 : new 키워드로 객체를 호출할 때 생성되는 함수 
    constructor(name,emoji) {
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }
}

//candy 는 Desert 클래스의 인스턴스 이다.
const candy = new Desert('candy','🍭');
//chocolate 는 Desert 클래스의 인스턴스 이다.
const chocolate = new Desert('chocolate' ,'🍫');
const cake = new Desert('cake','🍰');

console.log(cake);
chocolate.display();

//obj 는 객체이고, 그 어떤 클래스의 인스턴스도 아니다
const obj = {name:'sagongsa'}