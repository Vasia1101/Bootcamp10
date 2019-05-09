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

// const arr =[];
// const clients =["Manog", "Poly", "Appel"];
// console.log(clients);
// clients[0]='chelsy';
// console.log(clients[0]);


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
// const promptValue = prompt ("Type number from 1-5");

// if (Number.isInteger(+promptValue) && (promptValue > 0 && promptValue <= 5) ) {
//   switch(+promptValue) {
//     case 1 :
//     alert ("Каталог хостелов")
//     break;
//     case 2 :
//       alert ("Каталог бюджетных отелей")
//       break;
//     case 3 :
//       alert ("Каталог отелей ***")
//       break;
//     case 4 :
//       alert ("Каталог отелей ****")
//       break;
//     case 5 :
//       alert ("Каталог лучших отелей")
//       break;
//   }
// } else if(promptValue === null) {
//   alert ("очень жаль, приходите еще!")

// } else {
//   alert ("Неверный ввод, возможные варианты 1-5!")
// }

// let firstNumber;
// const secondNumber = 15;
// firstNumber=5;
// console.log('Znacchenj',firstNumber);
// let declaredVariable;
// console.log(declaredVariable);
// // console.log(undeclaedVariable);
// let age = 20;
// let number = 5.8;
// let name = 'Mango';
// let hobby = "Codding";
// let isAuthenticated = true;
// let canMerge = false;
// let hasChildren = true;
// let appeles = null;
// null == 0;//false
// undefined == "";//false
// null == false;//false
// null == undefined;//true
// // const foo;
// const array =[1,2,3];
// // const foo = arry.foo; // свойство foo не существует, возвращается undefined
// const item = array[5]; // в массиве нет элемента 5, возвращается undefined
// const value = (function(){})(); // возвращает undefined
// function isUndefined(obj){
//   return obj === void 0;
//   }; //void нельзя переопределить, и он всегда возвращает undefined
//   'undefined' in window;
//   Object.prototype.toString.call(null);//[object Null] 
//   Object.prototype.toString.call(undefined);

// let a;
// console.log(typeof a);
// let b = null;
// console.log(typeof null);
// let c = 5;
// console.log(typeof c);
// let d=5.3;
// console.log(typeof d);
// let message = "get up";
// console.log(typeof message);
// let isActive = false;
// console.log(typeof isActive);
// let isHappy = true;
// console.log(typeof isHappy);

// const isComing = confirm ('please enter something');
// console.log(isComing);
// const hotelName = prompt ('when hotel?');
// console.log(hotelName);

// const number = prompt("enter number:");
// console.log(typeof number);
// console.log(number);
// const x = 10;
// const y = 5;
// let result;

// result = x + y;
// console.log(result);

// result = x-y;
// console.log(result);

// result = x*y;
// console.log(result);

// result = x/y;
// console.log(result);

// result = x%y;
// console.log(result);
// console.log(9%4);
// console.log(13%5);

// const x = 5;
// const y = 10;
// const z = 5;
// let result;

// result = x>y;
// console.log('x>y', result);
//  result = x<y;
//  console.log('x<y', result);
//  result = x<z;
//  console.log('x<z', result);
//  result = x<=z;
//  console.log('x<=z', result);
//  result = x === y;
//  console.log('x===y', result);
//  result = x===z;
//  console.log('x===z', result);
//  result = x!==y;
//  console.log('x!==y', result);
//  result = x!==z;
//  console.log('x !==z',  result);

//  console.log(0b001);
//  console.log(0b010);
// console.log(0b011);
// console.log(0b100);
// parseInt('01');
// console.log('r');
// var ourDecimal = 5.7;

// // Only change code below this line

// Number.parseFloat(ourDecimal);
// console.log(ourDecimal);


// let valueA = '5';
// let valueAsNumber = +valueA;
// let typeOfValueAsNumber = typeof valueAsNumber;
// console.log(typeOfValueAsNumber);
// console.log(valueAsNumber);
// valueAsNumber = Number(valueA);
// typeOfValueAsNumber = typeof valueAsNumber;
// console.log(typeOfValueAsNumber);
// console.log(valueAsNumber);

// let valueB = 'random string';
// valueAsNumber = +valueB;
// typeOfValueAsNumber = typeof valueAsNumber;
// console.log(typeOfValueAsNumber);
// console.log(valueAsNumber);

// valueAsNumber = Number(valueB);
// typeOfValueAsNumber = typeof valueAsNumber;
// console.log(typeOfValueAsNumber);
// console.log(valueAsNumber);
// console.log( Number.perseInt('5px') );
// console.log( Number.parseInt('5px') );
// console.log( Number.parseInt('12qwe74') );
// console.log( Number.parseInt('12.46qwe79'));
// console.log( Number.parseInt('qweqwe'));

// console.log( Number.parseFloat('5px'));
// console.log( Number.parseFloat('12qwe74'));
// console.log( Number.parseFloat('12.46qwe79...'));
// console.log( Number.parseFloat('qweqwe'));
// console.log( Number.parseFloat('qweqwer12'));

// const validNumber = Number('51');//51
// console.log( Number.isNaN(validNumber));

// const invalidNumber = Number('qweqwe');//NaN
// console.log( Number.isNaN(invalidNumber));

// console.log(0.1+0.2 === 0.3);//false
// console.log(0.1 + 0.2);//0.30000000000000004
// console.log((0.1*100+0.2*100)/100 === 0.3);

// const result = 0.1+0.2;
// console.log( +result.toFixed(10));

// console.log(Math.max(1,2,3));

// console.log(Math.max(1, 3, 2));
// // expected output: 3

// console.log(Math.max(-1, -3, -2));
// // expected output: -1

// var array1 = [1, 3, 2];

// console.log(Math.max(...array1));
// // expected output: 3

// const state='Mango ' + 'is' + 'happy';
// console.log(state);

// let result;
// result = 5+'5'+5;
// console.log(result);
// console.log(typeof result);

// const message = 'Welcome to Bahamas';
// console.log(message.length);
// console.log('There is nothing impossible to him who will try'.length);
// console.log(message.indexOf('to'));
// console.log(message.indexOf('hello'));
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.includes('welcome'));
// console.log(message.includes('Welcome'));
//  const name = 'Mango';
//  const age =  2;
//  const mood = 'happy';
//  const message = 'My name is ' + name + ", I'm " + age + ' years old and very ' + mood +'.';
//  console.log(message);
//  const sameMessage = `My name is${name}, I'm ${age}, years old and verry ${mood}.`
//  console.log(sameMessage);
//  console.log(`Summa chisel is ${2+2}`);

// //  let isActive = false;
// //  alert(isActive);

// //  console.log( String(false) === "false");
//  console.log( true +'text');
//  console.log('100'+ undefined);

//  let a = +'100';
//  let b = Number('100');
//  console.log(a);
 
//  console.log(b);

//  console.log(+"100text");
//  console.log(+undefined);
//  console.log(+null);
//  console.log(+true);
//  console.log(+false);
//  console.log('1' == true);
//  console.log('1' === true);

//  const a = 20;
//  const result = a < 30 && a > 10;
//  console.log(result);


// const result = a<30||a>30;
// console.log(result);

// console.log(!true);
// console.log(!false);
//  console.log(1&&2);
//  console.log(false&&true);
//  console.log(''&&"hello");

//  let season;
//  const mouthName = 'Junuary';
//  if (mouthName === 'june'){
//    season = "summer";
//  };
//  console.log(season);
//  let season = "winter";
// const monthName = "June";

// if (monthName === "June")
//   season = "summer";


// let season;
// const mouthname = 'Junuary';
// if (mouthname === 'June'){
//   season ='summer'
// } else if (mouthname === 'may' ){
//   season = "spring";
// } else {
//   season = 'winter';
// }
// let mouthName = "July";
// const season = mouthName === 'June' ? 'summer':'winter';
// console.log(season); // summer

// const mouthName = "May";
// let season;

// switch (mouthName) {
//   case "June":
//   season = "summer";
//   break;
//   case "May":
//   season = "spring";
//   break;
//   case "September":
//   season = "autum";
//   break;
//   default:
//   season = "winter";
// }
// console.log(null || "false" && "правая часть"
// );




// const inputName = prompt('Who are u?');

// const father = 'Igor';
// const mother = 'Ira';
// const child = 'Vasia';
// let guest;

// inputName === null || inputName === undefined ? alert('Good bay'):
// inputName === father.toLowerCase() || inputName === mother.toLowerCase() || inputName === child.toLowerCase() 
// ? alert('welcome') : guest = prompt("Who want to see");

// guest.includes(mother)
// ? alert('welcome') : alert('not at home');;

// function nextInLine(arr, item) {
//   // Your code here
//   return [], item;  // Change this line
// }

// // Test Setup
// var testArr = [1,2,3,4,5];

// // Display Code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine([2], 1)); // Modify this line to test
// console.log("After: " + JSON.stringify(testArr));

// ------------------------------------------------------1------------------------------------------------ ////. 
/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

//  const name = "Генератор защитного поля";
//  let price = 1000;
//  let newPrice = 2000;
//  console.log("Выбран " + name + "," + "цена за штуку", + newPrice + " кредитов");

//  --------------------------------------------------2-----------------------------------------------//

/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/

// const day = 17;
// const month = 10;
// const year = 2048;

// let date = day+"\\"+ month + "\\" + year;
// let message = `Доброе утро, cегодня ${date}, за бортом отличная погода!`;
// console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"

// --------------------------------------------------3---------------------------------------//
/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// let message = `${name}  прибывает на отдых  ${date} in ${roomType}`;
// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс

// -----------------------------------------------4-----------------------------------------//
/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
    
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/ 

// const correctPassword = 'jqueryismyjam';

// let inputUser = prompt ('Введите пароль доступа'); 
// if (inputUser === null) {
//   alert ('Ожидаю ввода пароля');
// } else if (inputUser === correctPassword) {
//   alert ('Доступ в секретный бункер разрешен!')
// } else {
//   alert ('Активирована система защиты!')
// };
// -------------------------------------------------------5-------------------------------------------//
/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = +prompt('How much you need?');
// if (ordered > total) {
//   alert ('На складе недостаточно твоаров!')
// } else if (ordered === total) {
//   alert ("Вы забираете весь товар cо склада!")
// } else {
//   alert ("Заказ оформлен, с вами свяжется менеджер")
// };

// --------------------------------------------------- 6 -----------------------------------------//
/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/ 
// const value = prompt('Введите произвольное целое число');
// if (value === null){
//   alert ('Ну и ладно, пока!');
// } else if (Number.isInteger(Number(value))){
//   alert ('Спасибо!')
// } else {
//   alert ('Необходимо было ввести целое число!');
// }
// -------------------------------------------------7--------------------------------------------------//
/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: попробуй использовать тернарный оператор
*/

// const value = Number.parseInt(Math.random() * 100);
// let type = value%2 === 0 ? 'Even' : 'Odd';
// console.log(`${value} is ${type}`);
// -----------------------------------------8---------------------------------------------------//
/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// const inputUser = prompt ('Enter your number from 1 to 5')
// if (inputUser === null) {
//   alert('Очень жаль, приходите еще!')
// } else if (inputUser > 5 || inputUser < 1) {
//   alert ('Неверный ввод, возможные варианты 1-5!')
// } else {
// switch (+inputUser) {
//   case 1: alert ("Каталог хостелов" );
//   break;
//   case 2: alert ("Каталог бюджетных отелей");
//   break;
//   case 3: alert ("Каталог отелей ***");
//   break;
//   case 4: alert ("Каталог отелей ****");
//   break;
//   case 5: alert ("Каталог лучших отелей")
//   break;
// }
// }
// ---------------------------------------------------9---------------------------------------------//
/* 
  Пользователь может оформить доставку товара к себе в страну, 
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/

// const country = 'Ямайка';
// let dostavka;
// switch (country) {
//   case "Китай": dostavka = "100 кредитов";
//   break;
//   case "Южная Америка": dostavka = '250 кредитов';
//   break;
//   case "Австралия" : dostavka = '170 кредитов';
//   break;
//   case "Индия": dostavka = '80 кредитов';
//   break;
//   case "Ямайка": dostavka = '120 крдитов';
//   break;
//   default:
//   alert("В вашей стране доставка не доступна");
// }

// console.log(`Доставка в ${country} будет стоить ${dostavka}`);
// -------------------------------------- 10 -----------------------------------//
/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
// const inputUser = prompt ('Enter your number from 1 to 5')
// if (inputUser === null) {
//   alert('Очень жаль, приходите еще!')
// } else if (inputUser > 5 || inputUser < 1) {
//   alert ('Неверный ввод, возможные варианты 1-5!')
// } else {
// switch (+inputUser) {
//   case 1: alert ("Каталог хостелов" );
//   break;
//   case 2: alert ("Каталог бюджетных отелей");
//   break;
//   case 3: alert ("Каталог отелей ***");
//   break;
//   case 4: alert ("Каталог отелей ****");
//   break;
//   case 5: alert ("Каталог лучших отелей")
//   break;
// }
// }

// ------------------------------------------------ Nadia -----------------------------------------------//
// 30) Возведите 2 в 10 степень. Результат запишите в переменную st.
// 31) Найдите квадратный корень из 245.
// 32) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// 33) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны
// 34) Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.
// 35) Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// 35A) Выведите на экран случайное целое число от 1 до 100.
// 36) Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.
// 37 ) Необходимо написать программу, где бы пользователю предлагалось ввести число  1. Если пользователь ввёл число 1, программа должна вывести сообщение: "Вы ввели число 1". Если пользователь ввёл другое число, программа должна вывести такое сообщение: "Вы ввели число не равное 1"
// 38 ) Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.
// 41) Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
// 42) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// 44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// 45)  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// 46)  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// 47) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// 48)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// --------------------30 ---------------------//
const st = Math.pow(2,10);
console.log (st);
// --------------31 -----------------------//
const stp = Math.sqrt(245);
console.log(stp);
// --------------------- 32 -------------------- //
let ste = Math.sqrt(379);
ste = ste.toFixed(0);
// ste = ste.toFixed(1);
// ste = ste.toFixed(10);
console.log(ste);
// ----------------------- 33 ------------------------//
let ster = Math.sqrt(587);
// ster = Math.floor(ster); //24
ster = Math.ceil(ster); //25
console.log(ster);
// -------------------- 34 -----------------------------//
// let a = prompt ('Enter number');
// let b = prompt('Enter another number');
// let c = a%b;
//  if (a%b === 0) {
//    alert (`Делится ${c}`);
//  } else {
//    alert (`Делится с остатком ${c}`);
//  }
//  ----------------------- 35 -----------------------------------//
console.log (Math.max(4, -2, 5, 19, -130, 0, 10));
console.log (Math.min(4, -2, 5, 19, -130, 0, 10));
//  --------------------------- 35A ------------------------------//
console.log (parseInt(Math.random()*100));
// ----------------------------- 36 -----------------------------//
// let x = prompt('Enter number 1');
// if ( x == 1) {
//   alert ("Вы ввели число 1");
// } else {
//   alert ("Вы ввели число не равное 1");
// }
// ------------------------------- 37 ---------------------------//
// Необходимо написать программу, где бы пользователю предлагалось ввести число на выбор: 1, 2 или 3, 
// а программа должна сказать, какое число ввёл пользователь: 1, 2, или 3.
// let x = prompt( 'Enter number 1,2,3')
// console.log (x);
//  ----------------------------------- 38 --------------------------//
// Пользователь вводит число. Проверить число на четное или не четное и вывести в консоль результат проверки.
// let k = prompt ('Enter your number')
// if (k%2 === 0) {
//   alert ("четное");
// } else {
//   alert ('не четное');
// };
//  ------------------------------- 41 ----------------------------------------//

// Найдите суму всех товаров в корзине магазина без мелочи, с мелочью
let sumProduct = 10.35
// sumProduct = sumProduct.toFixed(2);// с мелочью
sumProduct = sumProduct.toFixed(0); // без мелочи
console.log(sumProduct);

// --------------------------------------- 42 ----------------------------------//
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. 
// Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = prompt ('Enter number from 1 to 4');
// let result;
//   switch (+num) {
//     case 1: result = 'зима';
//     break;
//     case 2: result = 'весна';
//     break;
//     case 3: result = 'lito';
//     break;
//     case 4: result = 'auttum';
//     break;
//     default: alert('enter from 1 to 4');

//  }
//  console.log(result);
// -----------------------------------43--------------------------
// 43) Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 1;
// if (a > 0 && a < 5 ){
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }
// ------------------------------ 44 ----------------------------//
// 44)  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. 
// Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = 0;
// if (a === 0 || a === 2) {
//   a = a + 7;
// } else {
//  a =  a/2;
// }
// console.log(a);
// --------------------------------------- 45 -----------------------------//
// Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). 
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// let a = 3;
// let b = 5;
// let c;
// if (a <= 1 && b >= 3) {
//    c = a + b;
// } else {
// c = a - b;
// }
// console.log(c);
//  -------------------------------------------- 46 -----------------------------------//
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 25;
// let b = 412;
//  if(a > 2 && a < 11 || b >= 6 && b < 14){
// console.log('Верно')
//  } else {
//    console.log ('Неверно');
//  };
// --------------------------------------------- 47 -------------------------------------------//
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// let day = 31;
// if ( day >=1 && day <= 10) {
//   console.log('I decada');
// } else if ( day >=11 && day <= 20){
//   console.log('II decada')
// } else {
//   console.log('III decada')
// }
// -------------------------------------------------- 48 -----------------------------------------//
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// let mouth = prompt('Enter mouth:');
// if ( mouth == 12 && mouth <= 2 ) {
//   console.log ('winter');
// } else if ( mouth >= 3 && mouth <= 5) {
//   console.log ('spring');
// } else if ( mouth >= 6 && mouth <= 8) {
//   console.log ('summer');
// } else if ( mouth >= 9 && mouth <= 11) {
//   console.log ('autum');
// } else {
//   console.log ('net takogo mesaca');
// }
const sirko = []; 
sirko.push('собака'); 
sirko.unshift('мій пес'); 
sirko.length = 3; 
sirko.pop();
console.log(sirko);