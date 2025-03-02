// Var Let Const ki kahani
import { stdin } from "process";
import readline from "readline";

const accountId = 1212323;
const accountEmail = "nihalsoni0523@gmail.com";
var accountPassword = "565656";
let accountCity = "Satna";
let accountState = "MadhyaPradesh";

// const userInput = prompt("Please Enter your name ")  this will not work in node js , this will only work in browser;
console.log(accountCity);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
// console.log(`userInput ${userInput}`);

// THE OTHER WAY OF TAKING INPUT FROM USER

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter your name :", function (name) {
  rl.question("Enter your email:", function (email) {
    rl.question("Enter ou father name:" , function(fatherName){

      console.log(`Name: ${name} , Email: ${email} , fatherName: ${fatherName}`);
      rl.close();
    })
  });
});

/*
we should not use var 
because of issue in block and functional scope 
 */
// prompt() works only in browsers.
// Use readline for Node.js.
// Use readline.question() for single input.
// Use nested readline.question() for multiple inputs.
// Use readline.promises with async/await for cleaner code.

// Now lets do it using async function

// async function getuserInput(){
//     const rl =readline.createInterface({
//         input:process.stdin,
//         output:process.stdout,
//     })
//     const fatherName = rl.question("enter your fathers name :");
//     console.log(`FatherName: ${fatherName}`)
//     rl.close();
// }
