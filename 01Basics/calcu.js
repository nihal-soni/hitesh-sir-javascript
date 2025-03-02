import readline from "readline";

// Create input interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for the first number
rl.question("Enter the first number: ", function(num1) {
    rl.question("Enter the second number: ", function(num2) {
        rl.question("Enter operation (+, -, *, /): ", function(operation) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            switch (operation) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
                    break;
                default:
                    result = "Invalid operation!";
            }

            console.log("Result:", result);
            rl.close(); // Close input stream
        });
    });
});
