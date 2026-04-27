function validateAccount(accountNo) {
  return new Promise((resolve, reject) => {
    console.log("Validating account...");
    setTimeout(() => {
      if (accountNo.length === 10) {
        resolve("Account validated");
      } else {
        reject("Invalid account number");
      }
    }, 1000);
  });
}

function checkBalance(amount) {
  return new Promise((resolve, reject) => {
    console.log("Checking balance...");
    setTimeout(() => {
      let balance = 3000;
      if (balance >= amount) {
        resolve("Sufficient balance");
      } else {
        reject("Insufficient balance");
      }
    }, 1000);
  });
}

function debitAmount(amount) {
  return new Promise((resolve) => {
    console.log("Debiting amount...");
    setTimeout(() => {
      resolve(`₹${amount} debited`);
    }, 1000);
  });
}

function creditAmount(amount) {
  return new Promise((resolve) => {
    console.log("Crediting receiver...");
    setTimeout(() => {
      resolve(`₹${amount} credited to receiver`);
    }, 1000);
  });
}

function sendConfirmation(message) {
  return new Promise((resolve) => {
    console.log("Sending SMS...");
    setTimeout(() => {
      resolve("SMS: Transaction successful - " + message);
    }, 1000);
  });
}

// Promise chaining
validateAccount("1234567890")
  .then((res) => {
    console.log(res);
    return checkBalance(1500);
  })
  .then((res) => {
    console.log(res);
    return debitAmount(1500);
  })
  .then((res) => {
    console.log(res);
    return creditAmount(1500);
  })
  .then((res) => {
    console.log(res);
    return sendConfirmation(res);
  })
  .then((finalMsg) => {
    console.log(finalMsg);
  })
  .catch((err) => {
    console.error("Transaction failed:", err);
  });