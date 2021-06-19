'use strict';

//первый вариант, флаги отдельно и необязательно
const regExpr = new RegExp('\\d{3}', 'g');

//второй вариантб флаги сразу, как на сервисе проверки
const regExprFlags = /\d{3}/g;

//методы regExpr
//метод test - тестирование на соответствие шаблону
const str = 'Vasilii';
const regTemplate = /^[A-Z][a-z]{0,19}$/;
console.log('regTemplate.test(str) :>> ', regTemplate.test(str));
console.log('regTemplate.test(\'25Tgfd\') :>> ', regTemplate.test('25Tgfd'));

const passwordTemplate = /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)\w{8,16}$/;
const password1 = 'D456hgreGf';
const password2 = '!@sdfklj;lk.df,lk;';
console.log('passwordTemplate.test(password1) :>> ', passwordTemplate.test(password1));
console.log('passwordTemplate.test(password2) :>> ', passwordTemplate.test(password2));

const text = 'dsfghdefj 234 dsfgkljhreiuoh jklhkjrhowyuiokhef 097! test 157';
const regExprExec = /[1-9]\d{2}/g;
console.log('1st call - regExprExec.exec(text) :>> ', regExprExec.exec(text));
console.log('2nd call - regExprExec.exec(text) :>> ', regExprExec.exec(text));


// методы String
//match возвращает первое совпадение или с флагом g все соответствия; если их нет то null
console.log('1st call - text.match(/[1-9]\d{2}/) :>> ', text.match(/[1-9]\d{2}/g));
console.log('2nd call - text.match(/[1-9]\d{2}/) :>> ', text.match(/[1-9]\d{2}/g));

//replace ищет соответствие и заменяет на другие символы
console.log('text.replace(regExprExec, \'***\') :>> ', text.replace(regExprExec, '***'));

//search - возвращает позицию первого совпадения и если не нашел, то -1
console.log('text.search(regExprExec) :>> ', text.search(regExprExec));

//split - разбивает строку в массив по разделителю
const textSpaced = 'Мама   мыла     раму 333 часа   и   121     минут';
const regExprDelSpaces = /\s+/;
console.log('textSpaced :>> ', textSpaced);
console.log('textSpaced.split(\' \') :>> ', textSpaced.split(' '));
console.log('textSpaced.split(regExprDelSpaces) :>> ', textSpaced.split(regExprDelSpaces));



