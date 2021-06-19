'use strict';

const set1 = new Set();

set1.add(5);
set1.add(5); // это команда не выполнится, т.к. уже есть этот элемент уже есть в множестве
set1.add(10);
set1.add(15);
set1.add(55);
console.log('set1.size :>> ', set1.size);
console.log('set1.has(5) :>> ', set1.has(5));
console.log('set1.has(6) :>> ', set1.has(6));
console.log('set1.values() :>> ', set1.values());

const arrFromSet = [...set1.values()];
console.log('arrFromSet :>> ', arrFromSet);

const mapFromSet = new Map([...set1.entries()]);
console.log('mapFromSet :>> ', mapFromSet);

set1.delete(5);
console.log('set1 :>> ', set1);

set1.forEach((v1, v2, set) => {console.log(`${v1} ${v2}`);});

set1.clear();
console.log('set1 :>> ', set1);

//задача - получить из массива с повторяющимися элементами массив с уникальными элементами
const arr = [1, 1, 1, 1, 2, 3, 2, 4, 2, 1, 1, 3, 4, 5];
const arr1 = [3, 3, 5, 5, 1, 2, 2, 2];
const setUnique = new Set([...arr, ...arr1]);
console.log('setUnique :>> ', setUnique);
//теперь из множества получаем снова массив
const arrUnique = [...setUnique];
console.log('arrUnique :>> ', arrUnique);