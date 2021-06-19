'use strict';

fetch('./../dbUser.json')
    .then(response => response.json())
    .then(data => console.log('data :>> ', data))
    .catch(e => console.error(e));


const isEnoughMoney = true;
const promiseCar = new Promise((resolve, reject) => {
    if (isEnoughMoney) {
        const newCar = {brand: 'BMW', model: 'X100'};
        resolve(newCar);
    } else {
        reject(new Error('Work hard!'));
    }
});