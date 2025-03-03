// // Objects De-structure 

// 1️⃣ Object Destructuring in JavaScript
// Destructuring is a feature in JavaScript that allows you to extract values from objects (or arrays) and store them in variables using a cleaner syntax.

// ✅ Why Use Destructuring?
// Shorter code (removes the need for repetitive obj.property syntax)
// Easier readability
// Efficient extraction of multiple properties at once

//  lets take an example 

const course = {
    courseName: " Js in hindi ",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}





// Example: Basic Object Destructuring
// Before (Without Destructuring)

const user1 = {
    name: "John",
    age: 30,
    country: "USA"
};

const name = user1.name;
const age = user1.age;
console.log(name, age); // John 30

// After (With Destructuring)

const user2 = {
    name1: "John",
    age2: 30,
    country: "USA"
};

// Destructuring
const { name1, age1 } = user2;
console.log(name1, age1); // John 30

// 👉 Now, we don't need to write user.name or user.age separately.


// 📌 Destructuring with Different Variable Names

const student1 = { fullName: "Nihal", grade: "A" };

// Rename while destructuring
const { fullName: name2, grade: score1 } = student1;

console.log(name2, score1); // Nihal A

// 👉 fullName is assigned to name and grade to score.



// 📌 Destructuring with Different Variable Names

const student2 = { fullName: "Alice", grade: "A" };

// Rename while destructuring
const { fullName: name3, grade: score2 } = student21;

console.log(name3, score2); // Alice A

// 👉 fullName is assigned to name and grade to score.




// 📌 Destructuring with Default Values
// If a property does not exist, a default value is assigned.


const employee = { name3: "Sam" };

// "age" is missing, so default value is used
const { name4, age4 = 25 } = employee;
console.log(name4, age4); // Sam 25




// 📌 Nested Object Destructuring

const person = {
    name6: "Jake",
    address: {
        city: "New York",
        zip: 10001
    }
};

// Extract nested properties

const { name6, address: { city, zip } } = person;
console.log(name6, city, zip); // Jake New York 10001


// 🔹 Explanation
// person is an object that contains another object address inside it.
// We want to extract:
// name (direct property of person).
// city and zip (nested inside address).
// Destructuring Syntax:

// const { name, address: { city, zip } } = person;
// { name } extracts name directly.
// { address: { city, zip } } goes inside the address object and extracts city and zip.
// Note: address itself is not extracted, only its properties.

// 🔹 What if You Want the address Too?
// If you also want to keep the whole address object, destructure it separately:

// const { name, address, address: { city, zip } } = person;

// console.log(name, address, city, zip);
// // Jake { city: 'New York', zip: 10001 } New York 10001


// Now, address itself is also available.

// 🔹 Using Default Values in Nested Destructuring
// If a property does not exist, you can provide a default value:


// const person = {
//     name: "Jake",
//     address: {
//         city: "New York"
//     }
// };

// // "zip" is missing, so we provide a default value
// const { name, address: { city, zip = "Not Provided" } } = person;

// console.log(name, city, zip); // Jake New York Not Provided
// 👉 If zip is missing, "Not Provided" is assigned.





// 📌 Function Parameter Destructuring
// Instead of passing an entire object and accessing properties, destructure it in function parameters.


const product1 = { title: "Laptop", price: 1000 };

function displayProduct({ title, price }) {
    console.log(`Product1: ${title}, Price: $${price}`);
}

displayProduct(product1); // Product: Laptop, Price: $1000




// 📌 2. Function Parameter Destructuring
// Instead of passing an entire object and accessing its properties manually, we can destructure the object inside the function parameter itself.

// 🔹 Example Without Destructuring

const product2 = { title: "Laptop", price: 1000 };

function displayProduct(Product2) {
    console.log(`Product2: ${product2.title}, Price: $${product2.price}`);
}

// displayProduct(product); // Product: Laptop, Price: $1000
// 👉 Here, we access properties using product.title and product.price.

// 🔹 Example With Destructuring

// const product = { title: "Laptop", price: 1000 };

// function displayProduct({ title, price }) {
//     console.log(`Product: ${title}, Price: $${price}`);
// }

// displayProduct(product); // Product: Laptop, Price: $1000
// 🔹 Explanation
// Instead of passing the whole object and using product.title or product.price, we destructure the parameters inside the function.
// This extracts title and price directly, making the function cleaner.
// 🔹 Using Default Values in Function Parameter Destructuring
// If an object property is missing, set a default value:


// const product = { title: "Laptop" };

// function displayProduct({ title, price = "Not Available" }) {
//     console.log(`Product: ${title}, Price: $${price}`);
// }

// displayProduct(product); // Product: Laptop, Price: Not Available
// 👉 Since price is missing, "Not Available" is used as the default value.

// 🔹 Function Parameter Destructuring with Nested Objects
// If an object contains nested properties, we can destructure them inside function parameters.

const user = {
    name: "Alice",
    location: {
        city: "Los Angeles",
        country: "USA"
    }
};

// // Destructuring nested properties inside function parameters
function displayUser({ name, location: { city, country } }) {
    console.log(`User: ${name}, City: ${city}, Country: ${country}`);
}

displayUser(user); // User: Alice, City: Los Angeles, Country: USA


// 👉 Breakdown:

// name is extracted from user.
// city and country are extracted from user.location.




// 🔹 Function Parameter Destructuring with REST Operator (...rest)
// If we want to extract some properties and group the remaining ones, use the REST operator (...).


const employee1 = { name: "Bob", age: 30, position: "Developer", salary: 5000 };

function showEmployee1({ name, age, ...otherDetails }) {
    console.log(`Name: ${name}, Age: ${age}`);
    console.log("Other Details:", otherDetails);
}

// showEmployee(employee);
// Name: Bob, Age: 30
// Other Details: { position: 'Developer', salary: 5000 }
// 👉 ...otherDetails stores the remaining properties { position: 'Developer', salary: 5000 } in an object.

// 🎯 Key Takeaways
// Feature	                                                   Explanation	                                                          Example
// Nested Destructuring	                            Extracts values from objects inside objects	                          { address: { city, zip } } = person
// Function Parameter                             Destructuring	Destructures parameters directly in functions	            function({ title, price }) {}
// Default Values	                            Provides fallback values if a property is missing                          	{ age = 25 } = user
// Destructuring with Renaming	A                    ssigns object properties to new variable names                        { fullName: name } = person
// Rest Operator (...rest)	                            Captures remaining properties	                                     const { name, ...rest } = obj


                          

// ✨ Final Thoughts
// 1️⃣ Nested destructuring simplifies accessing deeply nested properties.
// 2️⃣ Function parameter destructuring makes functions cleaner by directly extracting needed properties.
// 3️⃣ Default values ensure safety against missing properties.
// 4️⃣ The rest operator (...rest) helps handle additional properties efficiently.

// Would you like a real-world project using these concepts? 🚀