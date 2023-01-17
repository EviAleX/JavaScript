/*
// 10.Values and Variables
let js = 'amazing';
console.log(40 + 23 - 9 - 10);

console.log('Jonas');
console.log(24);

// Variable name conventions
let firstName = 'Bob'
let first = 'Jonas'
let firstNamePerson = "Alex"

console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI = 3.1999;

let myFirstJob = 'Programmer';
let myCurrentJob = "Editor";
console.log(myFirstJob);

console.log(25);
*/

/*
// 12. Data types
true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
// 13. let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1992; //we can't change the data type of const (be careful)

var job = 'programmer';
job = 'teacher';
*/

/*
// 14. Basic operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedman';
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)
*/

/*
// 15. Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

/*
// 17. Strings and template literals
const firstName = 'Alex';
const job = 'student';
const birthYear = 2001;
const year = 2022;

const alex = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(alex);

const alexNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(alexNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);
*/

/*
// 18. Taking decisions: if / else Statements
const age = 15;
const isOldEnough = age >= 18;

if (age >= 18) {
  console.log('Sarah can start driving license!🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1988;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// 20. Type Conversation and Coercion
// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Alex')); // Nan stands for not a number
console.log(typeof NaN);

console.log(String(23), 23);

// Type coersion
console.log("I'm " + 23 + ' years old student');
console.log("I'm " + '23' + ' years old student');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);
*/

/*
// 21. Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean(NaN));

const money = 0;
if (money) {
  console.log("Don't spend it all 😉");
} else {
  console.log("You should get a job");
} // the decription of why 2nd bloch was executed was described in my script

let height = 0;
if (height) {
  console.log('Yay! Height is defined');
} else {
  console.log('Height is UNDEFINED');
} // same happened here, height does not have the value -> falsy value
*/

/*
// 22. Equality operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult! (strict)');
// === operator will return true or false value
// '18' === 18 -> false
// '18' == 18 -> true
if (age == 18) console.log('You just became an adult! (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a great number!');
} else {
  console.log('Number is not 23 or 7!');
}

if (favourite !== 23) console.log('Why not the 23?');
*/

/*
// 23. Logical operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

console.log(hasDriversLicense || hasGoodVision && isTired);
*/

/*
// 26. The switch statement
const day = 'sunday';

// switch version
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

// if else version
if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
*/

/*
// 27. Statements and expressions
3 + 4
1991
true && false && !false

if (23 > 14) {
  const str = '23 is bigger'; // whole line of code - statement, '....' - expression
}

const me = 'Alex';
console.log(`I am ${2022 - 2001} years old ${me}`);
*/

/*
// 28. The conditional (ternary) statement 
const age = 20;
// age >= 18 ? console.log('I like to drink wine 🍷') :
//   console.log('I like to drink water 🧊');

const drink = age >= 18 ? 'wine 🍷' : 'water 🧊';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 🧊';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/