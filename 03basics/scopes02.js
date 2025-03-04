// 5️⃣ Closure & Scope
// A closure is created when an inner function remembers variables from its outer function, even after the outer function has executed.
// ✅ Example of Closure:

function outer() {
    let count = 0; // Private variable

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
// 🔹 Here, count is remembered by inner() even after outer() finishes execution

// example-2

 function outer1(){
    let count2 = 3;


    return function inner1(){
        count2++;
        console.log(count2);

    }
 }
 
 const counter1 = outer1();
 counter1();
 counter1();
 counter1();
 counter1();
 counter1();
 counter1();
 counter1();
 counter1();
 counter1();
 counter1();


/*
 6️⃣ Module Scope (ES6 Modules)
Each JavaScript module has its own scope.
Variables and functions declared inside a module are not accessible globally unless explicitly exported.
*/

// ✅ Example:

// module.js
// export const moduleVar = "I am module scoped";

// // main.js
// import { moduleVar } from './module.js';
// console.log(moduleVar); // ✅ Accessible because it's imported


// 7️⃣ Scope Chain
// When a variable is used inside a function, JavaScript looks for it in the local scope first.
// If not found, it moves up to the outer (parent) scope and continues until it reaches the global scope.
// If still not found, it throws a ReferenceError.

// ✅ Example of Scope Chain:


let a = "Global";

function first() {
    let b = "First Scope";

    function second() {
        let c = "Second Scope";
        console.log(a); // ✅ Found in global scope
        console.log(b); // ✅ Found in first()
        console.log(c); // ✅ Found in second()
    }

    second();
}

first();

/*
🔥 var vs let vs const in Scope

Feature	                    var	                                  let	                                          const

Function Scoped	            ✅	                                 ✅	                                            ✅

Block Scoped	            ❌	                                 ✅	                                            ✅

Reassignable	            ✅	                                 ✅	                                            ❌

Redeclarable in Same Scope	✅	                                 ❌	                                            ❌

*/

// ✅ Example:

function test() {
    var x = 1;
    let y = 2;
    const z = 3;

    if (true) {
        var x = 10; // ✅ Allowed (No block scope)
        let y = 20; // ✅ New variable inside block
        const z = 30; // ✅ New variable inside block
        console.log(x, y, z); // 10, 20, 30
    }

    console.log(x, y, z); // 10, 2, 3
}
test();




/*
🛠 Interview Questions on Scope
1️⃣ What is the difference between var, let, and const in terms of scope?
2️⃣ How does JavaScript implement lexical scoping?
3️⃣ What is a closure, and how does it relate to scope?
4️⃣ Can a function access variables from its parent scope?
5️⃣ What is the scope chain in JavaScript?
6️⃣ How does block scope work in JavaScript?
7️⃣ What are the issues with using global variables?
8️⃣ How does ES6 module scope differ from regular JavaScript scope?
9️⃣ Why does var leak out of blocks while let and const don’t?
🔟 What will be the output of the following code?
*/

function foo() {
    if (true) {
        var x = 10;
        let y = 20;
    }
    console.log(x); // ?      
    console.log(y); // ?
}
foo();

// the output of the code is 10 because Var is the functional scope and let is blocked scope  , 

/*
🎯 Summary
Global Scope: Accessible everywhere, but should be avoided due to conflicts.

Function Scope: Variables inside functions are not accessible outside.

Block Scope: let and const are limited to {} blocks, but var isn’t.

Lexical Scope: Inner functions inherit variables from outer functions.

Closures: Functions that "remember" variables even after the parent function runs.

Module Scope: Each module has its own scope.

Scope Chain: JS searches variables from local to global scope.
🔥 Mastering scopes in JavaScript helps write cleaner, bug-free, and efficient code! 🚀
*/
