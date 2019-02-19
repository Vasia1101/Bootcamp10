'use strict'

// const clients = ["Mongo", "Poly", "Ajax"];
// // console.log(clients[0]);
// // console.log(clients[1]);
// // console.log(clients[2]);
// // clients[3]="Alex";
// // console.log(clients[3]);
// // clients.length = 2;
// // console.log(clients.length);
// // console.log(clients);
// const message = "Welcome to Bahamas!"
// console.log(message.split(" "));
// console.log(message.split(""));
// console.log (clients.join(""));
// console.log(clients.join(","));
// console.log(clients.join("-"));
// console.log(clients.indexOf("Poly"));
// console.log(clients.indexOf("Monkong"));
// console.log(clients.includes("Poly"));
// console.log(clients.includes("Mankof"));
// clients.push("Margo");
// clients.unshift("Sergio");
// console.log(clients);
// clients.pop();
// clients.shift();
// console.log(clients);
// const bests=clients.slice(0,3);
// console.log('bests', bests);


const clients = ["Mongo", "Poly", "Ajax", "romeo", "Gringo"];
// clients.splice(0,3);
// console.log(clients);

// clients.splice(1,0, "Evhen", "Artem");
// console.log(clients);

// clients.splice(5,2, 'Phyton');
// console.log(clients);

// const newClients=["Adam", "Franklin"];
// const newArr=clients.concat(newClients);
// console.log('newArr', newArr);

// console.log(newArr.reverse());

// console.log('isArray:', Array.isArray(newArr));






/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string
  
  PS: для перебора массива используте цикл for или for...of
*/

// let string=("Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr");
// let arr;

// // Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
// arr = string.split(' ');
// console.log(arr);

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for (let i=0; i<arr.length; i +=1){
// console.log(i);}

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let i=0; i<arr.length; i+=1){
// console.log(arr[i]);}

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (const i of arr){

// console.log(arr.indexOf(i)+":"+i);
// }
/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100. 
  
   Если посетитель ввёл другое число или нажал Cancel – попросить ввести ещё раз, 
   и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод 
  вроде строк 'qweqwe' в этой задаче необязательно.
  
  PS: используйте цикл do...while
*/
// let input = 0;
// do {
//     input = Number(prompt('ввести число больше 100', ''));
//  }
//  while (input<=100);


//  const min = 1;
// const max = 100;
// for (let i=min; i<max; i+=1){
//   if (i % 3 === 0) 
//     {console.log('Fizz');
// }
//     else if (i % 5 === 0 && i % 3 !== 0) 
//     {console.log('Buzz')
// }
//     else{
//         console.log(i);
//     }
// }

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];
// for (const index of numbers){
//    if(index > num) {
//        newArray.push(index);
//    }
// }
// console.log(newArray);

/*
  Напишите скрипт, который проверяет произвольную строку 
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

const string = "May the force be with you";
let longestWord;
const newArray = string.split(" ");
longestWord =newArray[0];
for (const value of newArray){
    if (value.length > longestWord.length){
        longestWord=value;
    }
}
console.log(longestWord); // 'force'

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let arr =[];
// let ask;
// let sum=0;
// do {
//     ask=Number(prompt('enter number'));
//     if (ask !== 0){
//     arr.push(ask);}
//     console.log(ask);
//     console.log(arr);
// } while(ask);

// if (arr.length !== 0){
//     for (const iteration of arr){
//         sum += iteration;
//     }
// }
// console.log('The sum is:' + sum);

/*
  ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ***
  
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// let arr =[];
// let ask;
// let sum=0;
// do {
//     ask=Number(prompt('enter number'));
//     if (ask !== 0){
//     arr.push(ask);}
//     console.log(ask);
//     console.log(arr);
// } while(ask);

// if (arr.length !== 0){
//     for (const iteration of arr){
//         sum += iteration;
//     }
// }
// console.log('The sum is:' + sum);

let userInput;
const numbers = [];
let total = 0;
do {
  userInput=Number(prompt('Введіть любе число'));
  if (userInput !==0)
  {
    numbers.push(userInput);
  }
  console.log(userInput);
  console.log(numbers);
  }while(userInput);
if (numbers.length !==0) {
  for (const k of numbers){
    total += k;
  }
}
console.log('Общая сумма чисел равна: '+ total);
  
