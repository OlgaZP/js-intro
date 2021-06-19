//const a = prompt();
//const b = prompt();
const a = 4;
const b = 5;
const sum = Number(a) + Number(b);

//alert(a + ' + ' + b + '=' + sum);
//вместо этого используем шаблоное выражение
alert(`${a} + ${b} = ${sum}`)
const s1 = 'sdfh';
const s2 = "834uj";

const firstName = 'Vasilij';
const lastName = 'Pupkin';
 alert(`Full name is ${firstName} ${lastName}`);

//пользователь имеет три попытки ввести пароль
// если пароль правильный, то выводит Пароль верен
//если нет - Пароль неверен
const PASSWORD = '123';
const MAX_ATTEMPT = 3;

let isCorrect = false;
let currAttempt = 1;

 do {
    isCorrect = prompt('Please, enter your password:') === PASSWORD;   
    if (isCorrect) {
        break;
    }
} 
while (currAttempt++ < MAX_ATTEMPT);
alert(`Password is ${isCorrect ? 'correct' : 'not correct'}`);
