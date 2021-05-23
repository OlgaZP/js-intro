'use strict';

function User (name, surname, age) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
}

const protoUser = new User ();

protoUser.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

User.prototype = protoUser;

const user1 = new User('Vasia', 'Pupkin', 30);
console.log('user1.getFullName() :>> ', user1.getFullName());
console.dir(user1);

/**************************** */
//тоже самое примерно что и вверху, но с использованием классов
//класс - расширенный объект, у которго есть конструктор и логика вынесена в методы

class UserClass {
    constructor(name, surname, age) {
        this.firstName = name;
        this.lastName = surname;
        this.age = age; //в этом месте вызывается сеттер        
    }

    getFullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    set age(value) {
        if (typeof value !== 'number') {
            throw new TypeError('Age must be a number');
        }
        if (value < 0 || value > 150) {
            throw new RangeError('Incorrect age');
        }
        this._age = value;
    }

    get age () {
        return this._age;
    }

    //статический метод, т.е. тот, который применяется не к 
    //конкретному экземпляру класса, а ко всему классу
    static isUser(obj) {
        return obj instanceof UserClass;
    }
}


try {
    const user2 = new UserClass('Test', 'Ivanovich', 3);
    console.dir(user2);
    //console.log('user2.getFullName() :>> ', user2.getFullName());
    user2.age = 100;
    console.log('user2.age :>> ', user2.age);
} catch (err) {
    console.error(err);
}

const user3 = new UserClass('Test', 'Ivanovich', 3);
const a = 5;
console.log('UserClass.isUser(user3) :>> ', UserClass.isUser(user3));
console.log('UserClass.isUser(a) :>> ', UserClass.isUser(a));

//example

class Fuel {
    constructor (weight) {
        this.weight = weight;
    }
}

class Car {
    constructor(brand, model, year, weight, fuel) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.fuel = fuel;
    }

    getFullInfo () {
        return `${this.brand} ${this.model} ${this.year}`;
    }

    getFullWeight () {
        return this.weight + this.fuel.weight;
    }
    //для вычисляемого свойства можно использовать геттер
    get fullWeight() {
        return this.weight + this.fuel.weight;
    }

    set year(manufactured) {
        if (typeof manufactured !== 'number' || !Number.isSafeInteger(manufactured)) {
            throw new TypeError('Year must be an integer number');
        }
        const currYear = new Date();
        if (manufactured < 1886 || manufactured > currYear.getFullYear()) {
            throw new RangeError('Incorrect manufactured year');
        }
        this._year = manufactured;
    }

    get year () {
        return this._year;
    }

    static isCar(obj) {
        return obj instanceof Car;
    }
}

const myCar = new Car('KIA', 'Sportage', 2000, 2000, new Fuel(45));
console.dir(myCar);
console.log('myCar.getFullInfo() :>> ', myCar.getFullInfo());
console.log('myCar.getFullWeight() :>> ', myCar.getFullWeight());
myCar.year = 2020;
console.log('myCar.getFullInfo() :>> ', myCar.getFullInfo());
console.log('myCar.getFullInfo() :>> ', myCar.fullWeight);
console.log('UserClass.isUser(myCar) :>> ', UserClass.isUser(myCar));
console.log('Car.isCar(myCar) :>> ', Car.isCar(myCar));
console.log('Car.isCar(user1) :>> ', Car.isCar(user1));