//Scopes in JavaScript
//Scope in JavaScript defines the accessibility and visibility of variables, functions, and objects in different parts of the code.
//  Understanding scope is essential for writing efficient and bug-free JavaScript programs

/*
Types of Scopes in JavaScript
1️⃣ Global Scope
Variables declared outside any function or block belong to the global scope.

They can be accessed from anywhere in the script.
In browsers, global variables become properties of the window object.
*/

// Example

let globalVar = "I am Global" ;  // Global variable

function showGlobal() {
        console.log(globalVar); // Accessible
}

showGlobal();
console.log(globalVar);  // Accessible

// ❌ Problems with Global Scope:
// Pollutes the global namespace (increases the chance of variable name conflicts).
// Harder to debug due to dependencies from different parts of the code.
// Security risk as variables can be accessed and modified from anywhere.




// 2️⃣ Function Scope
// Variables declared inside a function using var, let, or const are function-scoped.
// They cannot be accessed outside the function.

function myFunction() {
    let funcVar = "I am inside the function"; 
    console.log(funcVar); // ✅ Accessible inside the function
}

myFunction();
// console.log(funcVar); // ❌ Uncaught ReferenceError: funcVar is not defined

// 🔥 Key Notes:
// Function scope prevents variables from leaking into the global scope.
// Every function call creates a new scope.

// 3️⃣ Block Scope (ES6)
// Introduced with let and const, variables declared inside {} cannot be accessed outside the block.
// var does not have block scope (only function scope).

{
    let blockVar = "I exist only inside this block";
    console.log(blockVar); // ✅ Accessible
}

// console.log(blockVar); // ❌ Uncaught ReferenceError: blockVar is not defined   //this will not run , or iske baad ke koi function nahi run honge if i use this 


// 🚨 var does NOT have block scope!
{
    var notBlockScoped = "I am NOT block scoped";     //var ko mai function ke outside bhi console log kar sakta hu 
}

console.log(notBlockScoped); // ✅ Accessible (var is function-scoped, not block-scoped)





// 4️⃣ Lexical Scope (Static Scope)
// JavaScript uses lexical (or static) scoping, meaning a function can access variables from its outer (parent) scope.
// Inner functions inherit variables from their outer function but not vice versa.

function outerFunction() {
    let outerVar = "I am from outer scope";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessible due to lexical scoping
    }

    innerFunction();
}

outerFunction();

// Explanation:
// outerVar is declared inside outerFunction().
// innerFunction() does not have outerVar in its local scope.
// JavaScript looks for outerVar in the parent scope (outerFunction()).
// innerFunction() successfully prints "I am from outer function" because of lexical scoping.

// 📌 Key Takeaway:
// A function remembers the scope in which it was defined, not where it is called.



// ✅ Lexical Scope with Multiple Nested Functions

function grandParent() {
    let a = "Grandparent Scope";

    function parent() {
        let b = "Parent Scope";

        function child() {
            let c = "Child Scope";
            console.log(a); // ✅ Accessible (grandparent)
            console.log(b); // ✅ Accessible (parent)
            console.log(c); // ✅ Accessible (child)
        }

        child();
    }

    parent();
}

grandParent();

// Explanation:
// child() can access:
// c from its own scope ✅
// b from parent() scope ✅
// a from grandParent() scope ✅
// But grandParent() cannot access b or c, because JavaScript only looks outward, not inward.



// 🔥 Lexical Scope Works Even If Function Is Called Elsewhere

function outer() {
    let message = "Hello from outer scope";

    return function inner() {
        console.log(message);
    };
}

const myFunc = outer(); // `inner` function is returned
myFunc(); // ✅ Still prints "Hello from outer scope"

/*
Why Does This Work?
inner() is executed after outer() has finished running.
But inner() remembers the scope where it was created (lexical scope).
This is the foundation of closures in JavaScript.
🔥 Difference Between Lexical Scope & Dynamic Scope (For Understanding)
JavaScript follows lexical scope (determined at the time of writing), whereas dynamic scope (used in some languages like Bash) depends on where the function is called.
*/

// Example:

// let name = "Global";

// function outer() {
//     let name = "Outer";

//     function inner() {
//         console.log(name); // Lexical Scope: Will print "Outer"
//     }

//     inner();
// }

// outer();



// Since inner() is defined inside outer(), it follows lexical scope and prints "Outer".
// If JavaScript had dynamic scope, it would print "Global" because outer() is called from the global scope.
















/*
Key Takeaways About Lexical Scope
✅ Functions remember where they were created, not where they are called.
✅ Inner functions can access variables from outer functions.
✅ JavaScript searches for variables outward but not inward.
✅ Closures are a result of lexical scope, allowing functions to remember their original scope even after execution.
*/