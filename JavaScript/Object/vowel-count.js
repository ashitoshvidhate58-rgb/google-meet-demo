const input = "ankit jain";
const vowels = "aeiou";

const result = {};

for (const char of input) {                                           
  if (vowels.includes(char)) {
    result[char] = (result[char] || 0) + 1;
  }
}

console.log(result);

// for (let i = 0; i < input.length; i++) {
//   let char = input[i];
//  }                                                   *****   OR   *****          for (const char of input) {     }




// if (result[char]) {
//   result[char] = result[char] + 1;
// } else {
//   result[char] = 1;
// }                                  *****     OR      *****       result[char] = (result[char] || 0) + 1;






