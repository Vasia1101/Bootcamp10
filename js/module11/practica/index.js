// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html']
//   };
  
//   const source = document.querySelector('#menu-template').innerHTML.trim();
//   const template = Handlebars.compile(source);
  
//   /*
//     Создадим переменную markup, в которую запишем 
//     результат работы функции-шаблона template
//   */
//   const markup = template(menuData);
  
//   console.log(markup); // магия
//   /*
//     Пример выше похож на операцию «поиск-и-замена»: шаблон просто 
//     заменил {{title}} на значение свойства menuData.title. 
//     После чего в результат попал сначала текст <ul>, 
//     потом выполнился {{#each items}}, который последовательно 
//     сгенерировал элементы списка, и затем список был закрыт </ul>.
//   */
  
//   /*
//     В js выберем контейнер по id, после чего используя 
//     свойство innerHTML присвоим туда нашу строку.
//   */ 
//   const container = document.querySelector('#menu-container');
//   container.innerHTML = markup;


// ------------------------- Dop 11-1 ------------------------------- //
/*
* К pen уже подключен Handlebars.
* Используй встроенные шаблоны и метод Handlebars.compile
* 
* Создай шаблон элемента списка указаного на вкладке HTML.
* Отрендери список в DOM по данным из массива products.
*/

// const products = [
//     { name: "Apples", quantity: 50 },
//     { name: "Grapes", quantity: 44 },
//     { name: "Cheese", quantity: 128 },
//     { name: "Milk", quantity: 93 }
//   ];

//   const container = document.querySelector('.products');
//   const source = document.querySelector('#product-item').innerHTML.trim();
//   const template = Handlebars.compile(source);
//   const markup = products.reduce((acc, item) => acc + template(item), "");
//   container.innerHTML = markup;

//   --------------------------- Dop 11 - 2 ----------------------------- //
/*
 * К pen уже подключен Handlebars.
 * Используй встроенные шаблоны и метод Handlebars.compile
 * 
 * Создай шаблон поста указаного на вкладке HTML.
 * Отрендери список постов в DOM по данным из массива posts.
 * 
 * Если в объекте поле favourite=true, в посте должна быть 
 * разметка иконки избранного поста, в противном случае,
 * разметки иконки быть не должно.
*/

const posts = [
    {
      title: "Phasellus volutpat metus",
      text:
        "Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Ut leo.",
      favourite: true
    },
    {
      title: "Nulla consequat massa",
      text:
        "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
      favourite: false
    },
    {
      title: "In enim justo",
      text:
        "Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Suspendisse eu ligula. Praesent metus tellus, elementum eu, semper a, adipiscing nec, purus.",
      favourite: true
    },
    {
      title: "Vestibulum ante ipsum",
      text:
        "Vestibulum suscipit nulla quis orci. Praesent venenatis metus at tortor pulvinar varius. Nulla sit amet est. Suspendisse eu ligula sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien.",
      favourite: false
    }
  ];
  const container = document.querySelector('.posts');
  const source = document.querySelector('#product-item').innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = posts.reduce((acc, item) => acc + template(item), "");
  
container.innerHTML = markup;
  

