// типы данных
// var values =3; - старое очень! чкйчас нельзя исопльзовать!

let value2 = 5;
value2 = 10;

const value3 = 10;

//number type, include decimal and Z numbers
let numberValue; //объявление
numberValue = 10; //инициализация
console.log(numberValue);
console.log('typeof numberValue :>> ', typeof numberValue);

//string type
let stringValue = "Hello, world!";
console.log('stringValue = ', stringValue);
console.log('typeof stringValue :>> ', typeof stringValue);

//boolean type - true or false
let booleanValue = true;
console.log("booleanValue = ", booleanValue);
console.log('typeof booleanValue :>> ', typeof booleanValue);

//undefined type, declare but not initialized
let undefValue = undefined;
console.log('undefValue : >>', undefValue);
console.log('typeof undefValue :>> ', typeof undefValue);

//null
let nullValue = null;
console.log('nullValue :>> ', nullValue);
console.log('typeof nullValue :>> ', typeof nullValue);

//symbol
let symbolValue = Symbol();
console.log('symbolValue :>> ', symbolValue);
console.log('typeof symbolValue :>> ', typeof symbolValue);

//input-output
//alert("Alert window!"); //pop-up modal window
//alert(stringValue);

let age = prompt("Input your age:");
alert("Your age is " + age);

let userName = prompt("Input your name:");
alert("Hello, " + userName +"!");

let testNumber = prompt("Input your number");
alert("Your number +1 is "+ ++testNumber);
