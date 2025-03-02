// Array
// What is an Array?
// An array in JavaScript is a special variable that can store multiple values in a single variable. Instead of creating multiple variables, we use an array to hold a collection of items.

// Why Use Arrays?
// ✅ Allows storing multiple values in a single variable.
// ✅ Provides built-in methods for easy data manipulation.
// ✅ Helps in iterating and performing operations efficiently.


const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr)



// 📌 Basic Concepts of Arrays
// 1️⃣ Creating an Array
// 1.1 Using an Array Literal (Recommended)

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// 1.2 Using the new Array() Constructor

let numbers = new Array(10, 20, 30);
console.log(numbers);

// ⚠️ Avoid using new Array(5) because it creates an empty array of size 5 instead of an array with [5].

// 1.3 Empty Array

let emptyArr = [];
console.log(emptyArr);



// 2️⃣ Accessing and Modifying Array Elements
// Array elements are accessed using index numbers, starting from 0.

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Red
console.log(colors[2]); // Blue
colors[1] = "Yellow"; // Modify element
console.log(colors); // ["Red", "Yellow", "Blue"]


// Getting the Length of an Array

console.log(colors.length); // 3

// 📌 Array Methods & Operations
// 3️⃣ Common Array Methods
// 3.1 Adding & Removing Elements

// Method	        Description	                   Example
// push()	       Adds to the end	             arr.push(4);
// pop()	       Removes from the end	         arr.pop();
// unshift()	   Adds to the beginning	    arr.unshift(1);
// shift()	     Removes from the beginning	     arr.shift();

let arr1 = [1, 2, 3];

arr1.push(4); // [1, 2, 3, 4]
arr1.pop(); // [1, 2, 3]
arr1.unshift(0); // [0, 1, 2, 3]
arr1.shift(); // [1, 2, 3]


// 3.2 Slicing & Splicing

// Method	Description	Example
// slice(start, end)	Returns part of the array	arr.slice(1, 3);
// splice(start, deleteCount, ...items)	Removes/adds items	arr.splice(1, 1, "new");

let arr2 = [10, 20, 30, 40, 50];
console.log(arr2.slice(1, 3)); // [20, 30]

arr3.splice(2, 1, 100); // Replace 30 with 100
console.log(arr3); // [10, 20, 100, 40, 50]


// 3.3 Searching in Arrays
// Method	       Description	                  Example
// indexOf()	Returns index of element	arr.indexOf(3);
// includes()	Checks if element exists	arr.includes(5);

let arr4 = [5, 10, 15];
console.log(arr4.indexOf(10)); // 1
console.log(arr4.includes(20)); // false


// 3.4 Iterating Over Arrays
// Method	              Description	                                           Example
// forEach()  	    Loops through elements	                             arr.forEach(x => console.log(x));
// map()	       Returns a new array after applying function	        arr.map(x => x * 2);
// filter()	       Returns elements that match a condition	            arr.filter(x => x > 5);
// reduce()	        Reduces array to a single value	                     arr.reduce((a, b) => a + b, 0);

let numbers1 = [1, 2, 3, 4];

// forEach
numbers1.forEach(num => console.log(num)); 

// map
let doubled = numbers1.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter
let even = numbers1.filter(num => num % 2 === 0);
console.log(even); // [2, 4]

// reduce
let sum = numbers1.reduce((total, num) => total + num, 0);
console.log(sum); // 10


// 📌 Advanced Array Concepts
// 4️⃣ Spread Operator (...)
// The spread operator expands an array into individual elements.


let arr5 = [1, 2, 3];
let arr6 = [...arr5, 4, 5]; 
console.log(arr6); // [1, 2, 3, 4, 5]

// 5️⃣ Array Destructuring
// Extract values into variables.


let [first, second] = ["A", "B", "C"];
console.log(first); // "A"

// 6️⃣ Flattening Nested Arrays
// Use flat() to convert a multidimensional array into a single-level array.


let nested = [1, [2, [3, 4]], 5];
console.log(nested.flat(2)); // [1, 2, 3, 4, 5]

// 7️⃣ Sorting & Reversing
// Method	Description	Example
// sort()	Sorts alphabetically (modify function for numeric)	arr.sort();
// reverse()	Reverses the array	arr.reverse();

let nums = [30, 10, 20];
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [10, 20, 30]

nums.reverse();
console.log(nums); // [30, 20, 10]

// 📝 Interview Questions & Practice
// 1️⃣ Remove Duplicates from an Array

let arr7 = [1, 2, 2, 3, 4, 4];
let uniqueArr = [...new Set(arr7)];
console.log(uniqueArr); // [1, 2, 3, 4]

// 2️⃣ Find Maximum Value

let numbers4 = [10, 5, 20, 8];
let max = Math.max(...numbers4);
console.log(max); // 20


// 3️⃣ Sum of All Elements

let numbers5 = [1, 2, 3, 4, 5];
let sum2 = numbers5.reduce((acc, val) => acc + val, 0);
console.log(sum2); // 15



// 4️⃣ Find Second Largest Number

let arr8 = [10, 20, 4, 45, 99];
arr.sort((a, b) => b - a);
console.log(arr8[1]); // 45


// 5️⃣ Check If an Array is Empty

let arr = [];
console.log(arr.length === 0); // true