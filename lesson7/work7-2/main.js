// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, engineCar){
    this.Model = model;
    this.Producer = producer;
    this.Year = year;
    this.maxSpeed = maxSpeed;
    this.engineCar = engineCar;
    this.drive = function (){
        console.log('Швидкість ' + `${maxSpeed}` + ' км/год');
    };

    this.info = function (){
        for (const key in this){
            if(typeof this[key] !== 'function'){
                console.log(`${[key]} : ${this[key]}`)
            }
        }
    }

    this.increaseMaxSpeed = function (newSpeed){
        console.log(this.maxSpeed += newSpeed)
    };

    this.changeYear = function (newYear){
        console.log(this.Year = newYear)
    }

    this.addDriver = function (driver){
        console.log(this.driver = driver);
    }
}
let car = new Car('Mustang','Ford', 2022, 267, 4.6);
car.drive();
car.info();
car.increaseMaxSpeed(50);
car.changeYear(2020);
car.addDriver({id:1, name:'Vin Diesel',age:56, LicenseDriver: false});
console.log(car)


console.log('========================================')
class Car2 {
    constructor(model, producer, year, maxSpeed, engineCar) {
        this.Model = model;
        this.Producer = producer;
        this.Year = year;
        this.maxSpeed = maxSpeed;
        this.engineCar = engineCar;
    }
    drive(){
        console.log('Максимальна швидкість ' + `${this.maxSpeed}` + ' км/год');
    }
    info(){
        for(const key in this){
            if(typeof this[key] !== 'function'){
                console.log(`${[key]} : ${this[key]}`);
            }
        }
    }
    increaseMaxSpeed(newSpeed){
        console.log(this.maxSpeed += newSpeed);
    }
    changeYear(newYear){
        console.log(this.Year = newYear);
    }
    addDriver(driver){
        console.log(this.driver =driver);
    }
}
let car2 = new Car2('A6 S-line', 'Audi', 2014, 250, 2.8);
car2.drive();
car2.info();
car2.increaseMaxSpeed(100);
car2.changeYear(2018);
car2.addDriver({age:20, name:'Vagovod', license: true});
console.log(car2);