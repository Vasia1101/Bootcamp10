/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/
// class Stopwatch {
//     constructor (elem) {
//       this.elem = elem;
//       this.button = null;
//       this.startTime = null;
//       this.deltaTime = null;
//       this.intervalFunction = null; 
//     }
  
//     get createTimer() {
//       this.elem.innerHTML = '<div class="stopwatch"><p class="time js-time">00:00.0</p><button class="btn js-start">Start</button><button class="btn js-take-lap">Lap</button><button class="btn js-reset">Reset</button></div><ul class="laps js-laps"></ul>';
//       this.button = document.querySelector('.js-start');
//     }
  
//     get startTimer() {
//       this.button.addEventListener('click',() => clickButton(this.startTime, this.button, this.intervalFunction, this.deltaTime, this.startTime));
  
//       function clickButton (start, button, interval, deltaTime, startTime) {
//         start === null ? start = Date.now() : start = (Date.now() - start);
    
//         function toogleAttr(elem) {
//           if(elem.dataset.action === 'true') {
//             elem.dataset.action = !elem.dataset.action
//           } else {
//             elem.setAttribute("data-action", true);
//           }
//           elem.innerHTML = elem.dataset.action === 'true' ? "Pause" : "Continue";
//         }
    
//         function myTimer(elem, delta, start) {
//           if(!elem) {
//             elem = setInterval(function() {
//               delta = (Date.now() - start);
//             }, 100);
//           }
//         }
    
//         function pauseMyTimer() {
//           if(interval) {
//             clearInterval(interval);
//           }
//           interval = null;
//         }
    
//         toogleAttr(button);
    
//         button.dataset.action === 'true' ? myTimer(interval, deltaTime, startTime) : pauseMyTimer(interval);
//       }
  
//     }
  
//   }
  
  
//   let test = document.querySelector('.timer');
//   let test2 = new Stopwatch(test);
  
  
//   test2.createTimer;
//   // let listener = document.querySelector(".js-start");
//   // listener.addEventListener('click', test2.startTime);
//   test2.startTimer;
class Stopwatch {
constructor(parentDiv) {
  this.parentDiv = parentDiv;
  this.startTime = null;
  this.deltaTime = null;
  this.id = null;
  this.stopwatch = document.createElement('div');
  this.clockface = document.createElement('p');
  this.btnStart = document.createElement('button');
  this.btnLap = document.createElement('button');
  this.btnReset = document.createElement('button');
  this.list = document.createElement('ul');
  this.listItem = document.createElement('li');

  this.stopwatch.append(this.clockface, this.btnStart, this.btnLap, this.btnReset);
  this.parentDiv.append(this.stopwatch, this.list);

  this.addListeners();
}

addListeners() {
  this.stopwatch.classList.add('stopwatch');

  this.clockface.classList.add('js-time');
  this.clockface.textContent = '00:00.0';

  this.btnStart.classList.add('js-start');
  this.btnStart.textContent = 'Start';

  this.btnLap.classList.add('js-lap');
  this.btnLap.textContent = 'Lap';

  this.btnReset.classList.add('js-reset');
  this.btnReset.textContent = 'Reset';

  this.list.classList.add('js-laps');
  this.listItem.classList.add('js-list-item')

  this.btnStart.addEventListener('click', this.onStart.bind(this));
  this.btnLap.addEventListener('click', this.onLap.bind(this));
  this.btnReset.addEventListener('click', this.onReset.bind(this));
}
onStart({target}) {
  if(target.textContent === 'Start') {
      timeObj.startTime = Date.now();
      target.textContent = 'Pause';

      timeObj.id = setInterval(function() {
          timeObj.deltaTime = Date.now() - timeObj.startTime;
          changeClockface(clockface, timeObj.deltaTime);
      }, 100);
     
  } else if (target.textContent === 'Pause') {
    elem.innerHTML = elem.dataset.action === 'true' ? "Pause" : "Continue";
  } else if(target.textContent === 'Continue'){elem.setAttribute("data-action", true);}
}
}