'use strict';

const obj = {
    length: 15,
    isMale: true,
    getLength() {return this.length;
    },
};
console.dir(obj);
//как получить json из объекта
const serialazedObj = JSON.stringify(obj);
console.log(serialazedObj);
//десериализазция
const deserializedObj = JSON.parse(serialazedObj);
console.dir(deserializedObj);

const car = {
    year: 2010,
    model: 'KIA Sportage',
    hasAssurance: true,
    previousOwner: undefined,
    getYear () {
        return this.getYear;
    },
    [Symbol]: 'vin number',
    owner: {name: 'James', lastName: 'Bond', age: 27},
    changedDetails: [ {type: 'aaa', year: 2015, isNew: true}, {type: 'bbb', year: 2017, isNew: false}],

}
console.log('Car serialization :>> ');
console.log('Start object :>> ');
console.dir(car);

const serializedCar = JSON.stringify(car);
console.log('Serialized object :>> ');
console.log(serializedCar);

const deserializedCar = JSON.parse(serializedCar);
console.log('Deserialized object :>> ');
console.dir(deserializedCar);


