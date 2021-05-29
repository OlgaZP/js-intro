'use strict';

//arguments
//устаревший враиант записи
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

console.log('sum(1, 2, 3, 4) :>> ', sum(1, 2, 3, 4));

//лучше делать так через рест параметры
function sumRest(first, ...args) {
    return args.reduce((accum, item) => accum + item, first);
}

console.log('sumRest(1, 2, 3, 4) :>> ', sumRest(1, 2, 3, 4));