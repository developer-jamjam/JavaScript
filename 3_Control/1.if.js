/*
    조건문 (Conditional Statement)
    if(조건){}
    if(조건){} else {}
    if(조건1){} else if(조건2){} else {}
*/

let fruit = 'orange';
if (fruit === 'apple') {
    console.log('🍎');
    //이 안에 여러가지 코드 작성 가능
} else if(fruit === 'orange'){
    console.log('🍊');
} else {
    console.log('🍰');
}

/*
    if문은 조건이 true 일때 실행된다.
    if문안에 조건이 false 이면 해당 코드블럭은 실행되지 않는다.
    ex) if (0,false,'',null,undefined) {console.log('출력❌')}
*/