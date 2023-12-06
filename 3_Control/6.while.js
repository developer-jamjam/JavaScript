/*
    반복문 (Loop Statement)
    while(조건) {}
    : 조건이 false가 될 때까지 {} 코드를 반복 실행
*/

let num = 5;
while(num >= 0) {
    console.log(num);
    num--;
}// 5, 4, 3, 2, 1, 0

let isActive = false;
let i = 0;
while(isActive) {
    console.log('아직 살아있다.' , i);
    if (i === 1000) {
        break;
    }
    i++
} // isActive가 true 면 i가 1000 이 될때까지 반복 아직 살아있다. 0 ... 1000

do {console.log('do-while 아직 살아있다.', i)} while(isActive) // 아직 살아있다. 0
// do {} while(조건) 실행 후 조건 검사하므로 일단 실행 후 조건을 검사한다. 
// 조건에 관계 없이 꼭 한번은 실행되어야 한다면 do{} while(조건) 을 사용