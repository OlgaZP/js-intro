'use strict';

//factorial

function factorial(n) {
    if (n ===0) {
        return 1;
    }
    return n * factorial(n - 1);
}

//debugger;
const a = factorial(5);
console.log('5! :>> ', a);

//count show
function numberLogger(n) {
    if (n === 0) {
        return;
    }    
    numberLogger(n-1);
    console.log(n);
}

numberLogger(10);

//generate string - pair of brackets
function bracketWrapper (n) {
    return n === 1 ? '()' : `(${bracketWrapper(n-1)})`;
}

console.log('bracketWrapper(5) :>> ', bracketWrapper(5));

//для того, чтобы не использовать глобальную переменную, в которую будем ..//записывать результирующий массив и чтобы все красиво работало, то делаем //функцию-обертку!
function bracketWrapperArr (n) {
    const brackets = [];    
    bracketWrapperRec(n);

    function bracketWrapperRec(n) {        
        if (n === 0) {        
            return;
        }       
        brackets.unshift('(');
        console.log('n :>> ', n);    
        console.log('brackets :>> ', brackets);     
        bracketWrapperRec(n-1);   
                  
        brackets.push(')');   
        console.log('n after:>> ', n);  
        console.log('brackets after:>> ', brackets);  
    }

    return brackets;
}    
//debugger;
const bracketArr = bracketWrapperArr(5);
console.log('bracketArr :>> ', bracketArr.join(''));