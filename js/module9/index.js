// /Задача №1
// //Алерт по нажатию на кнопку.
// //При нажатии на кнопку "Нажми на меня"
// //выводиться сообщение 'Привет!
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
//  <button >Нажми на меня!</button>
// </body>
// </html>

// //Задача №2
// //Изменение текста в инпуте.
// //По нажатию на кнопку - изменяеться текст в импуте
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
// <button>Нажми на меня</button>
// <input type="text" id="input" value="???">
// </body>
// </html>

// //Задача №3
// //Изменение текста в инпуте.
// //По нажатию на кнопку -  она выводит алертом содержимое инпута
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
// <button >Нажми на меня</button>
// <input type="text" id="input" value="???">
// </body>
// </html>

// //Задача №4
// //Изменение текста в инпуте.
// //По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
// <button >Нажми на меня</button>
// <input type="text" id="input" placeholder="Введите число!">
// </body>
// </html>

// //Задача №5
// // Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:
// <button >Нажми на меня</button>
// <input type="text" id="input1" value="!!!"><input type="text" id="input2" value="???">

// //Задача №6
// // Задача. При нажатии на кнопку - поменяется ее текст:
// <input type="button"  value="Нажми на меня">

// //Задача №8
// // Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:
// <button >Заблокировать</button>
// <button >Отблокировать</button>
// <input type="text" id="input" value="Какой-то текст!"></input>



// ------------------------------ 8-1 --------------------------------------//
// /Задача №1
// //Алерт по нажатию на кнопку.
// //При нажатии на кнопку "Нажми на меня"
// //выводиться сообщение 'Привет!
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
//  <button >Нажми на меня!</button>
// </body>
// </html>
// const x = document.querySelector('button');
// const handleClick = () => alert('Привет!');
// x.addEventListener('click', handleClick)

// // ------------------------------------- 8-2 ----------------------------------------///
// //Изменение текста в инпуте.
// //По нажатию на кнопку - изменяеться текст в импуте
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
// <button>Нажми на меня</button>
// <input type="text" id="input" value="???">
// </body>
// </html>
// const x = document.querySelector('button');
// const y = () => input.value = '!!!';
// x.addEventListener('click', y);

// ----------------------------------- 8-3 --------------------------------//
// const x = document.querySelector('button');
// const int = document.querySelector('input');
// const y = () => alert(int.value);
// x.addEventListener('click', y);

// ------------------------------ 8-4 -----------------------------------//
// //Задача №4
// //Изменение текста в инпуте.
// //По нажатию на кнопку -  она выводит алертом содержимое инпута, возведенное в квадрат
// <html>
// <head>
//    <meta charset="utf-8">
//    <title>Задачи по DOM</title>
//    <style>
//    </style>
//    <script>
//    </script>
// </head>
// <body>
// <button >Нажми на меня</button>
// <input type="text" id="input" placeholder="Введите число!">
// </body>
// </html>
// const x = document.querySelector('button');
// const y = document.querySelector('input');
// const k = () => alert(Math.pow(y.value,2));
// x.addEventListener('click', k);
// ---------------------------------- 8-5 --------------------------------//
// //Задача №5
// // Задача. Кнопка осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов:
// <button >Нажми на меня</button>
// <input type="text" id="input1" value="!!!"><input type="text" id="input2" value="???">
// const x = document.querySelector('button');
// const y = document.querySelector('#input1');
// const z = document.querySelector('#input2');

// const ob1 = () => {let k = y.value;
// y.value = z.value;
// z.value = k;}
// x.addEventListener('click', ob1);

// --------------------------------- 8-6 -------------------------------------//
// //Задача №6
// // Задача. При нажатии на кнопку - поменяется ее текст:
// <input type="button"  value="Нажми на меня">

// const x = document.querySelector('input');
// let k = 'new text';
// const z = () => x.value = k;
// x.addEventListener('click', z);
// ------------------------- 8-8 ---------------------------------------//
// //Задача №8
// // Задача. При нажатии на кнопки -  одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует:
// <button >Заблокировать</button>
// <button >Отблокировать</button>
// <input type="text" id="input" value="Какой-то текст!"></input>
// const int = document.querySelector('input')
// const x = () => int.disabled = true;
// const z = () => int.disabled = false;

// const d = document.querySelector('#first');
// const r = document.querySelector('#last')
// d.addEventListener('click', x);
// r.addEventListener('click', z);

// ------------------------------------- Dop 8 - 1 ---------------------------------//
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// const x = document.querySelector('button');
// const w = () => x.textContent = parseInt(x.textContent) + 1;
// x.addEventListener('click', w);

// --------------------------------- Dop  8 - 2 -------------------------------------//
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
// const x = document.querySelector('#first');
// const y = document.querySelector('#last');
// const z = document.querySelector('button');
// let result = document.querySelector('.result');
// const rez = () => {
//     result.textContent = Number(x.value) + Number(y.value);
//     // console.log(result.value)
// };
// z.addEventListener('click', rez);

// let deadline=new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// console.log(deadline);

// let countdown = deadline;
// let timer = setInterval(
//   function() {
//     countdown--;
//     if (!countdown) {
//       clearInterval(timer);
//     }

//     console.log("Обратный отсчет: " + countdown);
//   },
// 2000); // Частота: 2000 [ms] = 2 [s]

// ------------------------------------ таймер ----------------------------------//
function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
 let fiveMinutes = 60 * 10,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

let date = new Date();

// // проверим количество мс с с начала эпохи Unix
// console.log(
//   `Время в мс с начала эпохи Unix: ${date.getTime()}`
// );
// // "Время в мс с начала эпохи Unix: ....  значения будут меняться :-)
// // "Время в мс с начала эпохи Unix: 1504721892483"

let result = "";
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц, начиная с 0
// result += date.getDate() + '. Day of the week: '; // день недели, начиная с 1
// result += date.getDay() + '.'; // день , начиная с 0

result += ' Time: ' + date.getHours() + ':'; // часы
result +=  date.getMinutes() + ':'; // минуты
result +=  date.getSeconds() + ':'; // секунды
result +=  date.getMilliseconds() + ''; // милисекунды

// // строка должна показать текущее время и дату
console.log(result);
// //  ....  значения будут менятся :-)
// // "Date: 2017/8/6. Day of week: 3. Time: 21:18:12:483"