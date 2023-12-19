//사용예제 1
function sum(num1,num2) {
    const result = num1 + num2;
    return result;
    //return num1+num2 로 바로 return 도 가능
}

const result = sum(1,2); //함수 호출 , num1 에는 1 num2에는 2가 전달이 된다.
console.log(result); // 3

//사용예제 2

function fullName(firstName, lastName) {
    return `${firstName} ${lastName}😎`
}

let firstName = '아카이';
let lastName = '슈이치';
console.log(fullName(firstName,lastName)); //아카이 슈이치😎
let lastName1 = '아무로';
let firstName1 = '토오루';
let fullName1 = `${lastName1} ${firstName1}` ;
console.log(fullName1); //아무로 토오루
console.log(fullName(firstName1,lastName1)); //토오루 아모루😎

let lastName2 = '에도가와';
let firstName2 = '코난';
let fullName2 = `${lastName2} ${firstName2}` ;
console.log(fullName2); //에도가와 코난
console.log(fullName(firstName2,lastName2));// 코난 에도가와 😎

/*
    함수를 사용하면 코드의 중복을 막을 수 있다. 
*/