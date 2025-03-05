const user = {
    username: "Nihal soni",
    price: 999,

      welcomeMessage: function(){
        console.log(`${this.username} , Welcome to Webiste `)
      }
}

// console.log(welcomeMessage


const addtwo = (num1 , num2) => {
  return num1 + num2
}
console.log(addtwo(8, 9))    // this is the arrow fucntion code it

const multiTwo = (num1, num2) => num1 * num2;   //No {}, so return is implicit.
console.log(multiTwo(5, 7));

const divideTwo = (num1 , num2) => (num1 / num2) //Parentheses () allow an implicit return.
console.log(divideTwo(78, 8))

// these all are the way of writing code , each console wil work 


// lets see if use currly braces in subtraction just for example 

const subtTwo = (num1 , num2) => {num1 - num2}     //❌ Why is it Undefined? When {} is used, JavaScript expects an explicit return statement we can fix it by adding return:
console.log(subtTwo(8 , 78)) // this console will not work , it will show undefined because when we use currly bracket we have to use return 

// lets practic using return

const subtTwo1 = (num1 , num2) => {                    //Uses { return ... }Explicit return required when using {}.
  return num1 - num2
}
console.log(subtTwo1 (677 , 78))  // this will print output because we return the value , explicit funcions