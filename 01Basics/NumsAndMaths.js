
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

// 2. Arithmetic Operations
// JavaScript supports basic arithmetic operations:


let a = 10, b = 3;
console.log(a + b);       // 13 (Addition)
console.log(a - b);       // 7 (Subtraction)
console.log(a * b);       // 30 (Multiplication)
console.log(a / b);       // 3.333... (Division)
console.log(a % b);       // 1 (Modulus - Remainder)
console.log(a ** b);      // 1000 (Exponentiation)

// 3. Math Object
// JavaScript has a built-in Math object that provides mathematical constants and functions.

// (A) Math Constants


console.log(Math.PI);      // 3.141592653589793
console.log(Math.E);       // 2.718 (Euler's number)
console.log(Math.SQRT2);   // 1.414
console.log(Math.LN2);     // 0.693 (Natural log of 2)


// (B) Math Methods

// 1. Rounding Methods

console.log(Math.round(4.7));  // 5 (Rounds to nearest integer)
console.log(Math.floor(4.7));  // 4 (Rounds down)
console.log(Math.ceil(4.3));   // 5 (Rounds up)
console.log(Math.trunc(4.7));  // 4 (Removes decimal)

// 2. Power and Root

console.log(Math.pow(2, 3));  // 8 (2³)
console.log(Math.sqrt(25));   // 5 (√25)
console.log(Math.cbrt(27));   // 3 (∛27)

// 3. Min and Max

console.log(Math.min(10, 5, 8));  // 5 (Minimum value)
console.log(Math.max(10, 5, 8));  // 10 (Maximum value)

// 4. Random Numbers

console.log(Math.random());      // Random number between 0 and 1
console.log(Math.random() * 10); // Random number between 0 and 10
console.log(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100

// 5. Trigonometry

console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0));           // 1
console.log(Math.tan(Math.PI / 4)); // 1

// 6. Logarithms

console.log(Math.log(10));      // Natural log of 10
console.log(Math.log10(100));   // Base-10 log of 100
console.log(Math.log2(8));      // Base-2 log of 8




// 4. Number Methods
// (A) Converting Strings to Numbers

console.log(Number("42"));         // 42
console.log(parseInt("42px"));     // 42
console.log(parseFloat("3.14pi")); // 3.14


// (B) Checking if a Value is a Number

console.log(Number.isFinite(100));    // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(42));    // true
console.log(Number.isNaN(NaN));       // true

// (C) Formatting Numberss

let num = 1234.567;
console.log(num.toFixed(2));    // "1234.57" (Rounds to 2 decimal places)
console.log(num.toPrecision(4)); // "1235" (Rounding with total digits)
console.log(num.toExponential(2)); // "1.23e+3"



// 5. Working with BigInt (For Large Numbers)
// JavaScript number type has a limit of (2^53 - 1). For very large numbers, use BigInt:


let bigNum = 9007199254740991n;
console.log(bigNum + 1n); // 9007199254740992n


// 6. Handling Precision Issues
// JavaScript uses floating-point arithmetic, which can lead to precision errors.

// (A) Example of Precision Error

console.log(0.1 + 0.2); // 0.30000000000000004

// (B) Fixing Precision Issues

console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log(Number((0.1 + 0.2).toPrecision(2))); // 0.3





// 7. Practical Examples
// (A) Generate a Random Number in a Range

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100)); // Random number between 1 and 100


// (B) Check if a Number is Prime

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false

// (C) Convert Degrees to Radians

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
console.log(degreesToRadians(180)); // 3.141592653589793