'use strict';

const a = Number(5);
const aObj = Number(5);

const s1 = Symbol('description for s1'); //описание исопльзуется для отладки, оно не обязательное
const s2 = Symbol('description for s2');

const obj = {
    age: 22,
    [s1]: 'Ira', //скобки нужны чтобы подставлять значение из s1
    [s2]: 555,
}