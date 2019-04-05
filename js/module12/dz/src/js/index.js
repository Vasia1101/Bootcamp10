// /*
//   Напишите приложение для хранения url веб-страниц в виде карточек-закладок.

//   Реализуйте следующий функционал:
//     - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы

//     - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"

//     - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой

//     - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
//       создания списка карточек. Форма уже есть в HTML при загрузке страницы.

//     - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
//         * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
//           всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
//         * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
//           добавляется в коллекцию.

//     - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.

//     - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике
//       на кнопку происходит удаление.

//     - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
//       все карточки-закладки которые были во время последнего его посещения. Используйте localStorage

//   🔔 Оформление интерфейса произвольное
// */

// /*
//   ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

//     - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка
//       на валидность введенной ссылки: если был введен невалидный url то должно всплывать
//       диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
//       регулярные выражения для валидации url.

//     - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
//       для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
let wrap = document.querySelector('.wrapper');
let input = document.querySelector('input');
let addSite = document.querySelector('.addSite');
let delSite = document.querySelector('.del');
// let fora = document.querySelector('.fora');
let loaded;
let loader = function(){
  loaded = localStorage.getItem('key');
}
window.addEventListener('onload', loader)
let cardTempale = document.querySelector('.cardTempale').innerHTML.trim();
let template = Handlebars.compile(cardTempale);
let add = function(e){
  e.preventDefault();
  let objSite = {title:input.value};
  let markup =template(objSite);
  wrap.insertAdjacentHTML("afterbegin", markup);


if (!wrap.textContent.includes(input.value)){
  wrap.insertAdjacentHTML("afterbegin", markup);


} else {alert ('no');
let deleSit = function(even) {
  even.preventDefault();
  even.target.parentNode.remove();
}
input.value = '';
deleSite.addEventListener('click', deleSit);
}

};



addSite.addEventListener('click', add);
