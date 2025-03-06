// lets understand if statement 

/*
1️⃣ Conditional Statements (Decision Making)
Conditional statements allow the execution of different code blocks based on conditions.
*/

// 1.1 if Statement
// Executes a block of code only if a specified condition is true.

let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 1.2 if...else Statement
// Executes one block if the condition is true, otherwise executes another.

let age2 = 16;
if (age2 >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are too young to vote.");
}


// 1.3 if...else if...else Statement
// Used when there are multiple conditions.

let score = 74;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// 1.4 Ternary Operator (? :)
// A shorthand for if...else.

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome Back!" : "Please log in.";
console.log(message);      //  it will print Welcome back because is logged in is true

//

// example1 for real world use cases using and && operator

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course ")
}

// example1 for real world use cases using or || operator
const isLoggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isLoggedInFromGoogle || loggedInFromEmail ) {
    console.log("user is logged in")
}


