// 6️⃣ What happens when we use for...in on an array?
// ✅ for...in iterates over index keys, not values.
// It should not be used on arrays because it may access unexpected properties.

// Example:

let arr = [10, 20, 30];
for (let i in arr) {
    console.log(i, arr[i]); // Output: "0 10", "1 20", "2 30"
}
// ✅ Better Alternative: Use for...of or forEach().

/*
7️⃣ How do you optimize a loop for performance in JavaScript?

✅ Use for loops instead of forEach() for large arrays
✅ Cache array length in a variable
✅ Use map() or reduce() for complex operations
✅ Avoid modifying the loop variable inside the loop
*/

// 8️⃣ Can you loop through an object using forEach()? Why or why not?

// ❌ No, because objects are not iterable with forEach().
// ✅ Use Object.keys(), Object.values(), or Object.entries() instead.

// Example:

let obj = { a: 1, b: 2, c: 3 };

Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});

/*

9️⃣ What is tail call optimization, and how does it relate to loops?

✅ Tail Call Optimization (TCO) improves recursion performance by preventing stack overflow.
✅ Loops are often more efficient than recursion, but TCO helps optimize recursive functions.

Example of TCO (only in some JS engines):
*/

function factorial(n, acc = 1) {
    if (n === 1) return acc;
    return factorial(n - 1, n * acc); // Tail call
}
console.log(factorial(5)); // 120





// 🔟 How do you exit from a nested loop?
// ✅ Use break with a label to exit multiple loops.

// Example:


outerLoop: for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) break outerLoop;
        console.log(i, j);
    }
}