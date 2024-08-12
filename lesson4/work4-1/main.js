// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function area(a,b){
    return a * b;

}
let S = area(5,6)
console.log(S)


// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaRadius(r){
    const PI = 3.14;
    return PI * ( r * r );

}

let radius = areaRadius(5);
console.log(radius)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder(r,h){
    const PI = 3.14;
    return (2 * PI) * (r * r) + (2 * PI) * (r * h);
}

let cylinder = areaCylinder(5,15);
console.log(cylinder)