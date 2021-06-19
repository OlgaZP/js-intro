'use strict';

function sum(a, b) {
    return a+b;
}

const sum2 = (a, b) => a+b;


const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(item => item % 2 === 0);
console.log('evenNumbers :>> ', evenNumbers);

const square = n => Math.pow(n, 2);
const b = square(3);
console.log('b :>> ', b);

function f() {
    console.log('this :>> ', this);

}
f();
const obj = {
    name: 'Vasia',
    getName () {
        console.log('this.name :>> ', this.name);
        console.log('this getName :>> ', this);
    },
    getAge: () => {},
}

obj.getName();
//debugger;
obj.getAge();

console.log('this global :>> ', this);


function f() {
    console.log('this f :>> ', this);
};

f();

const arrFunc = () => {
    console.log('this arrow :>> ', this);
    console.log('arguments arrow :>> ', arguments);
};

arrFunc();

//arguments
//debugger;
sum(1, 2, 3, 4);
//вызовет функцию, но зайдут только два параметра объявленные

function sumInfArgs () {
    console.log('arguments :>> ', arguments);
    //проходим по всем параметрам и суммируем значения
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
sumInfArgs(1, 2, 3, 4);
//при таком варианте ВСЕ аргументы заходят внутрь функции
//аргументы не массив, а массивоподобная коллекция
console.log('sumInfArgs(1, 2, 3, 4) :>> ', sumInfArgs(1, 2, 3, 4));