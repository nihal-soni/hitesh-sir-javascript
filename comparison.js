console.log(2 > 1);    // true ✅ (2 is greater than 1)
console.log(2 >= 1);   // true ✅ (2 is greater than or equal to 1)
console.log(2 < 1);    // false ❌ (2 is NOT less than 1)
console.log(2 == 1);   // false ❌ (2 is NOT equal to 1)
console.log(2 != 1);   // true ✅ (2 is NOT equal to 1)
console.log("2" > 1);  // true ✅ ("2" is converted to 2 before comparison)
console.log("02" > 1); // true ✅ ("02" is converted to 2 before comparison)





// Comparison of Data Types in JavaScript
// In JavaScript, different data types behave differently when compared. This can cause unexpected results due to type coercion (automatic conversion). Let's explore how JavaScript compares data types.

// 1️⃣ Types of Comparisons in JavaScript
// Strict Comparison (===, !==) – Compares both value and type (recommended ✅).
// Loose Comparison (==, !=) – Converts types before comparison (may cause unexpected results ⚠️).
// Relational Comparison (<, >, <=, >=) – Works for numbers, strings, and booleans.

// 2️⃣ Strict Comparison (=== vs !==)
// Compares both value and type.

// No automatic type conversion (more predictable ✅).

console.log(5 === "5"); // false (number vs string)
console.log(0 === false); // false (number vs boolean)
console.log(null === undefined); // false (different types)
console.log("hello" === "hello"); // true (same type and value)


// ✅ Best Practice: Always use === unless you need type conversion.

// 3️⃣ Loose Comparison (== vs !=)
// Performs type coercion before comparison.
// Can lead to unexpected results.

console.log(5 == "5"); // true ("5" is converted to 5)
console.log(0 == false); // true (false is converted to 0)
console.log(null == undefined); // true (special case)
console.log(" " == 0); // true (empty string is converted to 0)
console.log("5" == true); // false ("5" is converted to 5, true is 1)


// 🚨 Why is "5" == true false? 👉 "5" is converted to 5, but true is converted to 1.
// 👉 Since 5 !== 1, the result is false.

// 4️⃣ Relational Comparisons (<, >, <=, >=)
// Strings are compared lexicographically (dictionary order).
// Boolean true is treated as 1, false as 0.
// Objects are converted to primitives before comparison.

console.log(10 > 5); // true
console.log(5 >= 5); // true
console.log(-1 < 0); // true


// 🔹 Example: Strings (Lexicographic Order)

console.log("apple" > "banana"); // false ('a' < 'b')
console.log("hello" < "Hello"); // false ('h' > 'H' due to ASCII values)
console.log("123" > "45"); // false (compares "1" vs "4", not numbers!)

// 🔹 Example: Boolean Comparisons

console.log(true > false); // true (1 > 0)
console.log(false < 1); // true (0 < 1)
console.log(true >= 1); // true (1 >= 1)
console.log(false == 0); // true


// 🚨 Be careful when comparing strings and numbers!


console.log("10" > 2); // true ("10" is converted to 10)
console.log("10" < "2"); // false (compares strings "10" vs "2")

// 5️⃣ Object Comparisons
// Objects are compared by reference (not value).
// Even if two objects have the same properties, they are different in memory.

let obj1 = { name: "John" };
let obj2 = { name: "John" };
let obj3 = obj1;

console.log(obj1 == obj2); // false (different memory references)
console.log(obj1 === obj2); // false (different objects)
console.log(obj1 === obj3); // true (same reference)

// 👉 Objects and arrays are only equal if they refer to the same object in memory.

// 6️⃣ Special Cases in Comparison
// 🔹 null and undefined

console.log(null == undefined); // true (special case)
console.log(null === undefined); // false (different types)
console.log(null > 0); // false (null is not converted)
console.log(null == 0); // false (null is only equal to undefined)
console.log(null >= 0); // true (null is converted to 0)

// 💡 Why does null >= 0 return true but null > 0 return false? 👉 >= converts null to 0, so 0 >= 0 is true.
// 👉 > does NOT convert null, so null > 0 is false.

// 🔹 NaN Comparisons
// NaN (Not a Number) is not equal to anything, including itself.

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

// 💡 Use isNaN() to check if a value is NaN.

// 📌 Summary Table
// Comparison	Result	Reason

// 5 == "5"	✅ true	"5" is converted to 5
// 5 === "5"	❌ false	Different types (number vs string)
// null == undefined	✅ true	Special case
// null === undefined	❌ false	Different types
// true == 1	✅ true	true is converted to 1
// true === 1	❌ false	Different types
// "10" > "2"	❌ false	"10" is compared lexicographically (not numerically)
// "10" > 2	✅ true	"10" is converted to 10
// { } == { }	❌ false	Objects are compared by reference
// NaN == NaN	❌ false	NaN is never equal to anything

// 📌 Best Practices for Comparisons
// ✅ Use === instead of == to avoid unexpected type coercion.
// ✅ Use explicit type conversion (Number(), String(), Boolean()) before comparison.
// ✅ Be careful with null and undefined, as they have special behaviors.
// ✅ Use isNaN() to check for NaN values.
// ✅ Objects are only equal if they refer to the same memory location.

// 🔥 Real-World Example
// 🔹 Example: Validating User Input

let userInput = prompt("Enter a number:");
if (Number(userInput) === 10) {
    console.log("You entered the number 10!");
} else {
    console.log("You entered something else.");
}

// 💡 Always convert user input explicitly to avoid loose comparison issues!

// 🚀 Final Thoughts
// JavaScript’s comparison rules can be tricky due to type coercion. Using === is the safest way to compare values, and explicit type conversion prevents unexpected bugs.

// Would you like more real-world examples or need further clarification? 😊🚀


