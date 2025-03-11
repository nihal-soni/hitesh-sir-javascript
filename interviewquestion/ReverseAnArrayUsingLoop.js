

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3])); // Output: [3, 2, 1]


// 3️⃣ Find the sum of all even numbers in an array using forEach()

let arr = [1, 2, ,3 ,4 , 5, 6]
let sum = 0;

arr.forEach(num => {
    if (num % 2 === 0) sum += num;
});
console.log(sum);



// 🔹 Alternative Approach Using reduce()
// A more functional approach using reduce():


let sum1 = arr.reduce((acc, num) => num % 2 === 0 ? acc + num : acc, 0);
console.log(sum1); // Output: 12


// ✅ reduce() eliminates the need for an external variable (sum).
// ✅ More concise and functional programming-friendly.

// 📌 Key Takeaways
// ✔ forEach() iterates over each element in the array.
// ✔ num % 2 === 0 filters even numbers.
// ✔ The sum is updated using sum += num.
// ✔ reduce() is an alternative for a more concise approach.

// 🚀 This is a common interview question testing looping and array manipulation skills!




// 4️⃣ Find the factorial of a number using a loop


function factorial(n){
    let result = 1;
    for (let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));



// 5️⃣ Check if a string is a palindrome using a loop

function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++){
    if (str[i] !== str[len - 1 -i]) return false;
  }
  return true;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("hello"))

/*

📌 Explanation: Check if a String is a Palindrome Using a Loop
A palindrome is a word, phrase, or sequence that reads the same forward and backward (e.g., "racecar", "madam", "121").

This JavaScript function checks if a given string is a palindrome using a for loop.

🔍 Step-by-Step Breakdown
on isPalindrome(str) {

✅ Defines a function isPalindrome(str) that takes a string as input.


    let len = str.length;

✅ Stores the length of the string in the variable len.
For "racecar", len = 7.

    for (let i = 0; i < len / 2; i++) {

✅ Loops from 0 to len / 2

We only need to compare half of the string because the first half should match the second half.

Example:

"racecar" (7 characters)
We check indices (0,6), (1,5), (2,4)
No need to check the middle character ('e' at index 3)

        if (str[i] !== str[len - 1 - i]) return false;
        
✅ Compares characters from the start and end

If any pair doesn’t match, the function returns false immediately.
"racecar" checks:
str[0] !== str[6] → "r" === "r" ✅
str[1] !== str[5] → "a" === "a" ✅
str[2] !== str[4] → "c" === "c" ✅
Since all match, it’s a palindrome.

    }
    return true;
✅ If the loop completes without returning false, it’s a palindrome, so the function returns true.

🔹 Example Outputs

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
console.log(isPalindrome("madam"));   // Output: true
console.log(isPalindrome("12321"));   // Output: true
console.log(isPalindrome("abcd"));    // Output: false


🔹 Alternative Approach Using split(), reverse(), and join()

A simpler way to check for palindromes:


function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

✅ Uses built-in JavaScript methods:

split("") converts the string into an array.
reverse() reverses the array.
join("") joins it back into a string.
Then, it compares the original and reversed string.

📌 Key Takeaways
✔ for loop checks characters from start and end.
✔ Only loops through half of the string for efficiency.
✔ Returns false immediately if a mismatch is found.
✔ Alternative approach using split(), reverse(), and join() is shorter but less efficient.

🚀 This is a common JavaScript interview question testing loops, string manipulation, and efficiency! Let me know if you need further clarification. 🔥

*/