//short declaration
const arr1 = [1, 2, 3, 4, 5];
// long declaration
const arr2 = new Array();

//ниже два идентичных объекта
const myArr = [1, true, 3, 4, 5];
const myArray = {
    0: 1,
    1: true,
    2: 3,
    3: 4,
    4: 5,
    length: 5,
    myPop () {
        if (this.length === 0) {
            return;
        }
        const lastItem = this[this.length-1];
        delete this[--this.length];        
        return lastItem;
    },
    myPush (item) {
        this[this.length] = item;
        return ++this.length;
    },
    myShift () {
        if (this.length === 0) {
            return;
        }
        const firstItem = this[0];
        for (let i = 0; i < this.length -1; i++) {
            this[i] = this[i+1];
        }
        this.myPop();
        return firstItem; 
    }   
}

const myArray2 = {
    0: 1,
    1: 2,
    length: 2,
}
myArray2.myPop = myArray.myPop;
myArray2.myPush = myArray.myPush;
myArray2.myShift = myArray.myShift;

const arr3 = [1, 2, 3, 4, 5];
//ищем сумму всех элементов
let sum = 0;
for (let i = 0; i<arr3.length; i++) {
    console.log(`a[${i}]:>>`, arr3[i]);
    sum += arr3[i];
}
console.log(`sum is:>>`, sum);

// some array's methods

//методы перебора массивов
//forEach
const arr4 = [1, 2, 3, 4, 5];
arr4.forEach(showItem);

function showItem(currItem, index, array) {
    console.log(`arr4[${index}] = ${currItem}`);
}

const arr5 = [{}, {}, {}, {}];

arr5.forEach(f);

function f(currItem, index, array) {
    currItem.property = 'prop1';
    currItem.property1 = 'prop2';
}

//some
const arr6 = [1, 3, 4, 6, 10, 11];

arr6.some(isEven);
console.log('arr6.some(isEven) :>>', arr6.some(isEven));

function isEven (currItem, index, arr) {
    return currItem % 2 === 0;
}

function isOdd (element) {
    return element %2 !== 0;
}

//every
console.log('arr6.every(isEven) :>>', arr6.every(isEven));

//filter
const arrEvenItem = arr6.filter(isEven);
const arrOddItem = arr6.filter(isOdd);

