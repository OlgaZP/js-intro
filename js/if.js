const isPermissionDenied = true;

if (isPermissionDenied) {
    console.log('You have no permission :>> ');
} else {
    console.log('Access Permision :>> ');
}

console.log('next instructions ');

console.log('5<10 = ', 5 < 10);
console.log('5>10 = ', 5 > 10);

// const age = prompt ("Enter your age:");
// if (age < 18) {
//     alert("Grow up. Access denied.");
// } 
// else {
//     alert("Welcome!");
// }

console.log('5==5 :>> ', 5==5);
console.log('5!=5 :>> ', 5!=5);
console.log('5==6 :>> ', 5==6);
console.log('5!=6 :>> ', 5!=6);

console.log('5===5 :>> ', 5===5);
console.log('5!==5 :>> ', 5!==5);
console.log('5===6 :>> ', 5===6);
console.log('5!==6 :>> ', 5!==6);

console.log('0 == false :>> ', 0 == false);

// const password=prompt("Enter your password: ");
// if (password === '123') {
//     alert("Welcome!");
// } else {
//     alert("Access Denied. Forget your password? Try again.");
// }

console.group("True table &&");
console.log('true && true :>> ', true && true);
console.log('false && false :>> ', false && false);
console.log('true && false :>> ', true && false);
console.log('false && true :>> ', false && true);
console.groupEnd();

console.group("True table ||");
console.log('true || true :>> ', true || true);
console.log('false || false :>> ', false || false);
console.log('true || false :>> ', true || false);
console.log('false || true :>> ', false || true);
console.groupEnd();

const age = prompt ("Enter your age:");
const isDiscountPaper = true;

if (age < 18 || age > 70 || isDiscountPaper) {
    alert("Ok. You have discount.");
} else {
    alert("You can't use discount!");
}



