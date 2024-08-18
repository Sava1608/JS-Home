//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const area = (a,b) => a * b;
console.log(area(7,8))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14
const areaR = (r) => PI * (r*r);
console.log(areaR(8))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaC = (r,h) => (2 * PI) * (r * r) + (2 * PI) * (r * h);
console.log(areaC(9,5))

// - створити функцію яка приймає масив та виводить кожен його елемент

const arrNumber = [1,2,3,4,5,6,7,8,9];
const array = e =>{
    for (let e of arrNumber){
        console.log(e);
    }
    return e;
}
array()

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraph = (text) => document.write(`<p>${text}</p>`);
paragraph('Hello Okten');