'use strict';

//не работает, потому что объект не итерируемый
// const obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
// };
// for(const curr of obj) {
//     console.log('curr :>> ', curr);
// }

const str = new String('test string iteration');
for (let ch of str) {
    console.log('ch :>> ', ch);
}

const arrForMap = [
    [1, 'string'],
    [function(){}, {}],
    [Symbol(), 'abc']];
const map3 = new Map(arrForMap);
console.log('map3 :>> ', map3);

//пример как из любого итерируемого объекта создать массив
const adresses = new Map();
adresses.set('Person1', 'Street 1');
adresses.set('Person2', 'Street 2');
adresses.set('Person3', 'Street 3');

const arrFrom = Array.from(adresses);
console.log('arrFrom :>> ', arrFrom);

//итератор!

//реализуем с помощью итератора метод, который возвращает объект, //что имеет метод next в формате аналогичном итератору
class Range {
    constructor(from, to) {
        this._from = from;
        this._to = to;
    }
    [Symbol.iterator]() { //вычисляемое свойство, поэтому в квадратных скобках
        let currentValue = this._from;
        return {
            next: () => {
                if (currentValue > this._to) {
                    return {
                        value: undefined,
                        done: true
                    }
                }
                return {
                    value: currentValue++,
                    done: false
                }
            }
        }

    }

}

const rangeTest = new Range(1, 5);
for (const item of rangeTest) {
    console.log('item :>> ', item);
}

const arrFromRange = Array.from(rangeTest);
console.log('arrFromRange :>> ', arrFromRange);

//оператор распределения или spread оператор
const arr009 = [1, 2, 3, 4, 5, 6];
const arr010 = [...[arr009]];

const arr011 = [...'test spread operator and add to array'];
console.log('arr011 :>> ', arr011);

const arr012 = [...adresses];
console.log('arr012 :>> ', arr012);

const arr013 = [7, 8, 9, 10];
const arr014 = [...arr009, ...arr013];
console.log('arr014 :>> ', arr014);

const keys = [...adresses.keys()];
console.log('keys :>> ', keys);