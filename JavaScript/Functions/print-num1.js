// Print 1, 12, 123, 1234, 12345

let num = 5;
    let result = 0;

    for (let i = 1; i <= num; i++) {
        result = result * 10 + i;
        console.log(result);
    }

// Print *, **, ***, ****, *****   


    let num1 = 5;
    
    for (let i = 1; i <= num1; i++) {
        let result1 = "";
        for (let j = 1; j <= i; j++) {
            result1= result1 + "*";

        }
        console.log(result1);
    }


    // Print 12345, 1234, 123, 12, 1

let n = 5;

for (let i = n; i >= 1; i--) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row = row + j;
  }

  console.log(row);
}


// Print 1, 11, 111, 1111, 11111

let num2 = 5;
    
    for (let i = 1; i <= num2; i++) {
        let result2 = "";
        for (let j = 1; j <= i; j++) {
            result2= result2 + "1";

        }
        console.log(result2);
    }



//print 531, 53, 5

let n1 = 5;

for (let i = 1; i <= n1; i=i+2) {
  let row1 = "";
    
  for (let j = n1; j >= i; j=j-2) {
    row1 = row1 + j;
  }

  console.log(row1);
}

