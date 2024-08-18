//     описати колоду карт (від 6 до туза без джокерів)
// // - знайти піковий туз
// // - всі шістки
// // - всі червоні карти
// // - всі буби
// // - всі трефи від 9 та більше

let arrCards =[
    {cardSuit:'spade', value: 6, color: 'black'},
    {cardSuit:'spade', value: 7, color: 'black'},
    {cardSuit:'spade', value: 8, color: 'black'},
    {cardSuit:'spade', value: 9, color: 'black'},
    {cardSuit:'spade', value: 10, color: 'black'},
    {cardSuit:'spade', value: 'ace', color: 'black'},
    {cardSuit:'spade', value: 'jack', color: 'black'},
    {cardSuit:'spade', value: 'queen', color: 'black'},
    {cardSuit:'spade', value: 'king', color: 'black'},

    {cardSuit:'clubs', value: 6, color: 'black'},
    {cardSuit:'clubs', value: 7, color: 'black'},
    {cardSuit:'clubs', value: 8, color: 'black'},
    {cardSuit:'clubs', value: 9, color: 'black'},
    {cardSuit:'clubs', value: 10, color: 'black'},
    {cardSuit:'clubs', value: 'ace', color: 'black'},
    {cardSuit:'clubs', value: 'jack', color: 'black'},
    {cardSuit:'clubs', value: 'queen', color: 'black'},
    {cardSuit:'clubs', value: 'king', color: 'black'},

    {cardSuit:'diamonds', value: 6, color: 'red'},
    {cardSuit:'diamonds', value: 7, color: 'red'},
    {cardSuit:'diamonds', value: 8, color: 'red'},
    {cardSuit:'diamonds', value: 9, color: 'red'},
    {cardSuit:'diamonds', value: 10, color: 'red'},
    {cardSuit:'diamonds', value: 'ace', color: 'red'},
    {cardSuit:'diamonds', value: 'jack', color: 'red'},
    {cardSuit:'diamonds', value: 'queen', color: 'red'},
    {cardSuit:'diamonds', value: 'king', color: 'red'},

    {cardSuit:'heart', value: 6, color: 'red'},
    {cardSuit:'heart', value: 7, color: 'red'},
    {cardSuit:'heart', value: 8, color: 'red'},
    {cardSuit:'heart', value: 9, color: 'red'},
    {cardSuit:'heart', value: 10, color: 'red'},
    {cardSuit:'heart', value: 'ace', color: 'red'},
    {cardSuit:'heart', value: 'jack', color: 'red'},
    {cardSuit:'heart', value: 'queen', color: 'red'},
    {cardSuit:'heart', value: 'king', color: 'red'}
];
// - знайти піковий туз
let spadeAce = arrCards.filter((ace) => ace.cardSuit === 'spade' && ace.value === 'ace');
console.log(spadeAce);
// - всі шістки
let allSix = arrCards.filter((six) => six.value === 6);
console.log(allSix);
// - всі червоні карти
let allRedCards = arrCards.filter((red) => red.color === 'red');
console.log(allRedCards);
// - всі буби
let allDiamondsCards = arrCards.filter((diamonds) => diamonds.cardSuit === 'diamonds')
console.log(allDiamondsCards)
// - всі трефи від 9 та більше
let allTreff = arrCards.filter((treff) => treff.cardSuit === 'clubs' && treff.color === 'black' && treff.value >= 9 +'')
console.log(allTreff)
// - Мені здається можна було і різними функціями це зроби ще собі підвчу їх, просто час піджимає)

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

let sortCard = arrCards.reduce((accumulator,card) => {
        if(card.cardSuit === 'spade'){
            accumulator[0].push(card);
        }else if(card.cardSuit === 'clubs'){
            accumulator[1].push(card);
        }else if(card.cardSuit === 'diamonds'){
            accumulator[2].push(card);
        }else if(card.cardSuit === 'heart'){
            accumulator[3].push(card);
        }
        return accumulator;
    },
    [[],[],[],[]]
)
console.log(sortCard);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


let modulesSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(modulesSass)
let modulesDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(modulesDocker)