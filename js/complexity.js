'use strict';

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 

const value = 4;

//динейный поиск заданного элемента, сложность O(n)
function search(value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log('search(19) :>> ', search(19));

//вывод таблицы умножения, сложность O(n^2)
function multTable(n) {
    for (let i = 1; i<= n; i++) {
        for (let j = 1; j<=n; j++) {
            console.log(`${i} * ${j} = ${i*j}`);
        }
    }
}

multTable(9);

//возведение в степень в цикле, сложность O(n) по exponent по времени
// и О(1) по памяти
function powLoop (base, exponenta) {
    let result = 1;
    for (let i = 1; i <=exponenta; i++) {
        result *= base;
    }
    return result;
}

console.log('powLoop(2, 5) :>> ', powLoop(2, 5));

//рекурсивное возведение в степень, сложность O(n) по exponent по времени
// и О(n) по exponent по памяти
function powRec(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * powRec(base, exponent - 1);
}

console.log('powRec(2, 5) :>> ', powRec(2, 5));

//пример алгоритма сложности O(log n)
//дихотомический (бинарный) поиск
function binarySearch (arr, value) {
    let start = 0;
    let end = arr.length - 1;
    do {
        let middle = Math.ceil((start + end) / 2);
        if (value === arr[middle]) {
            return middle;
        }
        if (value < arr[middle]) {
            end = middle - 1;
        }
        if (value > arr[middle]) {
            start = middle + 1;            
        }
    } while (start <= end);
    return -1;
}

console.log('binarySearch(arr, 8) :>> ', binarySearch(arr, 8));
console.log('binarySearch(arr, 4) :>> ', binarySearch(arr, 4));
console.log('binarySearch(arr, 0) :>> ', binarySearch(arr, 0));
console.log('binarySearch(arr, 9) :>> ', binarySearch(arr, 9));