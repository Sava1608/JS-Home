// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str = 'Ревуть воли як ясла повні';
let arr = str.split(' ')
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrNumber = [10,8,-7,55,987,-1011,0,1050,0];
let arrNumberString = arrNumber.map(numbers => String(numbers)) // забув чи ця функія(String) була на лекції тому найшов в гуглі документацію про цю функцію та використав її надіюсь це не помилка
console.log(arrNumberString)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.

let nums = [11,21,3];
function sortNums(numbers,direction) {
    if (direction === 'ascending') {
        return numbers.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return numbers.sort((a, b) => b - a);
    }
}
console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'));

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonth = coursesAndDurationArray.sort((firstObj, secondObj) =>{
    return secondObj.monthDuration - firstObj.monthDuration
})
console.log(sortMonth)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterMonth = coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filterMonth)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let fMap = coursesAndDurationArray.map((item, index) =>({id: index, title: item.title, monthDuration: item.monthDuration}))
console.log(fMap)