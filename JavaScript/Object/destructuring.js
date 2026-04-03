const profile = {
  name: "Rakshit",
  city: "Udaipur",
  state: "Rajasthan",
  country: "India",
  education: {
    isGraduated: true,
    isPostGraduated: false,
    isElligibleForPHD: false,
  },
  hobbies: ["music", "food"],
};

// const { name, city, country } = profile;                 // with same key values

// Name aliasing
const { name: userName, city: userCity, country } = profile;            // aliace of key's (reassigned of key with new name)

console.log("Name: ", userName);
console.log("City", userCity);
console.log("Country: ", country);



const result = {};
function string(str) {
  for (let i = 0; i < str.length; i++) {
    const str1 = str[i];
    if (result.hasOwnProperty(str1)) {
      result[str1]++;
    }
    else {
      result[str1] = 1;
    }

}
}
string("ankita");
console.log(result);