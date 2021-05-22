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
