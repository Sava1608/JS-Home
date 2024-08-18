// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strings1 = ['hello world'];
let strings2 = ['lorem ipsum'];
let strings3 = ['javascript is cool'];
strings1.forEach(string => console.log(string.length));
strings2.forEach(string => console.log(string.length));
strings3.forEach(string => console.log(string.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let upperCase1 = 'hello world';
console.log(upperCase1.toUpperCase());
let upperCase2 = 'lorem ipsum';
console.log(upperCase2.toUpperCase());
let upperCase3 = 'javascript is cool';
console.log(upperCase3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let lowerCase1 = 'HELLO WORLD';
console.log(lowerCase1.toLowerCase());
let lowerCase2 = 'LOREM IPSUM';
console.log(lowerCase2.toLowerCase());
let lowerCase3 = 'JAVASCRIPT IS COOL'
console.log(lowerCase3.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.substring(str.indexOf(' ',0), str.indexOf(' ',7)))