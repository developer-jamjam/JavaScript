//문자열 타입 ("",'',`` 사용하면 된다.)

let string = "안녕";
let str = `앗뇽`;
console.log(string,str); //안녕 앗뇽
str = "'안녕!'";
console.log(str); // '안녕!'
str = '"안녕!!"';
console.log(str); // "안녕!!" 

//특수문자 출력 !
let testStr = '안녕!\n사공사야!';
console.log(testStr); 
/* 
    안녕
    사공사야!
*/
testStr = '안녕!\n사공사야!\t\t내 이름은\\ \u09AC';
console.log(testStr);
/* 
    안녕
    사공사야!       내 이름은\ ব
    \n 줄바꿈
    \t tab
    \\백슬러시 표시
    \u 유니코드 작성
*/

//템플릿 리터럴(Template Literal) ``
let id = '사공사';
let greetings = "'안녕!," + id + "🎈\n즐거운 하루 보내요!'"
console.log(greetings);
/*
    '안녕!,사공사🎈
    즐거운 하루 보내요!'
*/
greetings = `'안녕, ${id} 🎇
    즐거운 하루 보내요'`
console.log(greetings);

/*
    '안녕, 사공사 🎇
    즐거운 하루 보내요'
*/

// MDN String : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
// 이스케이프 표현도 같이 한번 더 봐두기