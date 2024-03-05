/* 
    접근제어자 - 캡슐화 
    private(#), public(기본), protected 
    class 내부에서만 사용하는 field, 함수, 메소드가 있을 시 #을 붙여서 사용하면 외부에서 사용하지 못하도록 제어가 가능하다.
*/

class Desert {
    #type = '디저트'; //인스턴스를 만들때 초기화가 되어야 할 경우 생성자 밖에서 윗부분에 기재한다.
    //constructor에서 주어지는 데이터 생략가능 (name, emoji)
    #name;
    #emoji; 
    constructor(name,emoji) {
        this.#name = name;
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.#name} : ${this.#emoji}`);
    }
}

const chocolate = new Desert('chocolate', '🍫');
console.log(chocolate) 
/*
    # 사용하기 전 console.log 
    Desert { // Field
        name: 'chocolate', //외부에서 전달 받은 데이터
        emoji: '🍫', // 외부에서 전달 받은 데이터
        type: '디저트', //초기화 해둔 디저트로 표기 
        display: [Function: display]
    }

    #사용 후 console.log
    Desert { display: [Function: display] }
*/

//chocolate.#name = '초코오'; // Private field '#name' must be declared in an enclosing class
