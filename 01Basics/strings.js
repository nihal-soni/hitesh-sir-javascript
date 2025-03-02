// Strings in JavaScript
// In JavaScript, a string is a sequence of characters used to represent text. Strings are immutable (cannot be changed once created) and can be defined using single quotes ('), double quotes ("), or template literals (` `).

// 1. Declaring Strings

let singleQuote = 'Hello, World!';
let doubleQuote = "Hello, World!";
let templateLiteral = `Hello, World!`;


// 💡 Best Practice
// Use single or double quotes for simple strings.

// Use template literals for multi-line strings and when inserting variables inside a string.

// 2. String Properties
// (i) Length of a String

let texttry = "JavaScript";
console.log(texttry.length); // 10

// 3. String Methods

// (i) Accessing Characters
// You can access characters in a string using bracket notation ([]) or charAt().

// let str = "JavaScript";
// console.log(str[0]);      // 'J'
// console.log(str.charAt(1)); // 'a'

// (ii) String Concatenation

// Using + or concat()

let first = "Hello";
let second = "World";
console.log(first + " " + second); // Hello World
console.log(first.concat(" ", second)); // Hello World

// (iii) Template Literals (ES6)

let name = "John";
console.log(`Hello, ${name}!`); // Hello, John!

// (iv) Changing Case

let text = "JavaScript";
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"


// (v) Trimming Strings

let str = "   JavaScript   ";
console.log(str.trim());  // "JavaScript"
console.log(str.trimStart()); // "JavaScript   "
console.log(str.trimEnd());   // "   JavaScript"

// (vi) Extracting a Substring
// slice(start, end): Extracts part of a string
// substring(start, end): Similar to slice, but does not accept negative indices
// substr(start, length): Extracts a substring of a given length

let str1 = "JavaScript";
console.log(str1.slice(0, 4)); // "Java"
console.log(str1.substring(0, 4)); // "Java"
console.log(str1.substr(4, 6)); // "Script"

// (vii) Replacing Part of a String

let text1 = "I love JavaScript";
console.log(text1.replace("JavaScript", "Python")); // "I love Python"


// For global replacement, use a regular expression with g flag:

let text2 = "JavaScript is great. JavaScript is powerful.";
console.log(text2.replace(/JavaScript/g, "Python"));
// "Python is great. Python is powerful."


// (viii) Splitting a String

let text3 = "Apple, Banana, Cherry";
console.log(text.split(", ")); // ["Apple", "Banana", "Cherry"]


// (ix) Checking for Substrings
// includes(): Checks if a substring exists.
// startsWith(): Checks if a string starts with a specific substring.
// endsWith(): Checks if a string ends with a specific substring.

let sentence = "JavaScript is amazing!";
console.log(sentence.includes("JavaScript")); // true
console.log(sentence.startsWith("Java")); // true
console.log(sentence.endsWith("amazing!")); // true


// (x) Repeating a String

let str3 = "Hello ";
console.log(str3.repeat(3)); // "Hello Hello Hello "


// 4. String Escape Characters
// Escape Sequence	Description
// \n	New line
// \t	Tab space
// \'	Single quote
// \"	Double quote
// \\	Backslash

let str2= "Hello\nWorld!";
console.log(str2);
// // Output:
// // Hello
// // World!

// 5. String Conversion
// Convert non-string values to a string:

let num = 100;
console.log(String(num)); // "100"
console.log(num.toString()); // "100"

// 6. String Comparison
// Strings are compared lexicographically (Unicode values).


console.log("apple" > "banana"); // false ('a' < 'b')
console.log("100" < "20"); // true ('1' < '2' in string comparison)

// 7. Interview Questions
// 1️⃣ Reverse a String

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"


// 2️⃣ Check if a String is a Palindrome

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam")); // true

// 3️⃣ Count the Number of Vowels in a String

function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("JavaScript")); // 3

// 8. Real-World Example
// URL Sanitization

function sanitizeUrl(url) {
    return url.trim().toLowerCase().replace(/\s+/g, "-");
}
console.log(sanitizeUrl("  Hello World Page  ")); // "hello-world-page"


// 🔹 Summary
// ✅ Strings are immutable.
// ✅ Can be defined using '', "", or template literals (` `).
// ✅ Use string methods for manipulation (slice, split, replace, etc.).
// ✅ Use escape sequences for formatting.
// ✅ Template literals allow multi-line strings and interpolation.
// ✅ String comparison is based on Unicode values.
// ✅ JavaScript strings are powerful for handling text data.
