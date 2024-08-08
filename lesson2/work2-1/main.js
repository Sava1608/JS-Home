//Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль--------
let arr
arr=[
    [10, 20, 30, 40, true, 'string', -40, -30, -20, -10]
]

console.log(arr)
console.log(arr[0][0])
console.log(arr[0][1])
console.log(arr[0][2])
console.log(arr[0][3])
console.log(arr[0][4])
console.log(arr[0][5])
console.log(arr[0][6])
console.log(arr[0][7])
console.log(arr[0][8])
console.log(arr[0][9])



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1={

    title: 'IT-1',
    pageCount: 175,
    genre: "horrors"

}
console.log(book1)

let book2={

    genre: "Non-fiction",
    title: 'Interstellar',
    pageCount: 200

}
console.log(book2)

let book3={

    pageCount: 150,
    genre: "Biography, Autobiography",
    title: 'The Wolf of Wall Street'
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//Я взяв книжки з минулого завдання, міг взяти інші але я хотів описати свої улюблені книги

let books=[
    {title: 'The Wolf of Wall Street', pageCount: 150, genre: "Biography, Autobiography", authors:[name='Jordan Belfort',age=61]},
    {title: 'Interstellar', pageCount: 200, genre: "Non-fiction", authors:[name= "Kip Thorne",age=83]},
    {title: 'IT-1', pageCount: 175, genre:"horrors",authors:[name="Stephen King",age=76]}
]
console.log(books)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name:"Vasya", username:'MegaDeveloper', password: 'qwerty'},
    {name:"Sava", username:'Developer', password: 'mypassword'},
    {name:"Oleg", username:'UltraDeveloper', password: 1111},
    {name:"Yuri", username:'MiniDeveloper', password: 1337228},
    {name:"Nazar", username:'Boss', password: "dollors$$"},
    {name:"Nastya", username:'Buhalter', password: 789456123},
    {name:"Ivan", username:'Security', password: 12345678},
    {name:"Dima", username:'Agent007', password: 'JamesBond'},
    {name:"Walter", username:'White', password: 5555555},
    {name:"Kokos", username:'Palma', password: 100500},
]

console.log(users)
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)