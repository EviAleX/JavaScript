'use strict';

/*
// 93. Scoping in practice
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // in my case millenial variable is undefined, cuz i was born in 2001
      // Creating new variable with the same name   
      const firstName = 'Steven'; // second variable with same name, but was defiend in other scope 
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      // Reassigning outer scope's variable 
      const output = 'NEW OUTPUT!';

      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));
    }
    console.log(millenial);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Alex';
calcAge(1991); // set birthYear to 1991 to perform CalcAge function 
*/

/*
// 96. Hoisting and TDZ in practice
// Variables
console.log(me); // hoisted to the value of undefined
// console.log(job);
// console.log(year);

var me = 'Alex';
let job = 'Student';
const year = 2001;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  // Uncaught ReferenceError because they are CONST function
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 10;
let y = 7;
const z = 18;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// 97. The this keyword in practice
// console.log(this); // simply the global object

const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  // console.log(this); // undefined in strict mode
};
calcAge(2001);

const calcAgeArrow = birthYear => {
  // Arrow functions does not get its own THIS keyword
  console.log(2022 - birthYear);
  // console.log(this); // undefined in strict mode
};
calcAgeArrow(1999);

const alex = {
  year: 2001,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};
alex.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = alex.calcAge;
matilda.calcAge();
*/

/*
// 98. Regular vs. Arrow functions
// var firstName = 'Matilda';

const alex = {
  firstName: 'Alex',
  year: 2001,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
alex.greet();
alex.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
}
addArrow(2, 5, 8);
*/

/*
// 99. Primitives vs. Objects (Primitives vs. Reference Types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Alex',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me );
*/

/*
// 100. Primitives vs. Objects in Practice
// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// This happends because when we attempted to copy the original Jessica object it did in fact not create a new object in the heap

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
*/