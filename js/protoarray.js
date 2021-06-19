'use strict';

function MyArray () {
    if (!new.target) {
        return new MyArray();
    }
    this.length = 0;     
}

const myArrayProto = new MyArray();

myArrayProto.myPop = function () {
    if (this.length === 0) {
        return;
    }
    const lastItem = this[this.length-1];
    delete this[--this.length];        
    return lastItem;
};

myArrayProto.myPush = function (item) {
    this[this.length] = item;
    return ++this.length;
};

myArrayProto.myShift = function () {
    if (this.length === 0) {
        return;
    }
    const firstItem = this[0];
    for (let i = 0; i < this.length -1; i++) {
        this[i] = this[i+1];
    }
    this.myPop();
    return firstItem; 
};

myArrayProto.myFilter = function (callback) {
    const returningArr = new MyArray();
    for (let i =0; i<this.length; i++) {
        if (callback(this[i], i, this)) {
            returningArr.myPush(this[i]);
        }
    }
    return returningArr;
};
//arr3.filter(isEven);

//create new prototype
MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
const myArr2 = new MyArray();

function isEven (item, i, arr) {
    return item % 2 === 0;
}

const myArr3 = new MyArray();
myArr3.myPush(1);
myArr3.myPush(2);
myArr3.myPush(3);
myArr3.myPush(4);
console.log('myArr3 :>> ', myArr3);
//debugger;
const myArr4 = myArr3.myFilter(isEven);
console.log('myArr4 :>> ', myArr4);
