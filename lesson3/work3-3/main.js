// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [

    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}

]


for (let arrtrue of users){
    if (arrtrue.status===true){
        console.log(arrtrue)
    }
}


for (let arrfalse of users){
    if (arrfalse.status===false){
        console.log(arrfalse)
    }
}


for (let age of users){
    if(age.age>=30){
        console.log(age)
    }
}