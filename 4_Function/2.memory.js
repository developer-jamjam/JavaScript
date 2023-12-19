function add(a,b){
    console.log(a)
    console.log(b)
    return a + b;
}

const sum = add; 
/*
    함수의 이름 = 함수 object가 담겨있는 메모리 주소를 가르키고 (가지고) 있다. 
    그러므로 sum이라는 변수에 add라는 함수의 이름을 할당하는 것은 add가 가르키고 있는 메모리 주소를 그대로 
    할당하는 것과 동일하다. 
    함수를 호출 할때에는 ? add()소괄호 사용 인자값을 다 전달해주어야 한다.
*/

console.log(sum(1,2)); //함수호출 인자 1,2 => 결과 3
console.log(add(1,2)); //함수호출 인자 1,2 => 결과 3
console.log(add(1));// 함수호출 인자1 만 전달 a = 1 , b = undefined => 결과 NaN 
console.log(add()); // 함수호출 인자 없이 실행 a = undefined , b = undefined => 결과 NaN
