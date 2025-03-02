let score = 33
let score2 = "33" // this will show string


// let try converting string to number 

let valueInNumber = Number(score2)
console.log(typeof valueInNumber)

console.log(typeof score);    //these both are same they will log same things 
console.log(typeof (score2))




// Type Conversion in JavaScript
// Type conversion is the process of changing data from one type to another. In JavaScript, type conversion can be implicit (coercion) or explicit (manual conversion).


// Type Conversion in JavaScript
// Type conversion is the process of changing data from one type to another. In JavaScript, type conversion can be implicit (coercion) or explicit (manual conversion).

// 1️⃣ Implicit Type Conversion (Type Coercion)
// JavaScript automatically converts data types when needed. This happens in arithmetic operations and comparisons.

// 🔹 Example: String to Number

// console.log("5" - 2); // 3  (string "5" is converted to number)
// console.log("5" * 2); // 10 (string "5" is converted to number)
// console.log("5" / "2"); // 2.5 (both strings are converted to numbers)

// 🔹 Example: Number to String

// console.log(5 + "2"); // "52" (number 5 is converted to string)
// console.log(true + " is a boolean"); // "true is a boolean"

// 🔹 Example: Boolean Conversion

// console.log(5 == "5"); // true (string "5" is converted to number)
// console.log(0 == false); // true (false is converted to 0)
// console.log(1 + true); // 2 (true is converted to 1)

// 2️⃣ Explicit Type Conversion (Manual Conversion)
// 🔹 Convert to Number (Number(), parseInt(), parseFloat())
// console.log(Number("123"));  // 123
// console.log(Number("12.34")); // 12.34
// console.log(Number("ABC")); // NaN (Not a Number)
// console.log(parseInt("100px")); // 100 (extracts number)
// console.log(parseFloat("12.34px")); // 12.34


// 💡 When to Use?

// Number(value): Converts to a number but returns NaN if invalid.
// parseInt(value): Extracts an integer from a string.
// parseFloat(value): Extracts a floating-point number from a string.
// 🔹 Convert to String (String(), .toString())

// console.log(String(123)); // "123"
// console.log((123).toString()); // "123"
// console.log(String(true)); // "true"
// 💡 Use Cases: Converting numbers, booleans, or objects to strings.

// 🔹 Convert to Boolean (Boolean())

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("Hello")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(null)); // false

// 🔹 Falsy Values (convert to false)

// 0, "" (empty string), null, undefined, NaN, false
// 🔹 Truthy Values (convert to true)

// Non-zero numbers, non-empty strings, objects, arrays, true

// 📌 Common Type Conversion Cases
// Expression	Converted To	Result

// "5" - 2	"5" → 5	3
// "5" + 2	2 → "2"	"52"
// "5" * "2"	"5", "2" → 5, 2	10
// true + 1	true → 1	2
// false + 1	false → 0	1
// Boolean("")	"" → false	false
// Boolean("hello")	"hello" → true	true


// 📌 Summary

// Conversion	Method	Example	Result
// String → Number	Number(), parseInt(), parseFloat()	Number("123")	123
// Number → String	String(), .toString()	String(123)	"123"
// Boolean → Number	Number(true)	Number(true)	1
// Number → Boolean	Boolean(0), Boolean(1)	Boolean(0)	false
// String → Boolean	Boolean("Hello"), Boolean("")	Boolean("")	false

// ✅ Best Practice: Always use === for comparison to avoid unexpected type coercion.

