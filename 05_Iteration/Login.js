import readline from "readline";

const rl =  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const validEmail = "test@gmail.com";
const validPassword = "password123"


// function to ask for a email 

rl.question("Enter your Email:", function(email){
    rl.question("Enter Your Password:", function(password){
        //checkIng creadintials
        if(email === validEmail && password === validPassword){
            console.log("✅  Sucessfully Logged In")
        } else {
            console.log("Invalid email and password")
        }
        rl.close(); //clsoe input stream
    })
})