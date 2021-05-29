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
console.log('myCar.getFullWeight :>> ', myCar.fullWeight);
console.log('UserClass.isUser(myCar) :>> ', UserClass.isUser(myCar));
console.log('Car.isCar(myCar) :>> ', Car.isCar(myCar));
console.log('Car.isCar(user1) :>> ', Car.isCar(user1));

/************************************** */
//new lesson
//базовый класс/родитель
class NewUser {
    constructor (name, surname, age, email, isBanned = false) {
        this.firstName = name;
        this.lastName = surname;
        this.age = age;
        this.email = email;
        this.isBanned = isBanned;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;        
    }

    set age(val) {
        //validate age
        this._age = val;
    }
    get age() {
        return this._age;
    }
}

//пример описания статического метода вне класса
NewUser.isNewUser = function (obj) {
    return obj instanceof NewUser;
}

//наследование
//дочерний класс/потомок, который включает все свойства и методы базового класса и плюс свои дополнительные
class Moderator extends NewUser {
    constructor(name, surname, age, email, permission) {
        //вызов конструктора базового класса
        super(name, surname, age, email);
        this.permission = permission;
    }

    sendMessage(user, message) {
        //sending message
        console.log('WAIT! SENDING MESSAGE... ');
    }
}

//еще один пример класса, наследник наследника
class Administrator extends Moderator {
    constructor(name, surname, age, email, permission = {}) {
        super(name, surname, age, email, permission);
    }

    ban(user) {
        user.isBanned = true;
    }

    reBan(user) {
        user.isBanned = false;
    }
}

const userN1 = new NewUser('UserName', 'Usersurname', 10, 'usermail@gmail.com');
userN1.age = 55;
console.log('userN1._age :>> ', userN1._age);
console.log('userN1.age :>> ', userN1.age);

const moder1 = new Moderator('nameModer', 'surnameModer', 22,'moder@gmail.com', {});
console.log('moder1 :>> ', moder1);
moder1.sendMessage(userN1, {body: 'message text'}); //в качестве 2го параметра объект
console.log('moder1.getFullName() :>> ', moder1.getFullName());
const admin = new Administrator('nameAdmin', 'surnameAdmin', 22, 'adminmail@gmail.com');
console.log('admin :>> ', admin);
admin.ban(userN1);
console.log('banned userN1 :>> ', userN1.isBanned);
admin.reBan(userN1);
console.log('re-banned userN1 :>> ', userN1.isBanned);

//new classes for testing extends

class Squirell {
    constructor(name) {
        this._name = name;
    }

    eat(food) {
        console.log(`Squirell ${this._name} is etting ${food}`);
    }

    run() {
        console.log(`Squirell ${this._name} is running`);
    }
}

class FlyingSquirell extends Squirell {
    constructor(name, distance = 0) {
        super(name);
        this._distance = distance;
    }

    fly (dist) {
        console.log(`This flying squirell ${this._name} can fly up to ${this._distance} m`);
    }
    //пример переопределения метода при наследовании
    eat() {
        console.log(`Squirell ${this._name} ets only nuts!`);
    }
}

const squirell = new Squirell('SquirellA');
console.log('squirell :>> ', squirell);
squirell.run();
squirell.eat('nuts');

const squirellF = new FlyingSquirell ('SquirellF', 50);
console.log('sqiuirellF :>> ', squirellF);
squirellF.run();
squirellF.eat();
squirellF.fly(50);

/*********************************** */
class Figure {
    constructor(name) {
        this._name = name;
    }

    getS() {
        return null;
    }
}

class Triangle extends Figure{
    constructor(a, b, c) {
        super('triangle');
        this._a = a;
        this._b = b;
        this._c = c;
    }

    getS() {
        const p = (this._a + this._b + this._c) / 2;
        return Math.sqrt(p * (p - this._a) * (p - this._b) * (p - this._c));
    }
}

class Square extends Figure {
    constructor(a) {
        super('square');
        this._a = a;
    }

    getS() {
        return Math.pow(this._a, 2);
    }
}

const t = new Triangle(3, 4, 5);
console.log('Striangle =', t.getS());
const f = new Figure('figure');
console.log('Sfigure :>> ', f.getS());
const sq = new Square(4);
console.log('Ssquare =', sq.getS());

function getFigureS(figure) {
    if (figure instanceof Figure) {
        return figure.getS();
    }
    throw new TypeError();
}