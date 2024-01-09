const x = 0;
const y = 0;

const coordinate = {x,y}; // {x: x, y: y} key와 변수의 이름이 같다면 생략이 가능하다.
console.log(coordinate); // { x: 0, y: 0 }

function makeObj(name,age) {
    return {
        name,
        age
    };
}

console.log(makeObj('zero', 25)); //{ name: 'zero', age: 25 }