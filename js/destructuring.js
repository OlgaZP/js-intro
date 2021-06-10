'use strict';

function f(dimensions) {
    //это очень длинно и так никто не пишет
    //const length = dimensions.length;
    //const width = dimensions.width;
    //const height = dimensions.height;

    //такой вариант деструктурирующего присваивания возможен, но достаточно длинный
    const {length, width, height} = dimensions;
    console.log('length :>> ', length);
    console.log('width :>> ', width);
    console.log('height :>> ', height);
}

const dim = {
    length: 1,
    width: 2,
    height:3,
};

f(dim);

//самый красткий и желательный вариант
const agent007 = {
    firstName: 'James',
    lastName: 'Bond',
}

nameLogger(agent007);
//ераткий синтаксис с переименованием
function nameLogger({firstName: name, lastName: surname}){
    console.log(`signature of ${name} ${surname}`);
}
//более сложная структура объекта
const book = {
    title: 'Title Book',
    author: 'AuthorName',
    price: {
        count: 15,
        currency: 'UAH',
    },
}

const {
    title,
    author,
    price: {count, currency}
} = book;
console.log('count :>> ', count);

//деструктуризация для массива
const arr = [0, 1, 2, 3, 4, 5];
//const arr0 = arr[0];
//const arr1 = arr[1];

const [arr0, arr1] = arr;
console.log('arr1 :>> ', arr1);

const [, first, , third, , fifth] = arr;
console.log(`first third fifth :>> ${first}, ${third}, ${fifth}`);

const arrTest = [1, 5, {length: 5, name: {firstName:'John', lastName:'Silver'}}]
//как вытащить только firstName с именем userFirstName
const [
    ,
    ,
    {
        name:{firstName:userFirstName
        },
    },
] = arrTest;
console.log('userFirstName :>> ', userFirstName);

/******************* */
