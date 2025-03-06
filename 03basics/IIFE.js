// Immediately Invoked Function Expression IIFE 

function chai(){
    console.log(`DB CONNECTED`)
}                                           // this is normal function this will print Db connected s 
chai()


// 2. Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
}());


// This is an IIFE (Immediately Invoked Function Expression).
// The function is defined and executed immediately without needing an explicit call










/*
When to Use IIFE?

Avoid polluting the global scope:

Since variables inside an IIFE are not accessible outside, it prevents unintended global variable creation.
Encapsulation:

Helps keep the code modular and prevents accidental modification of variables.
Execute a function immediately:

Useful for initialization logic (e.g., connecting to a database, setting up configuration, etc.).

*/