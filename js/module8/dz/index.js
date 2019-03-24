'use strict'
/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-1.jpeg" alt="alt text 1">
      </div>
      <!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: 'https://placeimg.com/320/240/animals', fullview: 'https://placeimg.com/1000/768/animals', alt: "alt text 1" },
    { preview: 'https://placeimg.com/320/240/arch', fullview: 'https://placeimg.com/1000/768/arch', alt: "alt text 2" },
    { preview: 'https://placeimg.com/320/240/nature', fullview: 'https://placeimg.com/1000/768/nature', alt: "alt text 3" },
    { preview: 'https://placeimg.com/320/240/people', fullview: 'https://placeimg.com/1000/768/people', alt: "alt text 4" },
    { preview: 'https://placeimg.com/320/240/tech', fullview: 'https://placeimg.com/1000/768/tech', alt: "alt text 5" },
    { preview: 'https://placeimg.com/320/240/tech/grayscale', fullview: 'https://placeimg.com/1000/768/tech/grayscale', alt: "alt text 6" },
  ];
  
  
  /*
    ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
    
    Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
    чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
    аналогичный заданию выше.
    
    При создании экземпляра конструктор получает:
      - items - список элементов для preview
      - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
      - defaultActiveItem - номер активного элемента preview по умолчанию
      
    Тогда создание экземпляра будет выглядеть следующим образом.
  */
  
  
  
  /* Далее плагин работает в автономном режиме */         
          
class Gallery {
    constructor (items, parentNode, defaultActiveItem){
        this.items = items;
        this.parentNode = parentNode;
        this.defaultActiveItem = defaultActiveItem;
    } 
    get insertBigImage(){
      let k = document.createElement('div');
      k.classList.add('fullview');
      let fullview = `<img class = "js-bigimg" src = "${this.items[this.defaultActiveItem].fullview}" data-fullview="${this.items[this.defaultActiveItem].fullview}" alt = "${this.items[this.defaultActiveItem].alt}">`;
      console.log(fullview)
      k.innerHTML = fullview;
      this.parentNode.appendChild(k);

    }
        
    get insertGallery (){
        let i = document.createElement('ul');
        i.classList.add('preview');   
      
      //  let addImage = this.items.reduce((pic,i) => pic + `<li><img src = ${i.preview}></li>`, "");
       i.innerHTML = this.items.reduce((pic,i) => pic + `<li><img class = "js-smallimg" src = "${i.preview}" data-fullview="${i.fullview}" alt = "${i.alt}"></li>`, ""); 
        this.parentNode.appendChild(i);

    }
    get bigImage () {
     this.parentNode.addEventListener('click', changeImage )
      function changeImage (){
        
        let q = document.querySelector('.js-smallimg');
  let target = event.target; 
  if (target.nodeName === "IMG") {
  const w = document.querySelector('.js-bigimg');
w.src = target.dataset.fullview;
}
  }
    }
}
// let imgIt = new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });
  let imgIt = new Gallery(galleryItems, document.querySelector('.image-gallery'),  1);
  imgIt.insertBigImage;
  imgIt.insertGallery;
  imgIt.bigImage;