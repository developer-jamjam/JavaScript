/*
    반복문 (Loop Statement)
    for(변수선언문;조건식;증감식) {
        해당하는 조건이 맞을때까지 코드블럭 실행
    }
    실행순서:
    1. 변수선언문 실행으로 변수 초기화
    2. 조건식의 값이 참일 시 코드블럭 수행
    3. 증감식을 수행
    4. 조건식이 거짓이 될 때까지 2번과 3번을 반복
*/

for(let i = 0; i < 5; i++) {
    console.log(i); 
}
/*
    i = 0 , 코드블럭 수행 0 , 증감식 수행 i = 1
    i = 1 , 코드블럭 수행 1 , 증감식 수행 i = 2
    i = 2 , 코드블럭 수행 2 , 증감식 수행 i = 3
    i = 3 , 코드블럭 수행 3 , 증감식 수행 i = 4
    i = 4 , 코드블럭 수행 4 , 증감식 수행 i = 5
    i = 5 , 조건식 거짓 멈춤 
*/

for(let i = 0; i < 5; i++) {
    for(let j = 0; j <5; j++) {
        console.log(i,j);
    }
}

/*
    i = 0 ,코드블럭 수행 i = 0, j = 0, j증감식 수행 j = 1
    i = 0 ,코드블럭 수행 i = 0, j = 1, j증감식 수행 j = 2
    i = 0 ,코드블럭 수행 i = 0, j = 2, j증감식 수행 j = 3
    i = 0 ,코드블럭 수행 i = 0, j = 3, j증감식 수행 j = 4
    i = 0 ,코드블럭 수행 i = 0, j = 4, j증감식 수행 j = 5
    i = 0 ,코드블럭 수행 j = 5, j 조건식 거짓 멈춤 , 증감식 수행 i = 1
    반복 .....
    .
    .
    .
    i = 4 ,코드블럭 수행 i = 4, j = 0, j증감식 수행 j = 1
    i = 4 ,코드블럭 수행 i = 4, j = 1, j증감식 수행 j = 2
    i = 4 ,코드블럭 수행 i = 4, j = 2, j증감식 수행 j = 3
    i = 4 ,코드블럭 수행 i = 4, j = 3, j증감식 수행 j = 4
    i = 4 ,코드블럭 수행 i = 4, j = 4, j증감식 수행 j = 5
    i = 4 ,코드블럭 수행 j = 5, j 조건식 거짓 멈춤 i 조건식 거짓 멈춤 
*/

// 무한루프 
// for(;;){
//     console.log('무한루프 절대 금지 🤩')
// }

// 반복문 제어 : continue, break;
for(let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log('i가 드디어 10이 되었다 ! 😎');
    }
    console.log(i);
}
// 0,1,2,3,4,5,6,7,8,9, i가 드디어 10이 되었다 ! 😎,10,11,12,13,14,15,16,17,18,19
for(let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log('i가 드디어 10이 되었다 ! 😎');
        break;
    }
    console.log(i);
}
// 0,1,2,3,4,5,6,7,8,9, i가 드디어 10이 되었다 ! 😎
// 반복문을 특정한 조건에 그만 둘 때 break;

for(let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log('i가 드디어 10이 되었다 ! 😎');
        continue;
    }
    console.log(i);
}
// 0,1,2,3,4,5,6,7,8,9, i가 드디어 10이 되었다 ! 😎,11,12,13,14,15,16,17,18,19
// continue 밑에 있는 코드 무시 후 다음 반복으로 넘어간다.