// return 을 명시적으로 하지 않을 시 자동으로 undefined이 반환 된다.

function add(a,b){
    return a + b;
}

const result = add(1, 2);

console.log(result);

function print(text) {
    console.log(text);
}

print('print') // console.log(text) 가 실행 되어 전해진 인자값 'print'가 console에 출력된다.

/*
    return을 함수 중간에 하게 되면 함수가 종료된다.
    사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료한다.
*/
function numprint(num) {
    if (num <0) { 
        return;
    }
    console.log(num);
}

numprint(-1); // 함수호출 조건이 맞지 않아 return 됨.. 
numprint(2); // 함수호출 조건에 부합 console에 인자로 전해진 값 2 출력