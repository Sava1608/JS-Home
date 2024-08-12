// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let i = 0; i < 10; i++ ){

    document.write(`<div>"Hello" ${i}</div>`)

}



// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let i=0;
while (i<20){

    document.write(`<h1>Hello ${i}</h1>`);

    i++;
}

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for(let since of listOfItems){
    document.write(`<li>${since}</li>`)
}
document.write(`</ul>`)