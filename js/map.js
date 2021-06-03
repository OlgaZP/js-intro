'use strict';

const map1 = new Map();
map1.set('key1', 'value1');
console.log('map1.get(\'key1\') :>> ', map1.get('key1'));

const vocabulary = new Map();

vocabulary.set('cat', 'кошка');
vocabulary.set('dog', 'собака');
vocabulary.set('doggy', 'собачка')
vocabulary.set('run', 'бегать');
vocabulary.set('jump', 'прыгать');
//vocabulary.set('cat', 'кот'); //изменяет значение с указанным ключем

console.log('vocabulary.get(\'dog\') :>> ', vocabulary.get('dog'));
console.log('vocabulary.has(\'cat\') :>> ', vocabulary.has('cat'));
console.log('before delete :>> ', vocabulary);
vocabulary.delete('doggy');
console.log('after delete :>> ', vocabulary);

//задание
const adresses = new Map();
adresses.set('Person1', 'Street 1');
adresses.set('Person2', 'Street 2');
adresses.set('Person3', 'Street 3');

//find adress of person 1
console.log('adresses.get(\'Person2\') :>> ', adresses.get('Person2'));

//есть ли адрес сотрудника Person5
console.log('adresses.has(\'Person5\') :>> ', adresses.has('Person5'));

//обход коллекции в цикле
for (const item of adresses) {
    console.log('item :>> ', item);
}

for (const keys of adresses.keys()) {
    console.log('keys :>> ', keys);
}

for (const values of adresses.values()) {
    console.log('values :>> ', values);
}

console.log('test callback for map :>> ');
function forEachCallback(value, key, map) {
    console.log(`${value} ${key}`);
}
adresses.forEach(forEachCallback);

//задание по словарю - получить перевод строки
//задаем череуз стрелочную функцию и цепочки!!!!
const translator = str => 
    str
        .split(' ')
        .map(item => vocabulary.get(item))
        .join(' ');    
    
const engStr = 'dog run cat';
console.log('translator(engStr) :>> ', translator(engStr));



