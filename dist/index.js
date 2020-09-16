"use strict";
// interface Human {
//     name: string,
//     age: number,
//     gender: string
// }
// // interface는  js 로 컴파일 되지 않는다.
Object.defineProperty(exports, "__esModule", { value: true });
// 인터페이스 대신 class 사용
class Human {
    // 만약 private 을 사용하면 Human 내부에서만 호출 가능해서 지금과 같은 상황에서는 에러가 뜰것
    // 이런식으로 속성을 보호 할 수 있다.
    // 생성자 함수, 클래스가 시작할때마다 호출
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const James = new Human('James', 43, 'male');
// const person = {
//     name: 'James',
//     age: 43,
//     gender: 'male',
// }
const sayHi = (person) => {
    // console.log(`Hello ${name}, you are ${age} and ${gender}`);
    // void ->  빈 공간
    return `Hello ${person.name}, you are ${person.age} and ${person.gender}!`;
};
console.log(sayHi(James));
// type script rule
//# sourceMappingURL=index.js.map