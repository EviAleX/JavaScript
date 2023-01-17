// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
// 55. Learning how to code
const xyzabc = 2332;

if (xyzabc) {
  console.log(`Fuck me`);
} else {
  console.log(`Don't do it`);
}

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(2001));
*/

/*
// 56. Installing Node.js and Setting Up a Dev Environment
console.log('Trying to fuck me? I will fuck you!');
*/

/*
// 59. Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude([3, 5, 2], [9, 0, 3]);
console.log(amplitude);
// max = 3, max = 7, max is less than 5 value, max = 22

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/

/*
// 61. Debugging with the console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C. Fixing
    // value: Number(prompt('Degrees celcius:')),
    value: 10,
  };

  // B. Find
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A. Identify
console.log(measureKelvin());

// Example 2.
const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = 0; 
  let min = 0; 
  for (let i = 1; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitudeBug([3, 5, 2], [9, 4, 3]);
// A. Identify
console.log(amplitude);
*/
