const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Age ", function (age) {

    age = parseInt(age);

    if (isNaN(age)) {
        console.log("Please enter a valid number");
    } else if (age >= 18) {
        console.log("You are allowed to vote");
    } else {
        console.log("You are not allowed to vote");
    }

    rl.close();
});