// - створити функцію яка повертає найменьше число з масиву

let numberArr =[100500, 228, 1337];
const minNumber = arr =>{
    let number = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < number) {
            number = arr[i];
        }
    }
    return number;
}
console.log(minNumber(numberArr))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrSum = [1,2,10]
const sum = array =>{
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}
console.log(sum(arrSum));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arraySwap = [11,22,33,44];
const numberSwap = (swap,index1,index2) =>{
    let i = swap[index1]
    swap[index1] = swap[index2];
    swap[index2] = i;
    return swap;
}
console.log(numberSwap(arraySwap, 0, 1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const currencyValuesArr = [
    { currency: 'USD', value: 25 },
    { currency: 'EUR', value: 42 }
];


const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }

};

let results = exchange(10000, currencyValuesArr, 'USD');
console.log(results);