/*
    변수의 이름을 짓는 방법 (Naming)
    - 저장된 값을 잘 나타낼 수 있는 의미있는 이름으로 짓는다 (구체적일 수록 좋다)
    - 변수관련 MDN https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Variables
    - 변수명으로 사용 불가능한 예약어 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

    * 변수 규칙!
    - 라틴문자(0-9,a-z,A-Z), _
    - 대소문자를 구분한다.
    - camelCase 추천 (ex. likeThis) ✅
    - 한국어 ❌
    - 예약어 ❌
    - 숫자로 시작 ❌
    - 특수문자 ❌(_, $ 두가지 제외)
    - 이모지 ❌
    - 여러개의 변수를 1,2,3 숫자로 구분 ❌ => 최대한 의미있게, 구체적인 이름으로 작성
*/

let black;
let blackCompany; //camelCase

//나쁜예제 💥(변수의 이름만 가지고 아무것도 알 수 없는 것, 의미없는 연속성 변수명 )
let number = 20; 

let audio1;
let audio2;
let newBlack;
let oldBlack;

//좋은예제 ✨ 
let myAge = 20;

let backgroundAudio;
let windAudio;

// 🎇꿀팁

let audioBackground;
let audioWind;
// 무엇인지를 먼저 나타내고 구체적인것을 뒤에 두면 차후 검색시 유용하게 할 수 있다. 
// 위치를 일정하게 ! 