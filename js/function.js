//greeting();
//greeting();

//finction declaration
//function greeting() {
 //   alert("Hello, js function!");
//}

/************/
// give parameters to function
//const person1 = "Steve";

//greetingTo(person1);
//greetingTo("Alf");
//greetingTo(undefined);

function greetingTo(name) {
    alert("Hello, " + name);
}

/*******/
const sumAB = sum(1, 2);
console.log("SumAB: >>", sumAB);

function sum(a, b) {
    const result = a + b;
    return result;
}
/******** */
// square root function
console.group('Square equation'); 
alert("Play three times!");
for (let i=1; i<4; i++) {
    const a = Number(prompt("Enter koef a of ax2+bx+c=0"));
    const b = Number(prompt("Enter koef b of ax2+bx+c=0"));
    const c = Number(prompt("Enter koef c of ax2+bx+c=0"));

    const x = squareEquation (a, b, c);
    console.log('Root of equation are >>', x);
}
console.groupEnd();

/**
 * 
 * @param {number} a koef a of square equation
 * @param {number} b koef b of square equation
 * @param {number} c koef c of square equation
 * 
 * @returns {} - square roots of ax2+bx+c=0
 */
function squareEquation (a, b, c) {
    const D = b*b - 4*a*c;
    let x1 = 0;
    let x2 = 0;
    if (D > 0) {
        x1 = (-b - Math.sqrt(D)) / (2*a);
        x2 = (-b + Math.sqrt(D)) / (2*a);
        return [x1, x2];
    } else if (D === 0) {
        x1 = -b / (2*a);
        return [x1];
    } else {
        return "No rational roots";       
    }
   
};

//function expression
const sum2 = function(a, b) {
    returm (a + b);
};

const pow4 = function(x) {
    return (Math.pow(x,4));
};


