
// is javascript is dynamically typed or stactically type -  JavaScript is a dynamically typed language, meaning the type of a variable is determined at runtime based on the value assigned to it, rather than being declared beforehand like in statically typed languages; this allows variables to change types throughout the program execution. 
// Key points about JavaScript's dynamic typing:
// No explicit type declaration: When creating a variable in JavaScript, you don't need to specify its data type. 
// Runtime type checking: The type of a variable is only checked when the code is running. 
// Flexibility: This allows for quick development but can also lead to potential type-related errors if not careful. 



//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3  





// ***************** Understanding memory HEAP AND STACK ************** //

// stack (Primitive) , HEAP  (NON - PRIMITIVE)


// let myYoutubeChannelName = "Nihalsoni"

// let anothername = myYoutubeChannelName

// console.log(myYoutubeChannelName)
// console.log(anothername)

// let userOne = {
//     email: "nihal.devv23@gmail.com",
//     upi: "nihal@axl",
//     password: 3434343

// }

// let userTwo = userOne
// userTwo.email = "nihalsoni0523@gmail.com"

// console.log(userOne.email);
// console.log(userTwo.email)



function multiply(a, b) {
    let result = a * b;  // Stored in stack
    return result;       // Removed after function execution
}

let x = 10;  // Stored in stack
let y = 20;  // Stored in stack
let product = multiply(x, y);  // multiply() execution context is added to the stack
console.log(product);  // multiply() context is removed from stack after returning

// 📌 Stack stores x, y, and result because they are primitive values.
// 📌 Once the function execution is completed, the execution context is removed from the stack.




// 2. Heap Memory
// The heap is an unstructured memory region used for storing objects and reference types.

// Characteristics of Heap Memory:
// Stores Objects & Reference Data Types: Objects, arrays, functions, and instances of classes.
// Unstructured and Dynamic Allocation: Memory allocation is managed dynamically.
// Garbage Collection: JavaScript automatically frees unused objects, but inefficient code can lead to memory leaks.

// Example of Heap Memory Usage

let obj1 = { name: "Alice", age: 25 };  // Stored in heap
let obj2 = obj1;  // Reference to the same heap memory location
obj2.age = 30; 

console.log(obj1.age); // 30 (both obj1 and obj2 reference the same object)

// 📌 Heap stores the object { name: "Alice", age: 25 }, and both obj1 and obj2 point to the same memory location.
// 📌 Modifying obj2 also modifies obj1 because they reference the same object in the heap.



//Key Differences Between Stack & Heap
 
// Feature	                   Stack Memory	                                                    Heap Memory

// Type of  Data	         Stores primitive values	                               Stores objects and reference types
// Access Speed	               Fast (direct access)	                                     Slower (indirect reference)
// Memory Management     	Auto-managed (pops off after execution)              	  Managed via garbage collection
// Usage	                 Function execution, local variables	                            Complex objects, global data
// Reference Type?	           No (stores actual value)	                               Yes (stores reference to the object)
