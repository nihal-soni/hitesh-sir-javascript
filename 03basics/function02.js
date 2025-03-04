// lets create a function1. 
// Logging in a User

function loginUser(username, password){
    if(username === "Nihal" && password === "12345" ){
       return "Login Successful!";
    }
   return "Invalid Credentials";
}

console.log(loginUser("Nihal" ,"12345"));


// 2. Shopping Cart Total Calculation

function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
}
const cart = [{ price: 50 }, { price: 30 }, { price: 20 }];
console.log(calculateTotal(cart)); // Output: 100

// 🔹 Explanation:

// Function takes a shopping cart array and calculates the total price.


// 3. Temperature Converter

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(celsiusToFahrenheit(30)); // Output: 86

// 🔹 Explanation:

// Converts Celsius to Fahrenheit.




// Common Interview Questions on Functions
// Basic Questions

// What is a function?
// → A reusable block of code that performs a specific task.

// What is the difference between parameters and arguments?
// → Parameters are placeholders, arguments are actual values passed.

// What is a default parameter?
// → A parameter that has a default value when no argument is provided.

// Advanced Questions

// What are higher-order functions?
// → Functions that take other functions as parameters or return functions.

// What are closures in JavaScript?
// → A function that retains access to its parent’s variables even after execution.

// Explain function currying.
// → A technique where a function takes multiple arguments one at a time.



// Coding Questions




// Reverse a string using a function.

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"




// Find the factorial of a number.

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
