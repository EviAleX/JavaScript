'use strict';

/*
// 32. Activating strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; 
if (hasDriversLicense) console.log('I can drive :D');

const interface = 'Audio';
const private = 534;
*/

/*
// 33. Functions 
function logger(){
  console.log('My name is Alex');
}

logger(); // calling, running, invoking function
logger();

function fruitProcessor(apples, oranges){
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);
// console.log(fruitProcessor(5,0)); - the easier version 

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
*/

/*
// 34. Function Declarations vs. Expressions 
// Function declaration
const age1 = calcAge1(1991);

function calcAge1(birthYear){
  return 2022 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear){
  return 2022 - birthYear;
}

const age2 = calcAge2 (1991);
console.log(age1, age2);
*/

/*
// 35. Arrow function
// Arrow function 
const calcAge3 = birthYear => 2021 - birthYear; 
const age3 = calcAge3 (2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age; 
  // return retirement
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'Alex'));
console.log(yearsUntilRetirement(1988, 'Bob'));
*/

/*
// 36. Functions calling other functions 
function cutFruitPeaces(fruit){
  return fruit*4; 
}

function fruitProcessor(apples, oranges){
  const applePeaces = cutFruitPeaces(apples);
  const orangePeaces = cutFruitPeaces(oranges);

  const juice = `Juice with ${applePeaces} pieces of apples and ${orangePeaces} pieces of oranges.`;
  return juice;
}
console.log(fruitProcessor(2,3));
*/

/*
// 37. Reviewing functions
const calcAge = function (birthYear){
  return 2021 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName){
  const age = calcAge(birthYear);
  const retirement = 65 - age; 

  if(retirement > 0){
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired🥳`);
    return -1;  
  }
  
  // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2001, 'Alex'));
console.log(yearsUntilRetirement(1950, 'Bob'));
*/

/*
// 39. Introduction to arrays 
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']; // literal syntax 
console.log(friends);

const year = new Array (1911, 1987, 2001, 2020);
console.log(year);

console.log(friends[0], friends[2]);
console.log(friends.length); // lenght function gives us the number of elements which are stored in variables
console.log(friends[friends.length - 1]); // inside those brackets we can put any expressions, which produce a value

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Alex'
const alex = ['Alex', 'Mazur', 2022 - 2001, 'student', friends];
console.log(alex);

// Exercies
const calcAge = function (birthYear){
  return 2021 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/*
// 40. Basic Array Operations 
const friends = ['Michael', 'Steven', 'Peter']; 

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements 
friends.pop(); // removing last element 
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // removing first element 
console.log(friends);

// Index checking 
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // Bob is not on the list 

// True/ false statement 
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')){
  console.log('You have a friend called Peter');
}
*/

/*
// 42. Introduction to objects 
const alex = {
  firstName: 'Alex', 
  lastName: 'Mazur',
  age: 2022 - 2001,
  job: 'student',
  friends: ['Bogdan', 'Jarik', 'Sania', 'Andrei']
};
*/

/*
// 43. Dot vs. Bracket Notation
const alex = {
  firstName: 'Alex', 
  lastName: 'Mazur',
  age: 2022 - 2001,
  job: 'student',
  friends: ['Bogdan', 'Jarik', 'Sania', 'Andrei']
};
console.log(alex);
console.log(alex.lastName);
console.log(alex['lastName']);

const nameKey = 'Name';
console.log(alex['first' + nameKey]);

const interestedIn = prompt('What do you want to know about me? Choose between firstName, lastName. age, job and friends.');

if (alex[interestedIn]){
  console.log(alex[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName. age, job and friends.');
}

alex.location = 'Poland';
alex['instagram'] = '@evi_alex.pl';
console.log(alex);

// Challenge 
const infoOfAlex = `${alex.firstName} has ${alex.friends.length} friends, and his best friend is called ${alex.friends[1]}.`;
console.log(infoOfAlex);
*/

/*
// 44. Object Methods 
const alex = {
  firstName: 'Alex', 
  lastName: 'Mazur',
  birthYear: 2001,
  job: 'student',
  friends: ['Bogdan', 'Jarik', 'Sania', 'Andrei'],
  hasDriversLicense: true,

  // calcAge: function (birthYear){
  //   return 2022 - birthYear;
  // }

  // calcAge: function (){
  //   // console.log(this);
  //   return 2022 - this.birthYear;
  // }

  calcAge: function (){
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // Challenge
  // "Alex is a 21-years old student, and he has a/not driver's license."

  getSummary: function (){
    this.summary = `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a':'not'} driver's license.`;
    return this.summary;
  }
};

console.log(alex.calcAge());
console.log(alex.age);
console.log(alex);
console.log(alex.getSummary());
console.log(alex.summary);
*/

/*
// 46. Iteration: The for loop

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🥊`);
}
*/

/*
// 47. Looping Arrays, Breaking and Continuing
const alex = [
  'Alex', 
  'Mazur',
  2022 - 2001,
  'student',
  ['Bogdan', 'Jarik', 'Sania', 'Andrei'],
  true
];

const types = []; // empty array

for (let i = 0; i < alex.length; i++){
  // Reading from alex array
  console.log(alex[i], typeof alex[i]);

  // Filling types array 
  // types[i]= typeof alex[i];

  types.push(typeof alex[i]);
}

types[0] = 'string';
console.log(types);

const years = [2001, 1969, 2007, 2020];
const ages = [];

for (let i = 0; i < years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages); 

// Continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < alex.length; i++){
  if (typeof alex[i] !== 'string') continue;

  console.log(alex[i], typeof alex[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < alex.length; i++){
  if (typeof alex[i] === 'number') break;

  console.log(alex[i], typeof alex[i]);
}
*/

/*
// 48. Looping backwards and loops in loops
const alex = [
  'Alex', 
  'Mazur',
  2022 - 2001,
  'student',
  ['Bogdan', 'Jarik', 'Sania', 'Andrei'],
  true
];

// Looping backwards
for(let i = alex.length - 1; i >= 0; i--){
  console.log(i, alex[i]);
}

// Loop inside the loop
for (let exercise = 1; exercise <= 3; exercise++){
  console.log(`---------- Starting exercise ${exercise}`)

  for (let rep = 1; rep < 6; rep++){
    console.log(`Exercise ${exercise}: Lifting wieght repetition ${rep}`);
  }
}
*/

/*
// 49. The while loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🥊`);
// }

// let rep = 1; 
// while (rep <= 10){
//   console.log(`Lifting weights repetition ${rep} 🥊`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
*/

