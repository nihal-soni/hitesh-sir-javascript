/*
📌 1. Types of Loops in JavaScript
For Loop
While Loop
Do-While Loop
For...of Loop
For...in Loop
forEach() (Array Method)
*/

//  lets understand for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];                               //this is the basic syntax of for loop
    
// }
// for (initialization; condition; increment/decrement) {
//     // code to execute
// }
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// // Output: 1, 2, 3, 4, 5


for (let i = 1; i <= 10; i++){    
    // console.log(i)
}
// output 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8,9,10

for (let i = 5; i >= 1; i--) {            // Looping Backwards
    // console.log(i);
}
// Output: 5, 4, 3, 2, 1

let myArray = ["Flash" , "Batman" , "Superman"]
console.log(myArray.length)
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i];
    console.log(element)
}                                   // example of array
              

// Skipping Iterations Using continue

for (let i = 1; i <= 9;  i++){
     if (i === 7) continue;
    //  console.log(i)          // this will not print 7  , and continue printing 
}



// ✅ Breaking the Loop Using break

for (let i = 1; i <= 7; i++){
    if (i == 4) break;
    console.log(i)
}