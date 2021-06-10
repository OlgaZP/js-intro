'use strict';

class Node {
    constructor (data, next) {
        this._data = data;
        this._next = next;
    }
}

class Stack {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._size = 0;
        this._top = null;
    }

    push(value) {
        if (this._size === this._maxSize) {
            throw new RangeError('Stack overflow!!!');
        }
        this._top = new Node(value, this._top);
        this._size++;
    }

    pop() {
        if (!this.isEmpty) {
            const value = this._top._data;
            this._top = this._top._next;
            this._size--;
            return value;
        }
    }

    get peek() {
        return this._top?._data;
    }

    get isEmpty () {
        return this._size === 0;
    }
}

const stackTest = new Stack(10);
stackTest.push(Math.round(Math.random() * 10));
stackTest.push(Math.round(Math.random() * 10));
stackTest.push(Math.round(Math.random() * 10));

console.log('stackTest :>> ', stackTest);
console.log('stackTest.pop() :>> ', stackTest.pop());
console.log('stackTest.peek :>> ', stackTest.peek);
console.log('stackTest.pop() :>> ', stackTest.pop());


//задача: с помощью стека проверить является ли строка правильной ///скобочной последовательностью

function checkBracketSequence (str) {
    const bracketStack = new Stack();
    for (const s of str) {
        if (s === '(') {
            bracketStack.push(s);
            continue;
        }
        if (s === ')') {
            if (bracketStack.isEmpty) {
                return false;
            }
            bracketStack.pop();
        }
    }
    return bracketStack.isEmpty;
}

console.log('checkBracketSequence(\'(fghffdbfg)\') :>> ', checkBracketSequence('(fghffdbfg)'));
console.log('checkBracketSequence(\'\') :>> ', checkBracketSequence(''));
console.log('checkBracketSequence(\'(fghf(fdbfg)\') :>> ', checkBracketSequence('(fghf(fdbfg)'));
console.log('checkBracketSequence(\'(fghffdbf)g)\') :>> ', checkBracketSequence('(fghffdbf)g)'));
console.log('checkBracketSequence(\'(fg((hff)db)fg)\') :>> ', checkBracketSequence('(fghffdbfg)'));

//домашнее задание: функция проверяет является ли строка палиндромом

console.group('Testing palindrom with stack');

function palindrom(str) {
    const palindromStack = new Stack();
    const strLowCaseWithouSpase = str.toLowerCase().replace(/\s+/g, '');
    const firstPart = strLowCaseWithouSpase.substring(0, Math.trunc(strLowCaseWithouSpase.length / 2));
    const secondPart = strLowCaseWithouSpase.substring(Math.round(strLowCaseWithouSpase.length / 2), strLowCaseWithouSpase.length); 
    
    for (const ch of firstPart) {
        palindromStack.push(ch);
        continue;
    }
    for (const ch of secondPart) {
        if (ch === palindromStack.pop()) {
            continue;
        }       
        break;
    }
    return palindromStack.isEmpty;
}

console.log('palindrom(\'tenet\') :>> ', palindrom('tenet'));
console.log('palindrom(\'guest\') :>> ', palindrom('guest'));
console.log('palindrom(\'Saippuakivikauppias\') :>> ', palindrom('Saippuakivikauppias'));
console.log('palindrom(\'tenettt\') :>> ', palindrom('tenettt'));
console.log('palindrom(\'any word not palindrom\') :>> ', palindrom('any word not palindrom'));
console.log('palindrom(\'А роза упала на лапу Азора\') :>> ', palindrom('А роза упала на лапу Азора'));
console.log('palindrom(\'Лёша на полке клопа нашёл\') :>> ', palindrom('Лёша на полке клопа нашёл'));

console.groupEnd();