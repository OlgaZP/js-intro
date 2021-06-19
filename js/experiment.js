'use strict';

const a = 5;
console.log('a :>> ', a);

function aa() {
    console.log('this :>> ', this);
}

aa();

/************ */
function Car(brand) {
    if (!new.target) {
        return new Car(brand);
    }
    console.log('new.target :>> ', new.target);
    this.brand = brand;
}

//set function to constraction mode
const car1 = new Car('Tesla');

const car2 = Car('KIA');

/************** */
//пример как передавать функцию как параметр в другую функцию
function sayHello(callback, phrase) {
    if (typeof(callback) === 'function')
    callback(phrase);
}

sayHello(console.log, 'Hello, world! console');
sayHello(alert, 'Hello, world! alert');
sayHello('Hello, world! error', 'Hello, world! error');

//запись и вызов анонимной функции
(function(){console.log('test')})();
