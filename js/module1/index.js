'use strict';
// var userAge=18;
// console.log('userage:', userAge);

// let x;
// console.log(x);

// var a=5;
// let guest;
// let name = 'Mango';
// name = guest;
// console.log('guest');

// let hotel = '';
// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// const requiredPlaces = prompt ('Введіть кількість місць');
// if (Number.isInteger(+requiredPlaces)&& +requiredPlaces>0){
//     if (+requiredPlaces <= sharm){
//     if (confirm('Чи хочете ви в Шарм?')){
//         alert ('запрошуємо в шарм');
//     }
//     else {
//         alert('нам очень жаль');
//     }
//     }
//   else if (+requiredPlaces <= hurgada){
//     if (confirm('Чи хочете ви в хугарда?')){
//         alert ('запрошуємо в хугарда'); 
//     }
//   }  else {
//       alert('нам очень жаль');
// }
// }
// else if (+requiredPlaces <= taba){
//     if (confirm('Чи хочете ви в taba?')){
//         alert ('запрошуємо в taba');
//     }
//   else {
//       alert('нам очень жаль');
// }
// }
// } else if (!requiredPlaces) {
//     alert('нам очень жаль')
// }



// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// let hotel = "";

// const requiredPlaces = prompt ('Введіть кількість місць');
// if (Number.isInteger(+requiredPlaces)&& +requiredPlaces>0){
//     if (+requiredPlaces <= sharm){
//     hotel = "Sharm";
//     }
// else if (+requiredPlaces <= hurgada){
//     hotel = "Hugarda";
//     }
//   else if (+requiredPlaces <= taba){
//     hotel = "Taba";
//     }
//  if (hotel && confirm(`хочете залишитиcь в ${hotel}?`)) {
//      alert (`welcome to ${hotel}`);
//  } else if (!hotel) {
//      alert('no mesT');
//  } 
//  else {
//     alert('нам очень жаль');
// } 
// }
// else if (!requiredPlaces) {
//     alert('нам очень жаль');
// }

const arr =[];
const clients =["Manog", "Poly", "Appel"];
console.log(clients);
clients[0]='chelsy';
console.log(clients[0]);


'use strict'
// JS чутливий до регістру
//
//
// var year = 2018;
// let month = "November";
// const date = 27;
// let number = 10;
// // let Number = 50;
// let numBer = 100;

// let summ = number * Number + numBer;
// console.log('summ', summ);
// alert('summ', summ);
// const answer1 = confirm(`Are you ready ${year}?`);
// const answer2 = prompt('Are you ready?');

// console.log('answer1', answer1);
// console.log('answer2', answer2);


// console.log(typeof number);
// console.log(typeof month);
// console.log(typeof month === typeof number);
//
// console.log(month.length);
// console.log(month.indexOf('N'));
// console.log(month.indexOf('w'));
// console.log(month.includes('Now'));
// console.log(month.includes('now'));
//
// const fontSize = '5.5px';
// const usersLength = 20;
//
// console.log('преобразование в целое число', Number.parseInt(fontSize) ); // 5
// console.log('преоразование в число с дробью', Number.parseFloat(fontSize) ); // 5.5
//
// console.log('Проверка на число', Number.isNaN(Number(fontSize)));
// console.log('Проверка на число', Number.isNaN(usersLength));
//
// const a = 0.3;
// const b = 0.5;
//
// console.log('a + b', a + b);
// console.log('a + b', (a + b).toFixed(10));


// const text = 'Преобразование в целое число';
//
// console.log('Преобразование к нижнему регистру', text.toLowerCase());
// console.log('Преобразование к верхнему регистру', text.toUpperCase());
//
//
// const name = 'John';
// const surname = 'Connor';
// const years = 40;
// const height = 180;
//
// console.log('Message:',
//   `Hello ${name} ${surname}. I\`m ${years} and ${height + 2 + 'sm'}.`
// );
//
// console.log('Message:', 'Hello ' + name + ' ' + surname + "'\ I'm " + years + " and " +
//   (height + 2) + ' sm.'
// );
// const text = 'akak';
//
// const num = 20;
// const result = text.length < 30 && text.length > 5;
// console.log(result); // true
//
// const obj = {
//   id: 'asdasd',
//   name: 'Alex',
//   role: 'admin',
//   age: 30,
// };
// const resultObj = obj.role === 'admin' || obj['role'] === 'moderator';
//
// console.log(resultObj);
//
// if(resultObj) {
//   const name = 'Bob';
// }
//
// if(resultObj !== true) {
//   var varName = 'Bob';
// }
//
// const resultPrompt = prompt('Введите значение');
//
// if (resultPrompt !== 'admin' && obj.age) {
//   alert('нет прав');
// } else {
//   alert('добро пожалывать');
// };
//
// console.log('name', name);
// // console.log(surname);
// console.log('varName', varName);
//
// // const surname = 'Dilslsl';
//
//
// let season;
// const monthName = "January";
//
// if (monthName === "June" || monthName === "July" || monthName === "August") {
//   season = "summer";
// } else if (monthName === "May") {
//   season = "spring";
// } else if (monthName === "September") {
//   season = "autumn";
// } else {
//   season = "winter";
// }
//
//
//
// let value = 0;
//
// value += 50;
// value += 50;
// value -= 30;
//
//
//
// console.log('value', value);
//
//
//


/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/

// let guest;
// let name;
//
// name = 'Mango';
// guest = name;
// console.log(guest);
//
//

/*
  Есть три переменные содержащие день, месяц, и год.
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx

  Найдите ошибку в записи значания для переменной date,
  результат будет выведен в консоль и равен комментарию
  напротив console.log()
*/
//
// const day = 2;
// const month = 10;
// const year = 2017;
//
// const date =  '0' + day + "\\" + month + "\\" + year;
//
// console.log(date); // 02\10\2017


/*
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/
// const name = prompt('Введите имя:');
// alert (name);


/*
  Есть три переменные name, date и roomType, содержащие
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.

  Используя шаблонные строки необходимо записать
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".

  Найти ошибки в коде и исправить их, при верном решении
  в консоль будет выведена строка идентичная той что
  напротив console.log
*/

// const name = 'Mango';
// const date = '14/08/2031';
// const roomType = 'люкс';
//
// const message = `${name} прибывает на отдых ${date} в ${roomType}`;
//
// console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.
//

/*
  Есть 3 переменные в которых хранится  размер составляющих
  блочной модели в формате Npx, где N это целое число.

  Используя эти переменные, запишите в переменную totalWidth
  общую ширину блока в формате Npx.

  К примеру "сумма" '20px' и '30px' будет равна '50px'.

  Если все верно, то в консоли будет выведена строка '125px'
*/

// const padding = "20px";
// const border = "5px";
// const contentWidth = "100px";
//
// let totalWidth;
//
// console.log(totalWidth); // '125px'


/*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Какой сейчас год?'
  - Если посетитель вводит 2018 - показывать alert со строкой 'Все верно!'
  - Если что-то другое — показывать alert 'Но ведь на вдоре 2018!'

  PS: используйте конструкцию if..else.
*/

// const year = prompt ('Який зараз рік?');
// if (
//   year === '2019'
// ) {alert ('Все вірно')}
// else
// {
//   alert ('Але на дворі 2019р');
// }





/*
  Напишите скрипт который:

  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'

  PS: используйте конструкцию if..else.
*/

// const value = prompt('Введите произвольное целое число');
// if (value === null) {
//   alert ('Приходите еще!')
// }
//   else if (Number.isInteger(Number(value))) {
//   alert('Спасибо!')
// }
// else {
//   alert('Необходимо было ввести целое число!')
// }


/*
  В переменную num записывается случайное число.

  Используя ветвления запишите в переменную type строку:
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/
// const num = Number.parseInt(Math.random() * 100);
//
// let type;
//
//
// console.log('num',num);
//
// switch (num % 2) {
//   case 0:
//     type = "even";
//     break;
//   default:
//     type = "odd";
// }
//
// console.log(`${num} is ${type}`);

/*
  Время состоит из:
    часов(hours)
    минут (minutes)
    секунд(seconds).

  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45

  Составляющие времени не гарантированно состоят из 2-х цифр!

  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds
  и добавлят впереди 0 если необходимо.
*/

// let hours = 7;
// let minutes = 3;
// let seconds = 42;
//
// const time =  `${hours < 10 ?
//   '0' + hours : hours}:${minutes < 10 ?
//   '0' + minutes : minutes}:${seconds <10 ?
//   '0' + seconds : seconds}`;
//
//
//
// console.log('Time is: ', time);


/*
  Создайте срипт поиска отелей, где пользователь
  с помощью prompt должен ввести число от 1 до 5

  Проверить что пользователь ввел именно цифру от 1 до 5

  Если пользователь нажал Cancel, то вывести
  alert с текстом 'очень жаль, приходите еще!'

  Если было введено что либо кроме чисел 1-5,
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'

  Если же пользовател ввел валидное число,
  в зависимости от числа, используя switch,
  вывести alert с одной из строк:

    1 - "Каталог хостелов"
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
const promptValue = prompt ("Type number from 1-5");

if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <= 5) ) {
  switch(+promptValue) {
    case 1 :
    alert ("Каталог хостелов")
    break;
    case 2 :
      alert ("Каталог бюджетных отелей")
      break;
    case 3 :
      alert ("Каталог отелей ***")
      break;
    case 4 :
      alert ("Каталог отелей ****")
      break;
    case 5 :
      alert ("Каталог лучших отелей")
      break;
  }
} else if(promptValue === null) {
  alert ("очень жаль, приходите еще!")

} else {
  alert ("Неверный ввод, возможные варианты 1-5!")
}