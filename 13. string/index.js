

// Strings in JS

// Strings are for storing text
// Strings are written with quotes
// String is a sequence of characters used to represent text

console.log("\n");
let str = "WELCOME TO THE PIXEL WORLD";
console.log(str,"\n");

let firstName = "Manthu";
let lastName = "Rocks";
let fullName = firstName + " " + lastName;
console.log(fullName,"\n");

let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
let carname = carName1 + " " + carName2;
console.log(carname,"\n");

// Quotes Inside Quotes
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Example
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(answer1 + " " + answer2 + " " + answer3,"\n" );