 //
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//              lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//          name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//  class User {
//      constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
//          this.id = id;
//          this.name = name;
//          this.username = username;
//          this.email = email;
//          this.address = {
//              street: street,
//              suite: suite,
//              city: city,
//              zipcode: zipcode,
//              geo: {
//                  lat: lat,
//                  lng: lng
//              }
//          }
//          this.phone = phone;
//          this.website = website;
//          this.company = {
//              name:  nameCompany,
//              catchPhrase: catchPhrase,
//              bs: bs
//          }
//
//      }
//
//  }
// let user1 = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
//  console.log(user1);


 //-  Створити функцію конструктор / клас  який описує об'єкт тегу
 // Поля :
 //  -назва тегу ()
 //  - опис його дій
 //  - масив з атрибутами (2-3 атрибути максимум)
 //  Кожен атрибут описати як окремий який буде містити
 //  -назву атрибуту
 //  -опис дії атрибуту
 //  інформацію брати з htmlbook.ru
 //
 //  Таким чином описати теги
 //  -a
 //  -div
 //  -h1
 //  -span
 //  -input
 //  -form
 //  -option
 //  -select
 //  Приклад результуючого об'єкту
 //    {
 //         titleOfTag: 'area',
 //         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
 //         attrs: [
 //         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
 //         {/*some props and values*/},
 //         {/*...*/},
 //         {/*...*/},
 //         ]
 //
 //    }
 // class Teg {
 //     constructor(name, action, props1 ,values1, props2, values2, props3, values3) {
 //         this.name = name;
 //         this.action = action;
 //         this.attrs = [
 //             {
 //                 props : props1,
 //                 values : values1
 //             },
 //             {
 //                 props : props2,
 //                 values : values2
 //             },
 //             {
 //                 props : props3,
 //                 values : values3
 //             },
 //
 //         ]
 //     }
 // }
 // let a = new Teg('a', 'предназначен для создания ссылок', 'rel', 'Отношения между ссылаемым и текущим документами.', 'coords', 'Устанавливает координаты активной области.', 'name', 'Устанавливает имя якоря внутри документа.');
 // let div = new Teg('div', 'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', 'align', 'Задает выравнивание содержимого тега', 'title','Добавляет всплывающую подсказку к содержимому.');
 // let h1 = new Teg('h1', 'представляет собой наиболее важный заголовок первого уровня', 'align', 'Определяет выравнивание заголовка.');
 // let span = new Teg('span', ' предназначен для определения строчных элементов документа', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.', 'id', 'Указывает имя стилевого идентификатора.','style', 'Применяется для определения стиля элемента с помощью правил CSS.');
 // let input = new Teg('input', ' является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем','alt','Альтернативный текст для кнопки с изображением.', 'max','Верхнее значение для ввода числа или даты.', 'size', 'Ширина текстового поля.');
 // let form = new Teg('form', ' устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', 'name', 'Имя формы.', 'target', 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.', 'method', 'Метод протокола HTTP');
 // let option = new Teg('option', 'определяет отдельные пункты списка, создаваемого с помощью контейнера', 'disabled', 'Заблокировать для доступа элемент списка', 'label', 'Указание метки пункта списка.', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
 // let select = new Teg('select', 'позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее', 'form', 'Связывает список с формой.', 'size', 'Количество отображаемых строк списка.', 'disable', 'Блокирует доступ и изменение элемента.');
 // console.log(form);



 //==================


 function getCardOptions(num) {

         this.key = num;
         this.balance = 100;
         this.transactionLimit = 100;
         this.historyLogs = [];
         let date = new Date();
         this.putCredits = function (m) {
             this.historyLogs.push({
                 operationType: 'Received credits',
                 credits: m,
                 operationTime: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
             })
             return this.balance += m
         }
         this.takeCredits = function (m) {
             this.historyLogs.push({
                 operationType: 'Withdrawal of credits',
                 credits: m,
                 operationTime: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
             })
             if (m < this.balance && m < this.transactionLimit){
                 return this.balance -= m
             }else{
                 console.error('Поповніть карту або збільшіть ліміт')
                 return false
             }
         }
         this.setTransactionLimit = function (limit) {
             this.historyLogs.push({
                 operationType: 'Transaction limit change',
                 credits: limit,
                 operationTime: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
             })
             if(typeof limit === 'number'){
                 this.transactionLimit = limit
             }else {
                 console.error('Ведіть число')
             }
         }
         this.transferCredits =function (m, card) {
             let tax = m * 0.005;
             let sum  = m + tax
             if (this.takeCredits(sum)){
                 card.balance += m
                 this.balance -= tax
                 card.historyLogs.push({
                     operationType: 'Received credit',
                     credits: m,
                     operationTime: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
                 })
             }
         }

     }

class UserAccound{
    constructor(user) {
        this.name = user;
        this.cards = [];
    }
    addCard(n){
        if (this.cards.length >= 3){
            alert('Увас вже є 3 карти');
        } else {
            this.cards.push(new getCardOptions(n));
        }

    }
    getCardByKey(n){
        if (!(n >+3)){
            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].key === n){
                    return this.cards[i];
                }
            }
        }

    }
}
let user1 = new UserAccound('bob');
user1.addCard(1);
user1.addCard(2);
user1.addCard(3);
let card1 = user1.getCardByKey(1);
let card2 = user1.getCardByKey(2);
let card3 = user1.getCardByKey(3);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
 console.log(card1);
 console.log(card2);




