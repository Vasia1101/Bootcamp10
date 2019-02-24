'use strict'
const user = {
    name:'Frank',
    age:21,
    male:true,
getInfo:  function(){
    return `name: ${this.name} age:${this.age} male:${this.male}`
},
};

console.log(user.name);
console.log(user["age"]);
console.log(user['male']);

user.age = 26;
user.height = 180;

console.log('user', user);
console.log(user.getInfo());

delete user.male;
console.log(user.male);

// for (const key in user){
//     console.log(`$(key): ${user[key]}`);
// };

const casino = {
    1:[1, 5, 20],
    2:[50, 100],
};

const userArr = Object.entries(user);
console.log(userArr);

for (const el of userArr) {
    console.log (`${el[0]}:${el[1]}`);
}

const first = {name: 'Tony'};
const last = {lastName: 'Stark'};

const person = Object.assign(first, last);
console.log(person); // {name: 'Tony', lastName: 'Stark'}

// target (first) тоже изменился
console.log(first); // first = {name: 'Tony', lastName: 'Stark'}



const a = {x: 1, y: 2};
const b = {x: 0, z: 3};

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}

// То же самое используя оператор spread ...
const c = { ...a, ...b };

console.log(c); // {x: 0, y: 2, z: 3}