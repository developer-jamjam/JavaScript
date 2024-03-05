/*
    static 정적프로퍼티, 메소드
    class 레벨의 프로퍼티와 메소드 만들때 사용
    class 안에 static을 붙이고 작성하지 않으면 인스턴스 레벨 
*/

class Desert {
    // 생성자 : new 키워드로 객체를 호출할 때 생성되는 함수 
    static MAX_DESERT = 5; // 클래스 레벨의 프로퍼티
    constructor(name,emoji) {
        this.name = name; //인스턴스 레벨의 프로퍼티
        this.emoji = emoji; //인스턴스 레벨의 프로퍼티
    }
    //인스턴스 레벨의 메소드
    display = () => { //인스턴스 레벨의 메소드
        console.log(`${this.name} : ${this.emoji}`); 
    }
    // 클래스 레벨의 메소드
    static makeDesert() {
        // 클래스 레벨의 메소드 에서는 주어진 데이터가 채워져 있지 않은 템플릿 이기 때문에 , this를 참조할 수 없다.
        return new Desert('donut','🍩');
    }
}

console.log(Desert.emoji); //undefined
// Desert.display(); // error 발생 : Desert.display is not a function

// 인스턴스 레벨의 프로퍼티와 메소드는 꼭 생성된 인스턴스를 통해서 접근하고 호출해야 한다. 

const Donut = Desert.makeDesert();
console.log(Donut); // Desert { display: [Function: display], name: 'donut', emoji: '🍩' }
// static으로 작성한 프로퍼티와 메소드는 인스턴스 레벨에선 보이지 않는다. 
console.log(Desert.MAX_DESERT); // 5 

