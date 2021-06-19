'use strict';

function Car (brand, model, type, year, km) {
    if (!new.target) {
        return new Car;
    }
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.km = km;
}

const carProto = new Car();

carProto.info = function () {
    return `${this.brand} ${this.model}`;
};

carProto.changeKM = function (newKM) {
    this.km = newKM;
 //   return;
};

Car.prototype = carProto;

const myCar = new Car('Audi', 'Q5', 'sedan', 2017, 200000);
const husbandCar = new Car('Hundai', 'Tucson', 'crossower', 2020, 100000);

/**************************** */
const parrot = {
    name: 'Kesha',
    color: 'multicolor',
    speak(phrase) {
        console.log(`${this.name} say... ${phrase}`);
    }
}

const parrotWavy = Object.create(parrot);
parrotWavy.name = 'Kesha Jr';
parrotWavy.wavy = true;

/**************/
// определить объект пассажирский транспорт на основе ТС

const TS = {
    model: 'qq',
    color: 'yellow',
    year: 2010,
    regNum: 'AA 2323 DD',
    getInfo () {
        return `TS is :>> ${this.model} manufactured ${this.year} and registration ${this.regNum}`;    
    },
    changeRegNum (newNum) {
        this.regNum = newNum;
    }

}

const passTS = Object.create(TS);
passTS.model = 'Sprinter';
passTS.color = 'white';
passTS.regNum = 'EE 3434 FF';
passTS.passCount = 18;
passTS.addPassCount = function (addPass) {
    this.passCount = this.passCount + addPass;
}



