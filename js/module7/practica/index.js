'use strict'
// const menu = document.querySelector('#menu');
// menu.style.fontSize = '1rem';
// menu.style.textTransform = 'uppercase';
// menu.style.color = '#3066BE';
// console.log(window.history);

// let title = document.createElement('h2');
// title.classList.add('red-text');
// title.textContent = 'Hello';
// let div = document.querySelector('.first');
// div.append(title);
// div.innerHTML += '<ul class="MyList"><li>ochen</li></ul>';
// let myList = document.querySelector('.myList');
// myList.style.listStyle = 'None';
// myList.style.color = 'blue';
// -------------------------------- 1 -------------------//
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// const items = document.querySelectorAll('.categories > li');
// items.forEach(item => console.log(`Категория:${item.firstChild.textContent} length: ${item.childNodes[1].childElementCount}`));
// -------------------------------- 2 -------------------------//
// console.log(`Количество вложенных li:${items} `);
/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/
// const list = document.querySelector('.list');
// list.firstElementChild.style.color = ('red');
// list.lastElementChild.style.color = ('blue');
// ------------------------- 3 ------------------------//
/*
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const mark = elements.reduce((string, i)=>string + `<li>${i}</li>`,"");

// list.innerHTML = mark;
// ---------------------------- 4 -------------------------//
/*
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

// const galleryItems = [
//     {
//       url:
//         "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "White and Black Long Fur Cat"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Two Brown Hen and One Red Rooster"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Group of Horses Running"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "Macaw Birds"
//     },
//     {
//       url:
//         "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//       alt: "2 Lion on Grass Field during Daytime"
//     }
//   ];
//   const gallery = document.querySelector('.gallery');

//   const mark = galleryItems.reduce((pic, i)=>pic + `<li><img class='size' src = ${i.url} alt ${i.alt}></li>`,"");
  
//   gallery.innerHTML = mark;
//   const size = document.querySelectorAll('.size');
//   size.forEach(i => i.style.width = '300px');
//   gallery.style.listStyle = 'none';

//  -------------------------------------- 5 ----------------------------//
/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/
// const x = document.querySelectorAll('input[checked]');
// console.log(x);
// let k = Array.from(x);
// function collectInputData(){
//     return k.map(elem => elem.value)
// }
// console.log(collectInputData(x));

// ------------------------------- 6 -----------------------------------//
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// <img class="movie__image" src="http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg" alt="movie image">
                        
// <div class="movie__body">
//   <h2 class="movie__title">The Godfather</h2>
//   <p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//     would-be killers, launching a campaign of bloody revenge.</p>

//   <p class="movie__date">Released: 1972-03-14</p>
//   <p class="movie__rating">Rating: 8.6</p>
// </div>
// function  createMovieCard(){
//     let k = document.querySelector('.movie')
//     let x = document.createElement('img');
//     x.classList.add('movie__image');
//     x.src = 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg';
//     x.alt  = 'movie image';
//     k.append(x);
//     // let q = document.createElement('div');
//     // q.classList.add('movie__body')
//     k.innerHTML += `<div class="movie__body"><h2 class="movie__title">The Godfather</h2><p class="movie__description">Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the
//     would-be killers, launching a campaign of bloody revenge.</p><p class="movie__date">Released: 1972-03-14</p><p class="movie__rating">Rating: 8.6</p></div>`

// };
// createMovieCard();
// createMovieCard();
// -------------------------------------- 7 -------------------------------//
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// function randomColor() {
//     let result = '';
//     let max = 255;
//     let a = Math.floor(Math.random() * (255 + 1) );
//     let b = Math.floor(Math.random() * (255 + 1) );
//     let c = Math.floor(Math.random() * (255 + 1) );
//     return result = `rgb(${a}, ${b}, ${c})`;
// }
// console.log(randomColor());

function randomColor() {
    let result = '';
    let max = 255;
    return result = `rgb(${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))}, ${Math.floor(Math.random() * (255 + 1))})`;
}
console.log(randomColor());

function createBoxes(num) {
    let container = document.createElement('div');
    let mainDiv = document.querySelector('#root');
    let i = 1;
    let width = 30;
    let height = 30;

    do {
        // let divs = document.createElement("div");
        // divs.style.backgroundColor = randomColor();

        // divs.style.width = width +"px";
        // divs.style.height = height + "px" ;

        container.innerHTML += `<div style='width: ${width +"px"}; height: ${height + "px"}; background-color: ${randomColor()} '></div>`;
        i++;
        width += 10;
        height += 10;

    } while (i <= num);

    mainDiv.append(container);
}

createBoxes(4);

