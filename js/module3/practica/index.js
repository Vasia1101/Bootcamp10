// add (1,2,3);
// print('text');
// function add(a,b,c){
//     return a+b+c;
// }

// function print (str) {
//     console.log (str);
// }
 
// const showTestDays = function(name = "Polozteval", days = 30){
//   return`Имя - ${name}, использовано ${days} тестових днів`;
// }
// console.log(showTestDays("Katerina", 10));

// console.log(showTestDays("Misha"));

// console.log(showTestDays());


// const arr = ['hello', 'my', 'name', 'is', 'Vasia'];
// console.log(toText(arr));

// function toText (data){
//   const newText = data.join(' ');
//   return newText;
// }

// const summ = function(){
//   const max = arguments.length;
//   let total =0;
//   for (let i=0; i<max; i+=1){
//     total += arguments[i];
//   }
//   return total;
// };

// console.log(`summ = ${summ(1,2,3,4,5)}`);


// let value = 10;

// const fn = function () {
//   let value;
//   console.log(value + 10);
// };

// fn(); // 30

// let a;
// const fn =function(value){
//   const isValue = Number(value);
//     const ifValue =Number(value) || a;
//     if (!Number.isNaN(ifValue)){
//       console.log(ifValue+10);
//     } else {
//       console.log('value is Nan')
//     }
//   }

//   fn();



/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
let checkNumberType = function(num){
return(num%2 === 0) 
  ? 'Even' 
: 'Odd';
};
console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'


// const printMessage = function(callback) {
//   const message = callback();
//   console.log(message);
// };

// const getMessage = function(){
//   return "welcome to the jungle!";
// }; 

// printMessage(getMessage);

// const auth = (email,pass) => ({email:email,password:pass})
// facebook.login(auth());

/*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/







// // Вызовы функции для проверки
// function formatString(str, max)= 

// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка


// function formatString(str, max){
//   max=40;
//   if (str.length > max) {
//     return str.slice(0, max - 3) + "...";
//   }
//   return str;
// }
// console.log(
//   formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//   formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//   formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка



/*
  Напишите функцию checkForSpam(str)
  
  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale
  
  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false
  
  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
function checkForSpam(str){
  // let spamSTR = str.toLowerCase();
  // return (!!~spamSTR.indexOf('spam') || ~spamSTR.indexOf('sale')) ? true:false;
return (str.toLowerCase().includes('spam') || str.toLowerCase().includes('sale'));
}
console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true

/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// Вызовы функции для проверки

// function getPx(str){
//   let getAnotherstr = Number.parseFloat(str)
//   return(typeof str === 'string') ? getAnotherstr : null
  //   if (typeof str === 'string'){
  //   let getAnotherstr = Number.parseFloat(str)
  //   return getAnotherstr
  // } else{
  //  return 'null'
  // }
function getPx(str){
  if(typeof str === "string" ){
    return parseFloat(str)
  }
  else{
    return null
  }
}

console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null




//
const map = (arr, callback) => {
  const resultArr = [];

  for(const element of arr) {
    const result = callback(element);
    resultArr.push(result);
  }

  return resultArr;
};

const double = val => val * 2; 

const triple = val => val * 3;

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const tripledNumbers = map(numbers, triple);
console.log(tripledNumbers); // [3, 6, 9, 12, 15]

/*  
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы,
  символы букв и цифр!
*/

// arr[1]; // i = 1
// arr[2]; // i =  2 


// Вызовы функции для проверки
const findLongestWord=
function findLongestWord(str){
  const arr = str.split(' ');
  let maxlen = '';
  // for(let i=0; i<arr.length; ++i){
    // console.log(i);
    // console.log(arr[i]);
  //   if(arr[i].length >  maxlen.length) {
  //     maxlen=arr[i]
  //   } 
  // }
  for(const el of arr) {
    if(el.length >  maxlen.length) { 
      maxlen = el;
    }
  }
  return maxlen
}
console.log(
  findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
  findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
  findLongestWord("May the force be with you")
); // вернет 'force'

/*
  Напишите функцию filterFromArray(arr), которая 
  объявляет 1 параметр, исходный массив arr.
  
  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел. 
  
  Функция возвращает новый массив, который содержит только 
  те элементы исходного массива, которые не совпадают 
  ни с одним из числовых аргументов.
*/

// const filterFromArray = (...arr) => {
//   const newArr = arr[0];
//   arr.shift();
//   const newArr2 = arr;
//   for (const number of newArr2){
//     if (newArr.includes(number)){
//       newArr.splice(newArr.indexOf(number), 1);
//     }
//   }
  
/*  
  Есть массив уникальных чисел uniqueNumbers.
  
  Написать функцию, addUniqueNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

const uniqueNumbers  = [2, 1, 4, 9];
function(number){
  
}

// Вызовы функции для проверки
addUniqueNumbers(1, 2, 3);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3]

addUniqueNumbers(12, 2, 3, 19);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19]

addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
console.log(
  uniqueNumbers
); // [2, 1, 4, 9, 3, 12, 19, 5, 8]
//   console.log(newArr);
// }; 

// // Вызовы функции для проверки
// console.log(
//   filterFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]

// console.log(
//   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]


/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/
const findLargestNumber = function(numbers){
  let maxNum = 0;
  for ( const number of numbers) {
    if( number > maxNum) {
      maxNum = number
    } 
  } return maxNum
};
// Вызовы функции для проверки
console.log(
  findLargestNumber([1, 2, 3])
); // вернет 3
console.log(
  findLargestNumber([27, 12, 18, 5])
); // вернет 27
console.log(
  findLargestNumber([31, 128, 14, 74])
); // вернет 128
