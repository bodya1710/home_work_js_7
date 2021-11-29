//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class Client{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let arr = [];
// let client1 = new Client(1, 'Вася', 'Пупкін', 'rtrt@.gmail.com', 672595294, 3);
// let client2 = new Client(2, 'Петро', 'Шрупкін', 'svvfv@.gmail.com', 673456789, 5);
// let client3 = new Client(3, 'Іван', 'Шмуткін', 'vdfvdf@.gmail.com', 934567890, 1);
// let client4 = new Client(4, 'Степан', 'Слупкін', 'rtrt@.gmail.com', 638765432, 17);
// let client5 = new Client(5, 'Оля', 'Іванова', 'rtrt@.gmail.com', 978787876, 4);
// let client6 = new Client(6, 'Віра', 'Степанвна', 'rtrt@.gmail.com', 674532321, 9);
// let client7 = new Client(7, 'Надя', 'Бережна', 'rtrt@.gmail.com', 934587654, 1);
// let client8 = new Client(8, 'Люба', 'Шлонтова', 'rtrt@.gmail.com', 674534345, 11);
// let client9 = new Client(9, 'Олег', 'Пікова', 'rtrt@.gmail.com', 674566543, 6);
// let client10 = new Client(10, 'Богдан', 'Рандомна', 'rtrt@.gmail.com', 673232321, 7);
// arr.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// console.log(arr);
// arr.sort((a, b) => a.order - b.order);
// console.log(arr);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// function Car(model, properties, producer, year, speed, engine) {
//     this.model = model;
//     this.properties = properties;
//     this.producer = producer;
//     this.year = year;
//     this.speed = speed;
//     this.engine = engine;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.speed}`)
//     }
//     this.info = function () {
//         console.log(`Модель авто: ${this.model} Властивості моделі: ${this.properties} Виробник: ${this.producer} Рік випуску: ${this.year} Максимальна швидкусь: ${this.speed} Обєм мотору: ${this.engine}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.speed = this.speed + newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.drive = driver
//     }
// }
// let car1 = new Car('lanos', 'седан','заз', 2004, 220, 1.6);
// car1.drive();
// car1.info();
// console.log(car1.speed);
// car1.increaseMaxSpeed(20);
// console.log(car1.speed);
// console.log(car1.year);
// car1.changeYear(2008);
// console.log(car1.year);
// car1.addDriver({
//     name: 'Іван',
//     year: 31
// });
// console.log(car1.drive);
// console.log(car1);

//- (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//     -- info () - яка виводить всю інформацію про автомобіль
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class Car{
//     constructor(model, properties, producer, year, speed, engine) {
//         this.model = model;
//         this.properties = properties;
//         this.producer = producer;
//         this.year = year;
//         this.speed = speed;
//         this.engine = engine;
//     }
//         drive () {
//              console.log(`їдемо зі швидкістю ${this.speed}`)
//         }
//         info () {
//              console.log(`Модель авто: ${this.model} Властивості моделі: ${this.properties} Виробник: ${this.producer} Рік випуску: ${this.year} Максимальна швидкусь: ${this.speed} Обєм мотору: ${this.engine}`)
//          }
//         increaseMaxSpeed (newSpeed) {
//            this.speed = this.speed + newSpeed
//          }
//         changeYear (newValue) {
//             this.year = newValue
//          }
//         addDriver (driver) {
//              this.drive = driver
//          }
// }
// let car1 = new Car('opel', 'седан', 'opel', 2010, 240, 2.0);
// car1.drive();
// car1.info();
// car1.increaseMaxSpeed(60);
// console.log(car1.speed);
// car1.changeYear(2011);
// console.log(car1.year);
// car1.addDriver({
//     name: 'Petro',
//     age: 23
// });

//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити 10 попелюшок , покласти їх в масив.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let girl1 = new Cinderella('Оля', 24, 35);
// let girl2 = new Cinderella('Оленка', 26, 33);
// let girl3 = new Cinderella('Іванка', 21, 32);
// let girl4 = new Cinderella('Наталя', 32, 41);
// let girl5 = new Cinderella('Віра', 19, 32);
// let girl6 = new Cinderella('Надя', 33, 40);
// let girl7 = new Cinderella('Діана', 20, 31);
// let girl8 = new Cinderella('Христина', 23, 36);
// let girl9 = new Cinderella('Соломія', 25, 38);
// let girl10 = new Cinderella('Вероніка', 36, 42);
// let arr = [];
// arr.push(girl1, girl2, girl3, girl4, girl5, girl6, girl7, girl8, girl9, girl10);
// class Prince {
//     constructor(name, age, shoes) {
//         this.name = name;
//         this.age = age;
//         this.shoes = shoes;
//     }
// }
// let prince = new Prince('Петро', 58, 42)
// let newSinderela
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].footSize === prince.shoes){
//         newSinderela = arr[i];
//     }
// }
// console.log(newSinderela);
// let newSinderela2 = arr.find(item => item.footSize === prince.shoes);
// console.log(newSinderela2);