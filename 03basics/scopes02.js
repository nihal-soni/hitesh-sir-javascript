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