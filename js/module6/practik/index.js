'use strict';
const User = function(name, isActive) {
    this.name = name;
    this.isActive = isActive;
    this.getStatus = function() {
      return `${this.name} is ${this.isActive ? 'active' : 'unactive'}`;
    }
  };
  
  
  const user = new User('Boris', false);
  
  console.log(user.getStatus());



/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

const account = new Account('Mangozedog', 'mango@dog.woof');

function Account (login, email){
    this.login = login;
    this.email = email;
    
}
Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email:${this.email}`);
};
console.log(Account.prototype.getInfo); // function
account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof


// ----------------------------------------- 2 ----------------------//
/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/
class StringBuilder{
    constructor (value){
        this._value = value;
    }
    get value () {
        return this._value;
    }
   append (str) {
        this._value = this._value + str;
    }
    prepend (str) {
        this._value = str + this.value;
    }

    pad (str) {
        this._value = str + this.value + str;
    }
}
                        
// }

// const StringBuilder = function(value){
//     this.value = value;
// };
// StringBuilder.prototype.getValue = function(){
//     return this.value;
//     };
// StringBuilder.prototype.append = function (str){
//     return (this.value = this.value + str);
// };
// StringBuilder.prototype.prepend = function(str){
//     return (this.value = str + this.value);
// };
// StringBuilder.prototype.pad = function (str) {
//     return (this.value = str + this.value + str);
// };

const builder = new StringBuilder('.');

builder.append('^'); 
console.log(builder.value); // '.^'

builder.prepend('^'); 
console.log(builder.value); // '^.^'

builder.pad('='); 
console.log(builder.value); // '=^.^='

// const StringBuilder = function(value) {
//     this.value = value;
//   };
  
//   StringBuilder.prototype.getValue = function () {
//     return this.value;
//   };
  
//   StringBuilder.prototype.toAppend = function(str) {
//     return (this.value = this.value + str);
//   };
  
//   StringBuilder.prototype.toPrepend = function(str) {
//     return (this.value = str + this.value);
//   };
  
//   StringBuilder.prototype.toPad = function(str) {
//     return (this.value = str + this.value + str);
//   };
  
  
//   const builder = new StringBuilder('.');
  
//   builder.toAppend('^'); 
//   console.log(builder.value); // '.^'
  
//   builder.toPrepend('^'); 
//   console.log(builder.value); // '^.^'
  
//   builder.toPad('='); 
//   console.log(builder.value); // '=^.^='
/*
 * Напиши класс Car с указанными свойствами и методами
*/

class Car {
    constructor({ maxSpeed = 0 }) {
        this.speed = 0;
        this.maxspeed = maxSpeed;
        this.running = false;
        this.distance = 0;
      /*
        Добавь свойства:
          - speed - для отслеживания текущей скорости, изначально 0.
          - maxSpeed - для хранения максимальной скорости 
          - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
          - distance - содержит общий киллометраж, изначально с 0
      */
    }
  
    turnOn() {
        this.running = true;
      // Добавь код для того чтобы завести автомобиль
      // Просто записывает в свойство running значание true
    }
  
    turnOff() {
        this.running = false;
      // Добавь код для того чтобы заглушить автомобиль
      // Просто записывает в свойство running значание false
    }
  
    accelerate(spd) {
        if (spd > this.maxSpeed){
          this.speed=spd;
        }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed
    }
  
    decelerate(spd) {
        if (spd < this.maxspeed && spd > 0){
          this.speed=spd;
        }
      // Записывает в поле speed полученное значение, при условии что
      // оно не больше чем значение свойства maxSpeed и не меньше нуля
    }
  
    drive(hours) {
        if (this.running === true) {
          this.distance = hours * this.speed;
        }
      // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
      // но только в том случае если машина заведена!
    }
  };
  
  const newCar = new Car ({maxSpeed: 310});
  newCar.turnOn();
  console.log(newCar.running);
  newCar.accelerate(230);
  console.log(newCar.speed);
  newCar.drive(3);
  console.log(newCar.distance);
  newCar.decelerate(50)
  console.log(newCar.speed);
  newCar.turnOff();
  console.log(newCar.running);




  /*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
"use strict"
class Hamburger {
    constructor(size, stuffing) {
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];
    }

    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */

    addTopping(topping) {
        if (!this._toppings.includes(topping)) {
            return this._toppings.push(topping);
        };
    }

    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
        return this._toppings = this._toppings.filter(x => x !== topping);
    }

    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    get getToppings() {
        return this._toppings;
    }

    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    get getSize() {
            return this._size;
        }
        /**
         * Узнать начинку гамбургера
         * @returns {String} - начинка гамбургера
         *
         * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
         */
    get getStuffing() {
        return this._stuffing;
    }

    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */

    get calculatePrice() {
        const priceArr = this._toppings.map(x => Hamburger.TOPPINGS[x].price);
        priceArr.push(Hamburger.SIZES[this._size].price, Hamburger.STUFFINGS[this._stuffing].price);
        let price = priceArr.reduce((acc, prices) => acc + prices, 0);
        return price;
    }

    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
    get calculateCalories() {
        const caloriesArr = this._toppings.map(x => Hamburger.TOPPINGS[x].calories);
        caloriesArr.push(Hamburger.SIZES[this._size].calories, Hamburger.STUFFINGS[this._stuffing].calories);
        let calories = caloriesArr.reduce((acc, itemcalories) => acc + itemcalories, 0);
        return calories;
    }
}

/*
  Размеры, виды добавок и начинок объявите как статические поля класса.
  Добавьте отсутсвующие поля по аналогии с примером.
*/
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories);

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice);

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1

/*
  🔔 Обратите внимание на такие моменты:
        ✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
            другой код, а класс живет в изоляции от мира
        ✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
        чтобы нельзя было создать объект, не указав их
        ✔️ необязательные (добавка) добавляем через методы
        ✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
            свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
        ✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
        ✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
              а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
        логично в тот момент, когда это потребуется, а не заранее.
*/


// 
console.log("ИТОГО :");
console.log("finalToppingsList", hamburger._toppings);
console.log(" finalPrice: ", hamburger.calculatePrice);
console.log(" finalCalories: ", hamburger.calculateCalories);