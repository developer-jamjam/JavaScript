// Quiz!

let num = 5;

//num의 숫자가 짝수이면 '👍' 홀수라면 '👎'을 출력 하도록 
// if
// ternary 

if (num % 2 == 0) {
    console.log('👍')
} else {
    console.log('👎')
}

let result = num % 2 == 0 ? '👍':'👎';
console.log(result);