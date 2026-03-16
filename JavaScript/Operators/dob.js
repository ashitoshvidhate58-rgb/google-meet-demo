const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your Date of Birth (DD-MM-YYYY): ", function(dob) {

  // String ko split karo
  let parts = dob.split("-");

  let day = parseInt(parts[0]);
  let month = parseInt(parts[1]) - 1; // Month 0 se start hota hai
  let year = parseInt(parts[2]);

  let birthDate = new Date(year, month, day);
  let today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  let monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || 
     (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  console.log("Your age is: " + age);

  
            if (age >=18) {
                console.log("You are eligible to vote.");
            }
            else {
                console.log("You are not eligible to vote yet.");
            }

  rl.close();
});