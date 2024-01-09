const candy = {
    name: 'candy',
    display: function() { //key = display, value = 함수
        console.log(`${this.name}: '🍭'`) // 객체안에서 자기 자신의 속성에 접근할때는 this를 붙여주어야 한다.
    },
};
// 서로 연관있는 속성과 행동을 묶어둔 것 = 객체

candy.display(); //candy 안에 있는 display 호출 , 결과 => candy: '🍭'
//객체는 서로 연관된 정보와 함수들을 묶어서관리 할 수 있다.