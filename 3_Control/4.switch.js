/*
    조건문 (Conditional Statement) 
    switch
    : 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우 사용
    : MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
*/
let day = 0; // 0: 월요일, 1:화요일 .... 6:일요일 
let dayName;

// if (day === 0) {
//     dayName = '월요일'
// } else if(day === '1') {
//     dayName = '화요일'
// } else if(day === '2') {
//     dayName = '수요일'
// } else if(day === '3') {
//     dayName = '목요일'
// } else if(day === '4') {
//     dayName = '금요일'
// } else if(day === '5') {
//     dayName = '토요일'
// } else if(day === '6') {
//     dayName = '일요일'
// }

switch(day) { // switch(조건) {case별로 나누어 동작수행}
    case 0:
        dayName = '월요일';
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
    default: //아무것도 해당하지 않을때 동작
        dayName = '해당 요일이 없다.';
} //break 미사용 시 : 계속 계속 case 별로 넘어가서 제일마지막에 있는 것이 실행되므로 꼭 break 걸어줄 것.
console.log(dayName); // 월요일


let condition = 'good'; // okay,good => 좋음 , bad => 나쁨
let conditionState;
switch(condition) {
    case 'okay':
    case 'good': 
        conditionState = '좋음';
        break;
    case 'bad':
        conditionState = '나쁨';
        break;
}
console.log(conditionState);