/*
🎯 JavaScript Loop Interview Questions (With Answers & Explanations)
✅ Basic Questions

1️⃣ What is the difference between for, while, and do...while loops?
*/
/*
Feature	                                for Loop	                                     while Loop	                                       do...while Loop

Best Used For	              When you know the number of iterations	  When iterations depend on a condition	              When you need at least one execution

Structure	                  for (init; condition; update) {}	                while (condition) {}	                               do { } while (condition);

Executes At Least Once?	             ❌ No	                                         ❌ No	                                                  ✅ Yes
 
*/
// Example:

// for loop
for (let i = 0; i < 3; i++) {
    console.log(i);  // Output: 0, 1, 2
}

// while loop
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}

// do...while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 3);


/*

2️⃣ How does the break and continue statement work inside a loop?
✅ break Statement: Exits the loop immediately.
✅ continue Statement: Skips the current iteration and moves to the next one.

Example:
*/
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);  // Output: 1, 2 (stops at 3)
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);  // Output: 1, 2, 4, 5 (skips 3)
}

/*

3️⃣ What is an infinite loop? Give an example.
An infinite loop runs forever because its condition never becomes false.

Example of an Infinite Loop:
*/

while (true) {
    console.log("This will run forever!");
}
// Fix: Ensure the loop condition eventually becomes false.


/*
4️⃣ Which loop is best for iterating over objects in JavaScript?
✅ Use for...in for objects
✅ Use for...of for arrays and iterables

Example:
*/
let obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(key, obj[key]);  // Output: a 1, b 2, c 3
}

/*

5️⃣ How does forEach() differ from for...of?

Feature       	                 forEach()	                                 for...of
Works On	                      Arrays	                        Arrays, Strings, Maps, Sets
Can break or continue?	          ❌ No	                            ✅ Yes
Syntax	                    array.forEach(item => {...})	      for (let item of array) {...}

Example:
*/

let arr = [1, 2, 3];

// forEach()
arr.forEach(num => console.log(num));

// for...of
for (let num of arr) {
    console.log(num);
}
