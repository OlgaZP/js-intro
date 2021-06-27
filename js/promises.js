'use strict';

fetch('./../dbUser.json')
    .then (response => response.json())
    .then (data => {
        console.log('data :>> ', data);
        //оборачиваем непромис в промис чтобы передать дальше по цепочке
        return Promise.resolve(data);
})
.then (newData => {
    console.log('newData :>> ', newData);
})
.catch(err => {
    console.error(err);
})
.finally(()=>{console.log('in finally block');});

//исопльзуем конструктор промиса
// new Promise(executor).then().catch();

// function executor(resolve, reject) {
//    // resolve(data);
//    // reject(error);
// }



console.log('fetch :>> ', fetch('./../dbUser.json'));

// fetch('./../dbUser.json')
//     .then(response => response.json())
//     .then(data => console.log('data :>> ', data))
//     .catch(e => console.error(e));


const isEnoughMoney = false;
const promiseCar = new Promise((resolve, reject) => {
    if (isEnoughMoney) {
        const newCar = {brand: 'BMW', model: 'X100'};
        resolve(newCar);
    } else {
        reject(new Error('Work hard!'));
    }
});
promiseCar
    .then(data => {
        console.log('data :>> ', data);
    })
    .catch(err => {
        console.log('err :>> ', err);
    });

//примисифицируем setTimeout()
//типичный пример
//setTimeout(callback, 1000);
//примисифицированный колбек
delay(1000).then(() => {
    console.log('Hi after 1s :>> ');
});

function delay(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms)
    });
}

const switcher = Math.trunc(Math.random() * 100);
const mathPromise = new Promise((resolve, reject) => {
    switcher < 50 ? resolve(switcher) : reject (new Error('Switcher is greater then 50'));
});

mathPromise
    .then (data => {
     console.log('Your number is :>> ', data);
    })
    .catch (err => {
      console.log('Warning!! Error! :>> ', err);
    });