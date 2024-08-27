// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let u = [
    new User(16,'Vasya','Pupkin','vaspup@gmail.com',380680012345),
    new User(25,'Petya','Abrikosov','peyabr@gmail.com',380680054321),
    new User(31,'Ivan','Ivanov','what@gmail.com',380680022813),
    new User(49,'Sergiy','Sternenko','rusoriz@gmail.com',380680057466),
    new User(57,'Mentor','HTML','top@gmail.com',380680011111),
    new User(60,'Oleg','Boss','boss@gmail.com',380680022222),
    new User(71,'Sava','Baran','itsme@gmail.com',38068003333),
    new User(86,'Java','Script','js@gmail.com',380680010101),
    new User(98,'React','SooHard','hard@gmail.com',380680001010),
    new User(11,'Imya','Prizvyshe','ip@gmail.com',380680000000)
];
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUser = u.filter((user) => user.id % 2 - 1);
console.log(filterUser);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = u.sort((firstObj, secondObj) =>{
    return firstObj.id - secondObj.id;
})
console.log(sortUser);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id,name,surname,email,phone, order =[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let c =[
    new Client(16,'Vasya','Pupkin','vaspup@gmail.com',380680012345,['milk','tomato']),
    new Client(25,'Petya','Abrikosov','peyabr@gmail.com',380680054321,['laptop','PC','phone']),
    new Client(31,'Ivan','Ivanov','what@gmail.com',380680022813,['pyvo']),
    new Client(49,'Sergiy','Sternenko','rusoriz@gmail.com',380680057466,['drone','watherdrone','rusoriz','FPV']),
    new Client(57,'Mentor','HTML','top@gmail.com',380680011111,['HTML','JS']),
    new Client(60,'Oleg','Boss','boss@gmail.com',380680022222,['banana','kokos','cherry','potato','egg']),
    new Client(71,'Sava','Baran','itsme@gmail.com',38068003333,['youtube','google','instagram','tiktok','duolingo']),
    new Client(86,'Java','Script','js@gmail.com',380680010101,['carrot']),
    new Client(98,'React','SooHard','hard@gmail.com',380680001010,['chiken','meat']),
    new Client(11,'Imya','Prizvyshe','ip@gmail.com',380680000000,[' '])
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortC = c.sort((firstObj, secondObj) => {
    return firstObj.order.length - secondObj.order.length;
})
console.log(sortC)