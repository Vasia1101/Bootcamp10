'use strict'
let userInput;
const numbers = [];
let total = 0;
do {
  userInput=Number(prompt('Введіть любе число'));
  if (isNaN(userInput))
  {
alert('Было введено не число, попробуйте еще раз')
  } else 
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
