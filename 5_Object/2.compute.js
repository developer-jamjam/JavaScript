const obj = {
    name: 'jin',
    age: 35,
};
//코딩하는 시점에, 정적으로 접근이 확정될 때 
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용! 
function getValue(obj, key) {
    return obj[key];
}

console.log(getValue(obj, 'name')); //jin

function addKey(obj,key,value) {
    obj[key] = value;
}

addKey(obj,'job','blackCompany staff');
console.log(obj);

function deleteKey(obj,key) {
    delete obj[key];
}

/*
    MDN - https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects
*/