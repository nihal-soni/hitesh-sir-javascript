// ✅ Coding Questions

// 1️⃣ Print numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz"
for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
}



// 📌 Explanation of the FizzBuzz Code
// This JavaScript program prints numbers from 1 to 100 but replaces:

// Multiples of 3 with "Fizz"
// Multiples of 5 with "Buzz"
// Multiples of both 3 and 5 with "FizzBuzz"
// 🔍 Step-by-Step Breakdown

// for (let i = 1; i <= 100; i++) {

// ✅ for loop:

// Initializes i = 1
// Runs until i <= 100
// Increments i by 1 after each iteration

//     let output = "";

// // ✅ Declares an empty string output

// // This will store "Fizz", "Buzz", or "FizzBuzz" if conditions are met.

//     if (i % 3 === 0) output += "Fizz";

// // ✅ Checks if i is divisible by 3

// If i % 3 === 0, "Fizz" is added to output.

//     if (i % 5 === 0) output += "Buzz";

// // ✅ Checks if i is divisible by 5

// If i % 5 === 0, "Buzz" is added to output.

//     console.log(output || i);

//     
/*
✅ Prints output if it’s not empty, otherwise prints i

If output contains "Fizz" or "Buzz", print it
If output is still an empty string (not divisible by 3 or 5), print i

🔹 Example Outputs
i	Condition	output	Printed Value
1	Not divisible by 3 or 5	""	1
2	Not divisible by 3 or 5	""	2
3	Divisible by 3 (not 5)	"Fizz"	"Fizz"
5	Divisible by 5 (not 3)	"Buzz"	"Buzz"
15	Divisible by 3 & 5	"FizzBuzz"	"FizzBuzz"
*/


/*
🚀 Optimized Version
If we want better readability:
*/

for (let i = 1; i <= 100; i++) {
    let isFizz = i % 3 === 0;
    let isBuzz = i % 5 === 0;
    console.log(isFizz && isBuzz ? "FizzBuzz" : isFizz ? "Fizz" : isBuzz ? "Buzz" : i);
}

/*
✅ Uses ternary operators for concise logic.

📌 Key Takeaways
✔ i % 3 === 0 → "Fizz"
✔ i % 5 === 0 → "Buzz"
✔ i % 3 === 0 && i % 5 === 0 → "FizzBuzz"
✔ console.log(output || i) ensures numbers print if not replaced.

This is a common coding interview question, and the approach is clean and efficient! 🚀
*/