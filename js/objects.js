// declare objects

const obj1 = {};
const obj2 = Object();
const obj3 = new Object();

const cat1 = {
    name: 'Vasiliy',
    color: 'red',
    isMale: true,
};
console.log('cat1:>>', cat1);

const cat2 = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDamage: true,
};
console.log('cat1:>>', cat2);

cat1.breed = 'Siamic';
console.log('cat1:>>', cat1);

cat1.name = 'Vas';
console.log('cat1:>>', cat1);

// const property = prompt('Input property: ');
// alert(cat1[property]);

const property1 = 'color';
// alert(cat1[property1]);

const property3 = 'name';
const cat3 = {
    [property3]: 'Murka',
};

console.log('cat3: >>', cat3);

const whoIs = {
    name: 'Steve',
    lastName: 'MacLauren',
    age: 25,
    isMale: true,
    weight: 70,
    height: 180,
    phoneNumber: '+380500000000',
    //inner object!
    location: {
        city: 'New York',
        country: 'USA',
    },
    //calculate property = method
    bmi () {
        return this.weight / (this.height / 100) **2;
    },
    fullName () {
        return this.name + ' ' + this.lastName;
    },
};
console.log('whoIs:>>', whoIs);
console.log('bmi if whoIs', whoIs.bmi());
console.log('full name if whoIs', whoIs.fullName());

//constraction functions for cats
/**
 * 
 * @param {*} catName 
 * @param {*} color 
 * @param {*} isMale 
 * @param {*} isFurnitureDamage 
 * @constructor
 */
function Cat(catName, color, isMale, isFurnitureDamage) {
    this.name = catName;
    this.color = color;
    this.isMale = isMale;
    this.isFurnitureDamage = isFurnitureDamage;
    this.meow= function() {
        console.log('MEOW!!!');
    }

}

const cat4 = new Cat('Rizhik', 'red', true, false);
const cat5 = new Cat('Simka', 'white', false, true);
cat4.meow();
cat5.meow();


function PersonInfo (name, nickname, age, male) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.male = this.male;
}

const human = new PersonInfo('James', '007', 35, true);
console.log('persinInfo:>>', human);

/******************** */
 const sparrow = {
     name: 'Jack',
     age: 2,
     fly() {
         console.log('Fly-fly! ' + this.name);
     },
     rename(newName) {
         this.name = newName;
     }
 }
console.log('test method');
sparrow.fly();
console.log('old name:>>', sparrow)
console.log('test rename method');
console.log('old name:>>', sparrow);
sparrow.rename('New Jack');
console.log('new name:>>', sparrow)


const sparrowChild = {
    name: 'Jack Junior',
    age: 1,

}
//добавление метода или свойства к существующему объекту
sparrowChild.mother = 'Sparrow mother';
//копируем функцию во второй объект
sparrowChild.fly = sparrow.fly; 
console.log('test child method');
sparrowChild.fly();

function Monkey (name) {
    this.name = name;
}

const monkey1 = new Monkey('King Kong');
const monkey2 = new Monkey('King Kong Jr');