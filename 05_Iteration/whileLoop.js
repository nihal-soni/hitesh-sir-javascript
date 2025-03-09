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
    arr = arr +  1;
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
    console.log(l);
    l++;
} while ( l <= 7);
/*
🔹 Explanation:

i starts at 1, so the code inside the loop runs and prints 1.
i is incremented (i = 2).
The condition (i <= 5) is true, so the loop runs again.
This continues until i becomes 6, at which point the condition is false, and the loop stops.
*/

/*
✅ Example 2: When Condition is False from the Start
Even if the condition is false, the do...while loop executes once.
*/