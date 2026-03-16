// let num1 = Number(prompt("Enter the first number : "));
// let num2 = Number(prompt("Enter the second number : "));

// let addResult = num1 + num2;
// console.log("Addition result is : ", addResult);    
// let mulResult = num1 * num2;
// console.log("Multiplication result is : ", mulResult);
// let subResult = num1 - num2;
// console.log("Substraction result is : ", subResult);
// let divResult = num1 / num2;
// console.log("Division result is : ", divResult);
// let modResult = num1 % num2;
// console.log("Modulus result is : ", modResult); 



const readline = require("readline");

// Interface create karo
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// First number input
rl.question("Enter the first number: ", (num1) => {

  // Second number input
  rl.question("Enter the second number: ", (num2) => {

    num1 = Number(num1);
    num2 = Number(num2);

    // Validation
    if (isNaN(num1) || isNaN(num2)) {
      console.log("❌ Please enter valid numbers only.");
    } else {
      console.log("Addition result is:", num1 + num2);
      console.log("Subtraction result is:", num1 - num2);
      console.log("Multiplication result is:", num1 * num2);

      if (num2 === 0) {
        console.log("❌ Division by zero is not allowed.");
        console.log("❌ Modulus by zero is not allowed.");
      } else {
        console.log("Division result is:", num1 / num2);
        console.log("Modulus result is:", num1 % num2);
      }
    }

    rl.close();
  });
});
