const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Age ", function (age) {

    age = parseInt(age);

    if (!(age>=18)) {
        console.log("Not allowed to vote");
    } 
     else {
        console.log("You are allowed to vote");
    }

    rl.close();
});