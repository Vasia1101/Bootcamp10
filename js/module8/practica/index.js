'use strict'
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
// z.addEventListener('click', rez)

// ----------------------------- Dop 8-3 ----------------------------------//
/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/
// class Counter {
//   constructor (onChange){
//     this.onChange = onChange;
//     this.value = 0;
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//   } 
//   increment () {
//     this.value ++;
//     this.onChange(this.value);
//     // onChange = value;
//     // console.log(increment);
//   }
//   decrement () {
//     this.value --;
//     this.onChange(this.value);
//     // onChange = value;
//   }
// };


// const addPlus = document.querySelector('[data-action="add"]');
// const addMinus = document.querySelector('[data-action="sub"]');
// const result = document.querySelector('span');

// function nextValeue(value) {
//   result.textContent = value;
// }
// const counter = new Counter(nextValeue);

// addPlus.addEventListener('click', counter.increment);
// addMinus.addEventListener('click', counter.decrement);


// Варыант 2
// class Counter {
//   constructor(onChange) {
//     this.value = 0;
//     this.onChange = onChange;
//   }
  
//   get increment(){
//     this.onChange(this.value += 1);
//   }
  
//   get decrement(){
//     this.onChange(this.value -= 1);
//   }
// }

// const value = document.querySelector('.value');

// const counter = new Counter((res) => value.innerHTML = res);

// const onClickHandler = ({target}) => target.dataset.action === 'add'? counter.increment : counter.decrement;

// document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('click', onClickHandler));

// -------------------------------- 8 - 4 ---------------------------//
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/
// const form = document.querySelector('.question-form');
// const x = document.querySelectorAll('input');
// const y = document.querySelector('.btn');
// let res = document.querySelector('.result');

// function val (event) {
//   event.preventDefault();
//   let arr = Array.from(x);
//   arr.find( i => i.checked === true ? res.textContent = `Result: ${i.parentElement.textContent}`: null);
  
// }


// form.addEventListener('submit', val);
// const form = document.querySelector('.question-form');
// const inputAll = form.querySelectorAll('input');
// const result = document.querySelector('.result');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   let arr = Array.from(inputAll);

//   let checkedInput = arr.filter(item => item.checked);
//   let chechedInputValue = checkedInput[0].value;
//   result.textContent = `Result: ${chechedInputValue.value}`;
//   // form.reset();
// };

// ----------------------------- 8 - 5 ----------------------------//
/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/
// const images = document.querySelector('.images');

// function srcAlert (event) {
//   const target = event.target;
//   alert(target.src);
// }

// images.addEventListener('click', srcAlert);


// варіант 2
// const images = document.querySelector('.images');
// images.addEventListener('click', ({target})=> target.nodeName === "IMG"? alert(target.src):null);
// ----------------------------- 8 - 6 --------------------------//
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/
// const x = document.querySelector('.list');

// function deleteLi (event) {
//   event.target.parentElement.remove();
// }

// x.addEventListener('click', deleteLi);
// document.querySelector('.list').addEventListener('click', () => event.target.parentElement.remove());
// ----------------------------- 8-7 -------------------------//
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/
// const x = document.querySelector('.input-list');

// x.addEventListener('focusout', checkInput);

// function checkInput (event) {
//   let y = event.target.value;
//   ['invalid', 'valid'].forEach(k => event.target.classList.remove(k));
//   y.length === +event.target.dataset.length ? event.target.classList.add('valid'): event.target.classList.add('invalid')
// }
// const inputList = document.querySelector('.input-list');
//   const inputs = document.querySelectorAll('input');

//   let inputType = () => {


//     inputs.forEach(el => {
//       if(el.value.length > 0){
//         if (Number(el.dataset.length) === el.value.length){
//           el.classList.add('valid');
//         }else
//           el.classList.add('invalid');
//       }
//       })

//   };



//   inputList.addEventListener('focusout', inputType);


// ---------------------------- 8-8 ---------------//
/*
  /*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
// const mess = document.querySelector('.message');
// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');
// input.addEventListener('focus', render);
// function render(){
//     mess.textContent = "Input is in focus!";
// };

// function textInput(){
//     text.textContent = `Current input value:${input.value}`;
// };
// input.addEventListener('input', textInput);

// document.querySelector('.input').addEventListener('focus', ()=> document.querySelector('.message').textContent = "Input is in focus!");
// document.querySelector('.input').addEventListener('input', () => document.querySelector('.input-value').textContent = `Current input value: ${document.querySelector('.input').value}`);
// --------------------------- Dop 8-9 ----------------------//
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// let openModal = document.querySelector('.btn');
// let modal = document.querySelector('.js-modal-backdrop');
// // let modalHiden = document.querySelector('.modal-hidden');
// let clouse = document.querySelector('[data-action="close-modal"]');

// modal.addEventListener('click',clous);
// openModal.addEventListener('click',open);

// function open (){
//     modal.classList.remove('modal-hidden');
// }

// function clous (event){
//     if(event.target === clouse || event.target === modal){
//         modal.classList.add('modal-hidden')
//     }
// }
document.querySelector('.btn').addEventListener('click', () => document.querySelector('.js-modal-backdrop').classList.remove('modal-hidden'));
document.querySelector('[data-action="close-modal"]').addEventListener('click', (event) => event.target === document.querySelector('[data-action="close-modal"]') || event.target === modal ? modal.classList.add('modal-hidden'): null);


// --------------------------- Nadin -----------------------------//
// Часть 1
// ________________
// *События через атрибуты*
// 1. При нажатии на кнопку "Нажми на меня!" - через алерт вывести сообщение "Привет!"
// 2. При наведении на кнопку "Наведи на меня!" - через алерт вывести сообщение "Привет!"
// 3. При двойном нажатии на кнопку "Двойной счелчок по мне!" - через алерт вывести сообщение "Привет!"
// 4. Есть текстовое поле в котором написано "Наведи на меня мышь - а потом убери!". Когда мышка выходит за пределы текстового поля - через алерт вывести сообщение "Привет!"

// *Метод getElementById и работа с атрибутами*
// 5. Есть инпут и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке
// 6. Есть фотография и кнопка "Нажми на меня". По нажатию на кнопку должна появляться другая картинка.

// *Работа с this*
// 7. При нажатии на поле инпут "Нажми на меня!" - текст в инпуте меняеться на "Ой, я поменял текст!"
// 8. При нажатии на поле инпут "Нажми на меня! - через алерт вывести сообщение "Привет!"
// 9. есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "Ку-ку".
// 10. есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "О, больше на меня не нажать", и кнопка должна стать не активна.
// 11. Есть картинка. при наведении картина меняеться на другую, когда курсор мышки покидает пределы блока с картинкой, начинает отображаться изначальная картинка.
// *Работа с CSS*
// 12. Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке
// 13. Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!" и кнопка "Нажми потом на меня!". При нажатии на кнопку  "Нажми на меня!" - блок-инпут должен исчезать. Потом при нажатии на кнопку "Нажми потом на меня!" блок-инпут должен снова появляться.

// *Задачи*
// 14. *Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!".  При нажатии на кнопку "Нажми на меня!" - в блоке-инпут  должен меняться текст и цвет текста "Ой, я поменял свой текст и css!"
// 15. *Есть input type="submit" с надписью "Нажми на меня!". При нажатии текст на кнопке должен заменится на "О теперь на меня больше не нажать!", она становиться не активна, и появляется вторая кнопка с надписью "Нажми, что бы отблокировать элемент". При нажатии на  кнопку с надписью "Нажми, что бы отблокировать элемент" - эта кнопка исчезает, и на изначальной кнопке восстанавливаться надпись "Нажми на меня!" и она становиться активной.
// 16. *Создать кнопку с текстом "0". Кнопка считает кол-во нажатий по ней.
// 17. *Есть инпут с текстом "ку-ку" и кнопка "Нажми на меня!" и кнопка "Нажми потом на меня!". При нажатии на кнопку "Нажми на меня!" - в блоке-инпут должено появляться сообщение о том, какие классы были использованы, при создании этого инпута - "Мои css классы: eee www ddd".
// 18.  *Есть инпут без текста и 4 кнопки.
// 1-я кнопка "Я добавляю+", при нажатии на которую в поле инпут появиться знак "+".
// 2-я кнопка "Я добавляю-", при нажатии на которую в поле инпут появиться знак "-".
// 3-я кнопка "Я добавляю/", при нажатии на которую в поле инпут появиться знак "/".
// 4-я кнопка "Я добавляю*", при нажатии на которую в поле инпут появиться знак "*".
// 5-я кнопка "1", при нажатии на которую в поле инпут появиться знак "1"
// ......
// 14-я кнопка "9", при нажатии на которую в поле инпут появиться знак "9"
// Часть 2
// ________________
// 1. Есть HTML-разметка: https://codepen.io/Foxy1337/pen/zpQNQm
// Написать скрипт: при нажатии на кнопку, добавлять в div с идентификатором «container» фрагмент разметки:
// <div class="item">
// <h3>Заголовок</h3>
// <p>текст текст текст</p>
// </div>
// 2. При нажатии на ссылку, равномерно перемещать HTML-элемент с классом .play вправо - https://codepen.io/Foxy1337/pen/NXVjLQ
// 3. * Создать скрипт, который при нажатии на гиперссылку «Добавить» будет показывать в нижней части окна браузера уведомление, подобно тем, которые появляются в социальных сетях при получении сообщения. - https://codepen.io/Foxy1337/pen/OzYgpJ
// 4. При нажатии на гиперссылку менять фоновый цвет элемента с классом .play на прозрачный. Примечание: используйте CSS-свойство opacity. -https://codepen.io/Foxy1337/pen/MrdoVE
// 5. * Познакомьтесь с компонентом Bootstrap — индикатором загрузки (Индикатор загрузки в Bootstrap, видео об индикаторе загрузки в Bootstrap). Создайте скрипт, который будет анимировать изменение показателя индикатора загрузки
// 6. * Создать скрипт, который при нажатии на гиперссылку анимировал движение элемента с классом .play по параболе в ветками вниз.
// Коллекция на КодПене - https://codepen.io/collection/DOWGjb/ (edited)

// ------------------------------------- 1 ----------------------------//
// При нажатии на кнопку "Нажми на меня!" - через алерт вывести сообщение "Привет!"
// const x = document.querySelector('.btn');

// function mes () {
//   alert("Привет!");
// }
// x.addEventListener('click', mes);
// ---------------------------- 2 -----------------------------//
// При наведении на кнопку "Наведи на меня!" - через алерт вывести сообщение "Привет!"
// const x = document.querySelector('button');
//  function mes () {
//    alert('Hi Vasia!')
//  };
//  x.addEventListener('mouseover', mes);
// -------------------------- 3 ---------------------------//
// При двойном нажатии на кнопку "Двойной счелчок по мне!" - через алерт вывести сообщение "Привет!"
// const x = document.querySelector('#btn');
// function mes () {
//      alert('Hi Vasia!')
//    };
//    x.addEventListener('dblclick', mes);
// ------------------------ 4 ------------------------//
// Есть текстовое поле в котором написано "Наведи на меня мышь - а потом убери!". Когда мышка выходит за пределы текстового поля - через алерт вывести сообщение "Привет!"
// const x = document.querySelector('#btn');
// function mes () {
//      alert('Hi Vasia!')
//    };
//    x.addEventListener('mouseout', mes);
// ------------------------ 5 ----------------------------//
// Есть инпут и кнопка "Нажми на меня!". При заполнения окошка инпут в сплывающем окне должно появляться то, что было напечатано в окошке
// const x = document.querySelector('button');
// const y = document.querySelector('input');

// function inputAlert () {
//   alert(y.value);
// }
// x.addEventListener('click', inputAlert);
// ---------------------- 6 ------------------------//
// Есть фотография и кнопка "Нажми на меня". По нажатию на кнопку должна появляться другая картинка.
// const x = document.querySelector('button');
// const y = document.querySelector('img');

// function changeImg (){
//   y.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSin3fxYZWRjQlw3eVO2H3lIC3mJFXYJ5ZuAB5pFKetsfpUiOfG';
// }
// x.addEventListener('click', changeImg);

// ------------------------- 7 ----------------------------//
// 7. При нажатии на поле инпут "Нажми на меня!" - текст в инпуте меняеться на "Ой, я поменял текст!"
