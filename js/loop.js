// console.group("Loop while");
// const stepCount = 4;
// let stepNumber = 0;
// while (stepNumber <= stepCount) {
//     console.log('Go 10 steps :>> ');
//     stepNumber++;
// }
// console.groupEnd();

console.group("Non-quadric form 7 to 15");
for (let i = 7; i <= 15; i++) {
    if (i % 2 == 1) {
        console.log('i = ', i);
    }
}
console.groupEnd();

console.group("Cosmodrome");
for (let i = 10; i >= 0; i--) {
    console.log('i = ', i);
}
console.groupEnd();

console.group("Wanted Value");
const wantedValue = 7;
let value = 0; 

do {
    value = Number (prompt("Enter value:"));
} while (value !== wantedValue);

console.log('You are win!!!');
console.groupEnd();