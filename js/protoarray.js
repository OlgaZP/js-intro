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

//create new prototype
MyArray.prototype = myArrayProto;

const myArr1 = new MyArray();
const myArr2 = new MyArray();

