// - створити функцію яка приймає масив та виводить кожен його елемент
const arr = [1,2,3,4,5,6];

function logElements(arr) {
    for (let e of arr){
        console.log(e);
    }
}
logElements(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text){
    return document.write(`<p>${text}</p>`);
}

paragraph('Hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function list(info){
    document.write(`<ul>`)
    for(let i = 0; i < 3; i++){
        document.write(`<li>${info}</li>`)
    }
    document.write(`</ul>`)

}
list("Hello");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//    Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list1( info1,number){
    document.write(`<ul>`)
    for(let i = 0; i < `${number}`; i++){
        document.write(`<li>${info1}</li>`)
    }
    document.write(`</ul>`)
}
list1('Hello Okten', 5)