'use strict';

function User (name, surname, age, isMale, email, isSubscribe) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribe = isSubscribe;
}

const users = [];

for (let i = 0; i < 100; i++) {
    const user = new User(
        `Username${i}`,
        `Usersurname${i}`,
        Math.trunc(Math.random() * 100),
        Math.random() > 0.5,
        `usermail${i}@gmail.com`,
        Math.random() > 0.5,
    );
    users.push(user);    
}
console.table(users);

//only woman
const womanUsers = users.filter(isWoman);

function isWoman(user) {
    return !user.isMale;
}
console.log('woman users');
console.table(womanUsers);

//only adult man
const usersAdultUnsubMan = users.filter(isAdultUnsubMan);

function isAdultUnsubMan(user) {
    return user.isMale && user.age >= 18 && !user.isSubscribe;
}

console.log('adult man users');
console.table(usersAdultUnsubMan);

//получить массив имейлов пользователей
const userEmails = users.map(getEmail);

function getEmail(user) {
    return user.email;
}

console.table(userEmails);

//получить массив емейлов только женщин
const womanEmails = users.filter(isWoman).map(getEmail);
console.table(womanEmails);