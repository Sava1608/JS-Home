// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

function Click() {

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;

    let person = {
        name: name,
        surname: surname,
        age: age
    };

    let outputDiv = document.getElementById("output");
    outputDiv.innerText = JSON.stringify(person);
}