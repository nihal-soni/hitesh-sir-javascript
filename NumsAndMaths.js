
//******************* NUMBERS ****************************/

const score = 400;
console.log(score);

const balance  = new Number(67);
console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(1));


// lets take an other example

const otherNumber = 34.5466;
console.log(otherNumber.toFixed(2));


// using Pricision
const otherNumber2 = 34.5466;
console.log(otherNumber2.toPrecision(2));


//lets Localestring 
const hundreds = 200000;
console.log(hundreds.toLocaleString('en-In'));  // this will add commas to number 

// 1. Numbers in JavaScript

// In JavaScript, numbers are of type number and are stored as floating-point (64-bit IEEE 754) values.


console.log(typeof 10);       // "number"
console.log(typeof 10.5);     // "number"
console.log(typeof NaN);      // "number"
console.log(typeof Infinity); // "number"

// Special Number Values
// Infinity – Represents infinity (1 / 0)
// -Infinity – Represents negative infinity (-1 / 0)
// NaN (Not-a-Number) – Results from invalid math operations (0 / 0, parseInt("abc"))

console.log(10 / 0);      // Infinity
console.log(-10 / 0);     // -Infinity
console.log(0 / 0);       // NaN
console.log(isNaN("abc")); // true




// -************************** MATHS *******************************//
console.log(Math)

