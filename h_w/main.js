//- створити конструктор,
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)

// function Constryctor(id, name) {
//     this.id = id;
//     this.name = name;
// }
// let n1 = new Constryctor(1, 'First');
//
// function Users(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [];
// let user1 = new Users(1, 'Jone', 'Klifii', 'nnsvfv@.gmail.com', 123456);
// let user2 = new Users(2, 'Adolf', 'Top', 'sfvsvs@.gmail.com', 987654);
// let user3 = new Users(3, 'Albe', 'kotre', 'nnsvfv@.gmail.com', 678965);
// let user4 = new Users(4, 'Joni', 'Pinkman', 'nnsvfv@.gmail.com', 8765432);
// let user5 = new Users(5, 'Jefer', 'Loney', 'nnsvfv@.gmail.com', 123321);
// let user6 = new Users(6, 'Piter', 'Dinle', 'nnsvfv@.gmail.com', 876678);
// let user7 = new Users(7, 'Mary', 'Feri', 'nnsvfv@.gmail.com', 345543);
// let user8 = new Users(8, 'Kel', 'Kol', 'nnsvfv@.gmail.com', 123456);
// let user9 = new Users(9, 'Gans', 'Root', 'nnsvfv@.gmail.com', 432456);
// let user10 = new Users(10, 'Helly', 'Telli', 'nnsvfv@.gmail.com', 765345);
// arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(arr);
// let arr1 =  arr.filter(item => !(item.id % 2)).sort((a, b) => a.id - b.id);
// console.log(arr1);
