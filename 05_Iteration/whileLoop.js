/*
🔹 2. While Loop (Basic to Advanced)
✅ Basic Syntax

while (condition) {
    // code to execute
}
    */

// ✅ Example: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    // console.log(i);
    i++;
}
// Output: 1, 2, 3, 4, 5


// ✅ Looping Backwards

let j = 9;
while (j >= 1){
    // console.log(j)
    j--;
}
// 

// ✅ Using break in a While Loop

let k = 1;
while (k <= 5) {
    if( k === 4) break;
    // console.log(k)
    k ++
}

let myArray = ['flash' , "superman", "batman"]

let arr = 0;
while (arr < myArray.length) {
    // console.log(`value is ${myArray[arr]}`);
    arr = arr +  1;        // I f
}



// 🔹 3. Do-While Loop (Runs at Least Once)


// Unlike the while loop, a do-while loop runs at least once, even if the condition is false.
/*

do {
    // code to execute
} while (condition);

The code inside the do block runs once, no matter what.

Then, the while condition is checked.

If the condition is true, the loop continues.

If the condition is false, the loop stops.

*/
let l = 1;
do {
    // console.log(l);
    l++;
} while ( l <= 7);
/*
🔹 Explanation:

i starts at 1, so the code inside the loop runs and prints 1.
i is incremented (i = 2).
The condition (i <= 5) is true, so the loop runs again.
This continues until i becomes 6, at which point the condition is false, and the loop stops.
*/


let n = 9
do {
    console.log(n);
    n--;
} while (n >= 1);



let score = 1
do {
    console.log(` Score is ${score}`)
    score++
} while  (score <= 10)



//     ✅ Example 2: When Condition is False from the Start
// Even if the condition is false, the do...while loop executes once.

let o = 10;

do {
    console.log(o); 
} while (o < 5);
Output:
10

// 🔹 Explanation:

// The do block executes before checking the condition.
// Even though i < 5 is false, 10 is printed at least once.



// ✅ Example 4: Using break in do...while

let p = 1;

do {
    console.log(p);
    if (p === 3) break; // Exit the loop when i = 3
    p++;
} while (p <= 5);


// Output:

// 1
// 2
// 3

// 🔹 Explanation:

// When i === 3, the break statement stops the loop immediately.
// ✅ Example 5: Using continue in do...while

let q = 0;

do {
    q++;
    if (q === 3) continue; // Skip when i = 3
    console.log(q);
} while (q < 5);
// Output:

// 1
// 2
// 4
// 5

// 🔹 Explanation:

// When i === 3, continue skips the console.log(i); statement.
// The loop continues with the next iteration.

/*

🎯 Interview Questions on do...while Loop

What is the main difference between while and do...while loops?

When would you use a do...while loop instead of a while loop?

What will be the output of this code?

let i = 5;
do {
    console.log(i);
    i++;
} while (i < 5);
 
Can a do...while loop run infinitely? Provide an example.
Write a do...while loop that asks a user for input and continues until they enter "exit".

*/