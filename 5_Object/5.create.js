// const candy = {
//     name: 'candy',
//     display: function() { 
//         console.log(`${this.name}: '🍭'`);
//     },
// };
// const chocolate = {
//     name: 'chocolate',
//     display: function() { 
//         console.log(`${this.name}: '🍫'`);
//     },
// };

//생성자 함수
function Desert(name,emoji) { //함수에서 대문자로 함수를 시작하면 생성자 함수를 만들 수 있다. 
    this.name = name; //this라는 keyword 이용하면 객체 자기 자신을 가르킬 수 있다. 
    //this.name을 하는 순간 객체에 name이라는 key가 만들어지고 value는 외부에서 받은 인자 name값이 들어가게 된다. 
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name} : ${this.emoji}`);
    }
    return this //생략 가능 , 생성자함수에서는 this가 자동으로 리턴이 된다.
}

const candy = new Desert('candy','🍭');
const chocolate = new Desert('chocolate' ,'🍫');
const cake = new Desert('cake','🍰');

console.log(candy); //Desert { name: 'candy', emoji: '🍭', display: [Function (anonymous)] }
console.log(chocolate); //Desert {name: 'chocolate',emoji: '🍫',display: [Function (anonymous)]}
console.log(cake); //Desert { name: 'cake', emoji: '🍰', display: [Function (anonymous)] }
console.log(cake.emoji); //🍰
cake.display(); //cake : 🍰