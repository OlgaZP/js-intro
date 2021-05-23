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