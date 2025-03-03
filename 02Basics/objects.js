// What is an Object in JavaScript?
// In JavaScript, an object is a collection of key-value pairs where the keys are strings (or Symbols) and the values can be of any data type (strings, numbers, arrays, functions, other objects, etc.). Objects allow us to store and manage structured data.

// Creating an Object
// There are multiple ways to create objects in JavaScript:

// 1. Object Literal

const person = {
    name: "Nihal soni",
    age: 20,
    isStudent: false,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
    
};

const person2 = {
    name: "Harkirat singh",
    email: "harkirat@gmail.com",
    isTeacher: true,
    greet:  function() {
        console.log(`Hello , ${this.name}`);
    }
};
// Accessing object properties
console.log(person.name);  // Nihal soni
console.log(person["age"]);  // 20

// Calling object method
person.greet();  // Hello, my name is Nihal soni.

// accessing objecy properties

console.log(person2.name);
console.log(person2["email"])

// calling object method again

person2.greet();


// 2. Ways to Create Objects
// 2.1 Object Literal
// The easiest and most common way to create an object.

const car ={
    brand: "Toyota",
    model: "Fortuner",
    year: 2024,

};

const bike = new Object();
 bike.brand =" Honda";
 bike.model = "CBR";
 bike.year = 2025;



//  2.3 Using Constructor Function

function Person3(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, I'm ${this.name}, my age is ${this.age}`);
    };
}

const p3 = new Person3("Nihal", 20);
p3.greet(); // Hello, I'm Nihal , my age is 20.



// 2.4 Using ES6 class Syntax 

// class Candidate {
//     constructor(name, gender ,age) {
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//     }
     
//     candidateInfo(){
//         console.log(`This the Record of ${this.name} ,gender  ${this.gender} and age is   ,${this.age}`)
//     }
// }
// const candi1 = new Candidate("Nihal" , "male" , 18);
// candi1.candidateinfo();


class Candidate {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    
    toString() {
        return `This is the record of Candidate 1 , Name: ${this.name}, gender: ${this.gender}, and age: ${this.age}.`;
    }
}

const candi1 = new Candidate("Nihal", "male", 18);
console.log(candi1.toString());  


// 3. Accessing Object Properties
// Dot Notation

console.log(person.name);  //NIHAL SONI

// Bracket Notation

console.log(person["age"]);  // 20


// 4. Adding, Modifying, and Deleting Properties
// Add New Property

person.gender = "Male";

// Modify Existing Property

person.age = 31;

// Delete Property

delete person.isStudent;


// 5. Object Methods
// Adding Methods to Objects


const user = {
    name: "Nihal",
    greet: function() {
        console.log("Hello!");
    }
};

user.greet();  // Hello!


// Using this Keyword

const laptop = {
    brand: "Dell",
    model: "XPS 13",
    details: function() {
        return `${this.brand} ${this.model}`;
    }
};

const laptop1 = {
    brand: "MacBook",
    model: "m2-pro",
    details: function(){
        return `${this.brand} ${this.model}`
    }
};
console.log(laptop.details());  // Dell XPS 13
console.log(laptop1.details());  // macbook



// 6. Nested Objects

const company = {
    name: "TechCorp",
    location: "New York",
    employees: {
        developer: { name: "Nihal", age: 24 },
        manager: { name: "harkirat", age: 40 }
    }
};

console.log(company.employees.developer.name);  // Nihal
console.log(company.employees.manager.name); // Harkirat



// 7. Iterating Over an Object
// Using for...in Loop

for (let key in person) {
    console.log(key, ":", person[key]);
}

// Using Object.keys()

console.log(Object.keys(person));  // ["name", "age", "gender"]

// Using Object.values()

console.log(Object.values(person));  // ["Nihal soni", 31, "Male"]

// Using Object.entries()

console.log(Object.entries(person));
// [["name", "nihal soni"], ["age", 31], ["gender", "Male"]]




// 8. Object Methods

// Object.assign() - Copy Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = Object.assign({}, obj1, obj2);
console.log(merged);  // { a: 1, b: 2, c: 3 }

// example two using spread method
const obj3 = {a: 4 , b: 5};
const obj4 = {c: 6, d: 7};
const obj5 = {...obj3, ...obj4};
console.log(obj5);




// Object.freeze() - Prevent Modification

const car3 = { brand: "Tesla" };

Object.freeze(car3);
car.brand = "BMW";  // Not Allowed
console.log(car.brand);  // Tesla



// Object.seal() - Allow Modification but No Addition/Deletion

const user3 = { name: "Alice", age: 25 };
Object.seal(user3);
user.age = 30;  // Allowed
user.city = "London";  // Not Allowed
console.log(user3);  // { name: "Alice", age: 30 }


// Check if Object has a Property

console.log("name" in user);  // true
console.log(user.hasOwnProperty("age"));  // true




// 9. Prototypes and Inheritance
// Prototype-Based Inheritance

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const user1 = new Person("Nihal");
user1.greet();  // Hello, I'm Nihal


// ES6 Class Inheritance

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    drive() {
        console.log(`${this.brand} is driving.`);
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive();  // Toyota is driving.




// 10. Real-World Uses of Objects
// User Profile (Social Media, E-commerce)

const userProfile = {
    username: "john_doe",
    email: "john@example.com",
    orders: [
        { id: 1, product: "Laptop", price: 1200 },
        { id: 2, product: "Phone", price: 800 }
    ]
};


// API Response Handling

fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data));



// Inventory Management

const inventory = {
    items: [
        { name: "Laptop", stock: 10, price: 1500 },
        { name: "Monitor", stock: 20, price: 300 }
    ]
};


// 11. JavaScript Object Interview Questions

// What is an object in JavaScript?

// What are different ways to create an object?


/*
 What is the difference between Object.freeze() and Object.seal()?
 Feature	                                   Object.freeze()	                                                          Object.seal()
 Can modify existing properties?	              ❌ No	                                                                   ✅ Yes
Can add new properties?	                      ❌ No	                                                                    ❌ No
Can delete properties?	                     ❌ No	                                                                    ❌ No

const obj = { name: "John", age: 25 };

Object.freeze(obj);
obj.age = 30;   // ❌ Won't change
obj.city = "NY"; // ❌ Won't add
delete obj.name; // ❌ Won't delete

console.log(obj); // { name: "John", age: 25 }

Object.seal(obj);
obj.age = 30;  // ✅ Allowed
obj.city = "NY"; // ❌ Won't add
delete obj.name; // ❌ Won't delete

console.log(obj); // { name: "John", age: 30 }
*/



// How do you check if an object has a property?

// What is the difference between Object.keys() and Object.values()?

// What is the prototype in JavaScript?

// How do you implement inheritance using JavaScript?



// 8. How can you clone an object in JavaScript?
// There are multiple ways to clone an object:

// Method 1: Using the Spread Operator (...)

const original = { name: "John", age: 30 };
const clone = { ...original };

console.log(clone); // { name: "John", age: 30 }


// Method 2: Using Object.assign()

const clone2 = Object.assign({}, original);
console.log(clone2); // { name: "John", age: 30 }

// Method 3: Using JSON.parse(JSON.stringify(obj)) (Deep Copy)

const deepClone1 = JSON.parse(JSON.stringify(original));

// 👉 Use this for deep cloning (when objects have nested structures).

// Method 4: Using structuredClone() (Best for Deep Copy)

const deepClone2 = structuredClone(original);

// ✅ This is the recommended method for modern JavaScript.






// 5. Interview Question: Can We Have Multiple Constructors in JavaScript?

// No, JavaScript does not support multiple constructors in a class like some other languages (e.g., Java, C#).
// However, we can achieve constructor overloading by using default values or conditions.

// Solution: Using Default Values in the Constructor

class Animal {
    constructor(name = "Unknown", type = "Unknown") {
        this.name = name;
        this.type = type;
    }
}

const animal1 = new Animal("Tiger", "Mammal");
const animal2 = new Animal();

console.log(animal1.name); // Tiger
console.log(animal2.name); // Unknown

// 👉 If no values are passed, it assigns default values.