// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


let num1= +prompt("Number one");
let num2= +prompt("Number two");
let maxNumber;

switch (true){
    case(num1 > num2):
        maxNumber = num1;
        console.log("Max Number: " + maxNumber)
        break;

    case(num2 > num1):
        maxNumber = num2;
        console.log("Max Number: " + maxNumber)
        break;

    case(num1 === num2):
        console.log("Numbers are equal")
}