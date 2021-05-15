const a1 = 1;
const a2 = 1;

console.log(a1 === a2);

const obj1 = {};
let obj2 = {};
console.log(obj1 === obj2);
obj2 = obj1; //теперь эти объекты это одно и тоже, 
// если изменяем obj1, то автоматом изменяется и obj2
console.log(obj1 === obj2);