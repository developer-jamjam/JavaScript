/*
    객체 : 복합데이터 {key: value}
    {
        id: 4869,
        key:'black-company',
    }
*/

let name = 'jin';
let color = 'black';
let display = '🎃';

//연관된 데이터를 한 덩어리로 그룹지을 수 있는 (패키지화 할 수 있는 )것 => 객체
let jin = {
    codename: 'jin',
    color: 'silver',
    display: '🎃'
}
console.log(jin); // { codename: 'jin', color: 'black', display: '🎃' }
console.log(jin.codename); // jin
console.log(jin.color); // black
console.log(jin.display); //🎃

let amuro = {
    codename: 'vervon',
    color: 'yellow',
    display:'🍸'
}
console.log(amuro); // { codename: 'vervon', color: 'yellow', display: '🍸' }
