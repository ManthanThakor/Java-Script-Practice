

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

// Accessing Characters in a String:

let strr = "Hello";
console.log(strr[0]); // Outputs: "H"
console.log(strr.charAt(1),"\n"); // Outputs: "e"

// String Length

// To find the length of a string, use the built-in length property:

// Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length,"\n");

let ster = "JavaScript";
console.log(ster.length,"\n"); // Outputs: 10

// Multiline Strings (Template Literals):

let multiLineString = `This is a 
multiline 
string.`;

console.log(multiLineString,"\n");

// Escape Characters:

let strrr = "This is a \"quote\" inside a string.";
console.log(strrr,"\n"); // Outputs: This is a "quote" inside a string.

// String Interpolation (Template Literals):

console.log(`this is a template literal`,"\n");

let namee = "John";
let greeting = `Hello, ${namee}!`;
console.log(greeting ,"\n"); // Outputs: Hello, John!

let expression = "i am don";
let expressionone = "hi,"
console.log(`${expressionone} ${expression}, stay at home`,"\n");

// Comparing Strings:

let str1 = "apple";
let str2 = "banana";
console.log(str1 === str2,"\n"); // Outputs: false