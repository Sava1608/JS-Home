// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, sizeFoot){
    this.name = name;
    this.age = age;
    this.sizeFoot = sizeFoot;
}
let cinderellas = [
    new Cinderella('Cinderella 1', 20,  32 ),
    new Cinderella('Cinderella 2', 22,  35 ),
    new Cinderella('Cinderella 3', 19,  37 ),
    new Cinderella('Cinderella 4', 21,  38 ),
    new Cinderella('Cinderella 5', 18,  36 ),
    new Cinderella('Cinderella 6', 23,  35 ),
    new Cinderella('Cinderella 7', 20,  37 ),
    new Cinderella('Cinderella 8', 24,  38 ),
    new Cinderella('Cinderella 9', 19,  33 ),
    new Cinderella('Cinderella 10', 22,35 )
];
function Prince(name,age,seekSize){
    this.name = name;
    this.age = age;
    this.seekSize = seekSize;
}
let prince = new Prince('Prince', 21, 36);

let seekPrince = function (arr){
    let foundCinderella;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sizeFoot === prince.seekSize) {
            foundCinderella = arr[i];
            break;
        }
    }
    return foundCinderella;
}
console.log(seekPrince(cinderellas));