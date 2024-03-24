
// __________________________________________________String methods________________________________________________________________

// These are built-in functions to manipulate a string


// length:
// Returns the length of a string.

let str = "Hello,\t world!";
console.log("\n",str.length,"\n"); // Outputs: 14 it counts the length of a string but in this case \t counts as one character

// charAt(index):
// Returns the character at the specified index in a string.

let strr = "Hello";
console.log(strr.charAt(0),"\n"); // Outputs: "H"


// toUpperCase():
// Converts a string to uppercase.

let strrr = "hello";
console.log(strrr.toUpperCase(),"\n"); // Outputs: "HELLO"


// toLowerCase():
// Converts a string to lowercase.

let strrrr = "HELLO";
console.log(strrrr.toLowerCase(),"\n"); // Outputs: "hello"

// trim():
// Removes whitespace from both ends of a string.

let st = "  Hello, world!   ";
console.log(st.trim(),"\n"); // Outputs: "Hello, world!"

// trimStart():
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();

console.log(text2,"\n"); // Outputs: "Hello World!     "

// trimEnd():

let textt1 = "     Hello World!     ";
let textt2 = text1.trimEnd();
console.log(textt2,"\n"); // Outputs: "Hello World!"

// concat():
// The concat() method can be used instead of the plus operator. These two lines do the same:

let texts1 = "Hello";
let texts2 = "World!";
let texts3 = texts1.concat(" ",texts2);
console.log(texts3,"\n"); // Outputs: "Hello World!"