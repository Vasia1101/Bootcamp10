'use strict'
// const user = {
//     name:'Frank',
//     age:21,
//     male:true,
// getInfo:  function(){
//     return `name: ${this.name} age:${this.age} male:${this.male}`
// },
// };

// console.log(user.name);
// console.log(user["age"]);
// console.log(user['male']);

// user.age = 26;
// user.height = 180;

// console.log('user', user);
// console.log(user.getInfo());

// delete user.male;
// console.log(user.male);

// // for (const key in user){
// //     console.log(`$(key): ${user[key]}`);
// // };

// const casino = {
//     1:[1, 5, 20],
//     2:[50, 100],
// };

// const userArr = Object.entries(user);
// console.log(userArr);

// for (const el of userArr) {
//     console.log (`${el[0]}:${el[1]}`);
// }

// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};

// const person = Object.assign(first, last);
// console.log(person); // {name: 'Tony', lastName: 'Stark'}

// // target (first) тоже изменился
// console.log(first); // first = {name: 'Tony', lastName: 'Stark'}



// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};

// // const c = Object.assign({}, a, b);
// // console.log(c); // {x: 0, y: 2, z: 3}

// // То же самое используя оператор spread ...
// const c = { ...a, ...b };

// console.log(c); // {x: 0, y: 2, z: 3}

// const hotel = {
//     name:"Amwaj",
//     stars: 5,
//     capacity: 100,
// };

// hotel.name = "eBeach";
// hotel. werda = 'clone'; 
// console.log(hotel);
// console.log(hotel['stars']); 
// console.log(hotel.capacity);

// const arr =['a', 'b', 'c'];
// arr[3] = 'qweqwe';
// arr.lol = 'lololo';

// console.log(arr);

// const name = 'Alex';
// const age = 10;

// const user = {
//     name,
//     age,
//     friends:300,
//     status:'happy',
//     isActive:true,
//     prop:'fignj',
//     sayHi: function(){
//         console.log('Hi!');
//     },
//     addFriends(val){
//         user.friends += val;
//     },
// };
// user.addFriends(150);
//  user.sayHi('BestFire');
// console.log(user);
// // console.log('age' in user);

// const getPropValue = (obj, prop) => {
// // console.log(obj);
// console.log(obj[prop]);
// }

// getPropValue(user, 'isActive');

// ------------------------------ 1 zaddanie ----------------------------------------//
/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };
//   user.mood='happy';
//   user.hobby='javascript';
//   delete user.premium;
// console.log(user);

// for (let key in user){
//     const hasKey = user.hasOwnProperty(key);
//     if (hasKey){
//     console.log(`${key}: ${user[key]}`);   
// }
// }

//  const keys = Object.keys(user);
//  for (let key of keys){
//   console.log(`${key}: ${user[key]}`);
//  }

// const entries = Object.entries(user);
// console.log(entries);
// for (const [key, value] of entries){
//    console.log(`${key}: ${value}`);
// }




//----------------------------------------------------fin1-----------------------//
// let a = {num:5};
// let b = a;

// console.log(a);
// console.log('b', b);

// a.num = 10;

// console.log('a:', a);
// console.log('b', b);


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ------------------- передача по значенню -----------------------------------//
// let x = 5;
// function changeValue(val){
//     val = 10;
// }

// changeValue(x);
// console.log(x); // записується примітив(значення);

// //  ------------------- передача по зсилці -------------------------------//

// const number = [1, 2, 3];
// function addToArray(arr){
//     arr.push(4);
// }

// addToArray(number);
// console.log(number); // зсилається на пам'ять(значення); передає ключ для змін 


const shop = {
    products:[
        { name:'apples', amount:100, price: 30},
      {name:'grapes', amount:150, price: 40} , 
      {name:'bananas', amount:200, price: 50}
],
    addProduct(product){
        this.products.push(product);
    },
    //отримує інформацію по продукту
    getProductInfo(productName){
        for (const elem of this.products){
            if (elem.name === productName) {
                return elem;
            }
        }
        },
        // отримує інформацію про оновлення продуктів
        addProductAmount(productName, num) {
        console.log(`Adding ${num} ${productName}`)// виводить скільки продуктів добавлено
        // const product = shop.getProductInfo(productName);
        // product.amount += num;   альтернатива фор 
for (const elem of this.products){
    if (elem.name === productName)
    {
        elem.amount += num;
    }
}
        },
        subtractProductAmount(productName, num){
            console.log(`Sell ${num} ${productName}`)
            const product = this.getProductInfo(productName);
            product.amount -= num;
        }
    };



shop.addProduct({
    name:'Mango', amount:300, price:100});
console.log(shop);
const info = shop.getProductInfo('grapes');
console.log(info);

shop.addProductAmount('Mango', 750);
console.log(shop);

shop.subtractProductAmount('apples', 25);
console.log(shop);


// const a = {x:10, y: 'hello'};
// const b = {z: 25};
// const c = { x:25, prop:'qweqwe'}
// Object.assign(a,  b, c);
// console.log(a);

// const dog1 = {
//     breed: 'famale',
// };

// const dog2 = {
// breed: "male",
// };

// const myFunc = function(message = '') {
//     return `My dog is ${this.breed} ${message}`;
// };
// dog1.getMyDogBreed = myFunc;

// console.log(dog1.getMyDogBreed.call(dog2));

// const obj = {
//     param:'obj param',
//     showThis {
//         console.log('this', this), 
//     }
// }




// -------------------------------------------------------------------------------------------------- //
/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };
  let max = 0;
  let maxName = '';
  for (const name in tasksCompleted){
      if (max < tasksCompleted[name]){
          max = tasksCompleted[name];
          maxName = name;
          
      }
  }
alert(maxName, max);



//-------------------------------------------------------------------------------------//
/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/
let count = 0;
function countProps(obj){
    let keys = Object.keys(obj)
    return count = keys.length;
}

// Вызовы функции для проверки
console.log(
    countProps({})
  ); // 0
  
  console.log(
    countProps({a: 1, b: 3, c: 'hello'})
  ); // 3

















//   ----------------------------------------------------------------------------------------- //
/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
  function getAllPropValues(arr, prop){
      let arrOfProps = [];
      for (let object of arr){
          arrOfProps.push(object[prop]);
          
    }
    return arrOfProps;
}
  // Вызовы функции для проверки
  console.log(
    getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues(users, 'active')
  ); // []












  /////////////////////////////////
  /*  
  Расставьте отсутствующие this в методах объекта store
*/

const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
      managers.push(manager);
      
      console.log(managers);
    },
    removeManager(manager) {
      const idx = managers.indexOf(manager);
      
      managers.splice(idx, 1);
      
      console.log(managers);
    },
    getProducts() {
      console.log(products);
      
      return products;
    }
  }
  
  store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
  
  store.removeManager('mango'); // ['poly', ajax', 'chelsey']
  
  store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
  