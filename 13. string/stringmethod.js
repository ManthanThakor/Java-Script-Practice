
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

// ___________________________________

// There are 3 methods for extracting a part of a string:
// slice(start, end)
// substring(start, end)
// substr(start, length)

// slice():

let str1 = "Hello, world!";
console.log(str1.slice(0,10),"\n"); // Outputs: "Hello, world!"

let textxx = "Apple, Banana, Kiwi";
let part = textxx.slice(7,13);
console.log(part,"\n"); // Outputs: "Banana"

// If you omit the second parameter, the method will slice out the rest of the string
let texst = "Apple, Banana, Kiwi";
let pat = texst.slice(7);
console.log(pat,"\n"); // Outputs: "Banana, Kiwi"

// If a parameter is negative, the position is counted from the end of the string:

let texat = "Apple, Banana, Kiwi";
let parrt = texat.slice(-12);
console.log(parrt,"\n"); // Outputs: "Banana, Kiwi"

// This example slices out a portion of a string from position -12 to position -6:

let texxt = "Apple, Banana, Kiwi";
let parrrt = texxt.slice(-13, -6);
console.log(parrrt,"\n"); // Outputs: " Banana"

// substring(start, end):
// The substring() method extracts characters from a string between two specified indices (start and end).
// It returns a new string containing the extracted characters.
// If the start index is greater than the end index, substring() will swap the two indices.
// If either index is negative or greater than the string's length, substring() will treat it as if it were 0.

let stras = "Hello, World!";
let substr1 = stras.substring(7, 11); // Extracts characters from index 7 to 11
console.log(substr1,"\n"); // Output: "World"

// substr(start, length):
// The substr() method extracts a specified number of characters from a string, starting from a specified index.
// It returns a new string containing the extracted characters.
// The start parameter specifies the starting index from which to begin extraction.
// The length parameter specifies the number of characters to extract. If omitted, substr() extracts characters to the end of the string.

let stsr = "Hello, World!";
let substr2 = stsr.substr(7, 6); // Extracts 5 characters starting from index 7
console.log(substr2,"\n"); // Output: "World"
