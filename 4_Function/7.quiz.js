/*
    주어진 숫자 만큼 0부터 순회하는 함수
    순회하면서 주어진 특정한 일을 수행해야 한다. 
    ex) 5, 순회하는 숫자를 다 출력하고 싶음
        5, 순회하는 숫자의 두배값을 다 출력하고 싶음
    function iterate(max, action){

    }
*/

const iteratePrint = (num) => {
    console.log(num);
}
const iterateMultiply = (num) => {
    console.log(num * 2);
}

function iterate(max, action){
    for(let i=0; i < max; i++) {
        action(i);
    }
}

iterate(5, iterateMultiply); //0 ,2, 4, 6, 8
iterate(5, iteratePrint); // 0, 1, 2, 3, 4

//간편하게 이렇게 할 수도 있다.
iterate(4, (num)=> console.log(num)); // 0, 1, 2, 3
iterate(4, (num)=> console.log(num*2)); // 0, 2, 4, 6

setTimeout(()=> {
    console.log('1초 뒤 해당함수가 실행 될 예정입니다.');
}, 1000); 
// 첫번째 인자 callback함수 전달 , 두번째 인자 몇 초 뒤에 동작할 것인지 !  