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




  