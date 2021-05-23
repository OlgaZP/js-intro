'use strict';

function f(n) {
    return n*f(n-1);
}

//f(10);
console.log('before try :>> ');
try {
    //блок кода, где омжет возникнуть ошибка
    console.log('in try before error :>> ');
    f(10);
    //const x = y / 5;
    console.log('in try after error :>> ');
} catch (error) {
    //перехват ошибки
    console.dir(error);

}

console.log('after try :>> ');

/******************************* */
function f(n) {
    if (typeof n !== 'number') {
        throw new TypeError('The argument must be natural number');
    }
    if (!Number.isSafeInteger(n) || n < 0) {
        throw new RangeError('The argument must be a positive integer');
    }
    if (n === 0) {
        return 1;
    }
    return n*f(n-1);
}

try {
    console.log('before integer error :>> ');
    f(-3);
    console.log('before integer error :>> ');
} catch (err) {
    console.error(err);
}
console.log('after f :>> ');

/**************** */
//v - number, v>=0, v<=150
function validateValue(v) {
    if (typeof v !== 'number') {
        throw new TypeError('The argument must be a number');
    }
    if (v < 0 || v > 150) {
        throw new RangeError('The argument only from 0 to 150');
    }
    console.log(`Confratularions! Your input value is ${v}`);
}

console.log('before validation :>> ');
const inputValue = 'aa';
try {
    const value = validateValue(inputValue);
    console.log('correct value is :>> ', inputValue);
} catch (err) {
    if (err instanceof TypeError) {
        alert('Please, input a number value!');
    }
    if (err instanceof RangeError) {
        alert('Please, input value between 0 and 150');
    }
    console.error(err instanceof RangeError);
}

console.log('after validation :>> ');