/*
The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, Maps, Sets, and more. It provides a simple and readable way to loop through elements.

Syntax:
for (const element of iterable) {
  // Code to execute for each element
}
How it Works:
It retrieves values (not indexes or keys) from an iterable object.
It works with iterables (like arrays, strings, Maps, Sets).
It does not work directly on objects unless you use Object.entries(), Object.keys(), or Object.values().
*/

const arr = [1, 2, 3 , 4, 5]
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
    //  console.log(`Each char is ${greet}`)
}


// Maps

const map =  new Map()

map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")

// console.log(map)  

// using for of loop 

for (const key of map)[
    // console.log(key)    
]

// we can do one more thing

for (const [key, value] of map){
    // console.log(key, ':-', value);
}


// can we use for loop in object 

const myObject = {
    'game1' : 'NFS',
     'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//      console.log(key, ':-', value)           // This will  not work on object there are ways to do this 
// }


// Let's Understand this by using For In loop

const myObject1 = {
    js: 'Javascript',
    cpp: 'C++',
    rb : 'Ruby',
    swift: 'swift by apple'
}

for (const key in myObject1) {
    console.log(`${key} shortcut is for ${myObject1[key]}`)
}


//  CAN WE USE FOR IN LOOP IN ARRAY ? 

const programming = ["js", "rb", "java" , "py" , "c++"]

for (const key in programming) {
  console.log(programming[key])
}


 