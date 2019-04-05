'use strict'
/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

/*
  HTML для формы
  <form class="form js-form">
    <section>
      <h2>Screen size</h2>
      <ul>
        <li><label><input type="checkbox" name="size" value="13"> 13"</label></li>
        <li><label><input type="checkbox" name="size" value="15"> 15"</label></li>
        <li><label><input type="checkbox" name="size" value="17"> 17"</label></li>
      </ul>
    </section>
    <section>
      <h2>Color</h2>
      <ul>
        <li><label><input type="checkbox" name="color" value="white"> white</label></li>
        <li><label><input type="checkbox" name="color" value="gray"> gray</label></li>
        <li><label><input type="checkbox" name="color" value="black"> black</label></li>
      </ul>
    </section>
    <section>
      <h2>Release date</h2>
      <ul>
        <li><label><input type="checkbox" name="release_date" value="2015"> 2015</label></li>
        <li><label><input type="checkbox" name="release_date" value="2016"> 2016</label></li>
        <li><label><input type="checkbox" name="release_date" value="2017"> 2017</label></li>
      </ul>
    </section>
    <button type="submit">Filter</button>
    <button type="reset">Clear</button>
  </form>
*/

const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];  
    let container = document.querySelector('#container');
    const x = document.querySelector('#sub');
    const y = document.querySelector('#res');
    let filters = { 
      size: [], 
      color: [], 
      release_date: [] 
     };
  function getCheckedCheckBoxes(evt) {
      evt.preventDefault();
      filters['size'] = [].filter.call(document.getElementsByName('size'), (c) => c.checked).map(c => c.value);
      filters['color'] = [].filter.call(document.getElementsByName('color'), (c) => c.checked).map(c => c.value);
      filters['release_date'] = [].filter.call(document.getElementsByName('release_date'), (c) => c.checked).map(c => c.value);
const lapArr = laptops.filter(lapcol => String(lapcol.color) === String(filters.color)).filter(lapcol => lapcol.size === parseInt(filters.size)).filter(lapcol => lapcol.release_date === parseInt(filters.release_date));
console.log(lapArr);
if (lapArr.length === 0) {
  alert('go away') 
} else {
  const source = document.querySelector('#gallery-item').innerHTML.trim()

  const template = Handlebars.compile(source);
 
  const mark = lapArr.reduce((acc, item) => acc + template(item), '');
  container.innerHTML =  mark;
}
    };
    
x.addEventListener('click',  getCheckedCheckBoxes);
y.addEventListener('click', () => window.location.reload());