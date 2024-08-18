// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulList = (text) =>{
    for(let i = 0; i < 3; i++){
        document.write(`<ul><li>${text}</li></ul>`)
    }
}
ulList('Kokos');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом

const ulListNumber = (number,info) =>{
    for(let i = 0; i < `${number}`; i++){
        document.write(`<ul><li>${info}</li></ul>`);
    }
}
ulListNumber(7,'Vasya');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayElements=[721, 'Abrikos', true];

const array = arr =>{
    for (let i = 0; i < arr.length; i++){
        document.write(`<li>${arr[i]}</li>`)
    }
}
array(arrayElements)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let object = [{id:1337, name:'Coca-Cola', age: 1000}]

const cocaCola = obj =>{

    for (let o of obj){
        document.write(`<div>   <p>${o.id},</p>
                                <p>${o.name},</p> 
                                <p>${o.age}</p>
                       </div>`)
    }
    return document;
}
cocaCola(object)