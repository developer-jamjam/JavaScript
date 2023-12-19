/*
    Immutability 불변성 = unchangable
    - mutable 변경할 수 있는 이라는 뜻 
    함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지않다. 😣
    상태변경이 필요한 경우에는, 새로운 상태를 (오브젝트, 값) 만들어서 반환해야 한다 !!✨
    원시값 = 값에 의한 복사 
    객체값 = 참조에 의한 복사 (메모리 주소가 전달되기에 동일한 오브젝트를 가르킨다.)
*/

function display(num) { 
    //함수안에서 인자란 함수내부에서 사용하고 있는 변수와 비슷하다 let num = 4; 
    //함수 호출 시 value = 4 라는 원시 값 자체가 그대로 복사되어 전달.
    // num이라는 함수 지역변수에 4가 할당 
    num = 5; //💥💢❌
    console.log(num);
}
const value = 4; //원시의 값은 전달되거나, 할당 될 때 값에 의해서 복사된다. 
display(value); // 5
console.log(value); // 4

// 안좋은 예
function displayObj(obj) {
    obj.codeName = 'vervon'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경하면 안된다.❌❌❌❌❌
    console.log(obj);
}

const jin = { codeName: 'Jin'};
displayObj(jin); // { codeName: 'vervon' }
console.log(jin); // { codeName: 'vervon' } 참조값도 변경이 되어버림..

function changeCodeName(obj) { // 이름부터 변경하는 느낌을 주도록 ❗❗❗
    return console.log({...obj, codeName: 'vervon'})// 반환 할때는 새로운 오브젝트 만들기 ❗❗
}

const amuro = { codeName: 'amuro'}

changeCodeName(amuro); // { codeName: 'vervon' }
console.log(amuro); // { codeName: 'amuro' }