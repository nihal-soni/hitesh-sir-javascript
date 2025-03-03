// What is a Function in JavaScript?

// A function is a block of reusable code that performs a specific task. Functions allow you to write cleaner, more maintainable code by encapsulating logic that can be executed whenever needed.

// Function Definition
// A function is defined using the function keyword, followed by a name, parentheses (), and a code block {}.

// Syntax of a Function:

function functionName(parameters) {
    // Function body
    return value; // Optional
}

// What are Parameters in Functions?
// A parameter is a variable listed inside the function’s parentheses. When calling a function, you pass arguments (actual values) to these parameters.

// Function with Parameters Example

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Nihal"); // Output: Hello, Nihal!

// 🔹 Explanation:

// name is a parameter in the function.
// "Nihal is an argument passed when calling the function.


// 1. Function without Parameters
// A function that does not take any input.


function sayHello() {
    console.log("Hello, World!");
}
sayHello(); // Output: Hello, World!

// 🔹 Explanation:

// This function does not take any parameters and always prints "Hello, World!".


// 2. Function with Parameters
// A function that takes inputs and performs operations using them.

function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// 🔹 Explanation:

// a and b are parameters.
// When calling add(5, 3), 5 and 3 are passed as arguments.

// 3. Function with Default Parameters
// A function where parameters have default values if no argument is passed.

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet();        // Output: Hello, Guest!
greet("Nihal");  // Output: Hello, Nihal!

// 🔹 Explanation:

// If no argument is provided, "Guest" is used as the default value.


// 4. Function with Multiple Parameters
// A function that accepts multiple inputs.


function multiply(a, b, c) {
    return a * b * c;
}
console.log(multiply(2, 3, 4)); // Output: 24

// 🔹 Explanation:

// a, b, and c are parameters.
// multiply(2, 3, 4) passes 2, 3, and 4 as arguments.



// 5. Function Expression
// A function stored in a variable.


const square = function(num) {
    return num * num;
};
console.log(square(4)); // Output: 16


// 🔹 Explanation:

// The function is assigned to the variable square.



// 6. Arrow Function (ES6)
// A shorter syntax for writing functions.

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Nihal")); // Output: Hello, Nihal!


// 🔹 Explanation:

// => is the arrow function syntax.
// The function automatically returns the result.


// 7. Function Returning Another Function
// A function that returns another function as output.


function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // Output: 10

// 🔹 Explanation:

// multiplier(2) returns a function that multiplies by 2.
// double(5) executes that function, returning 10.