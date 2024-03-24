
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

// ___________________________________

// replace(searchValue, replaceValue):
// Searches a string for a specified value or regular expression and replaces it with another value.

let sastr = "Hello, A!";
console.log(sastr.replace("A", "ROCK"),"\n"); // Outputs: "Hello, ROCK!"

// String ReplaceAll()
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
// replaceAll() does not work in Internet Explorer.
let text = "I love cats. Cats are very easy to love. Cats are very popular."
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
console.log(text,"\n"); // Outputs: "I love dogs. Dogs are very easy to love. Dogs are very popular."


// ************************************************************EXTRA*********************************************************************************************************************************************************************************************************************

// ___________________________________

// JavaScript String split()
// A string can be converted to an array with the split() method:

let stru = "apple,banana,orange";
let fruits = stru.split(",");
console.log(fruits,"\n"); // Outputs: ["apple", "banana", "orange"]

// ___________________________________

// String.padStart(maxLength, [padString])
// The padStart() method pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
// It adds characters at the beginning of the string until the resulting string reaches the specified length (maxLength).
// The padString parameter is optional and specifies the string to pad with. If not provided, it pads with spaces.

let star = "Hello";
let paddedStr = star.padStart(10, "123");
console.log(paddedStr,"\n"); // Output: "123123Hello"


// String.padEnd(maxLength, [padString])
// The padEnd() method pads the current string with another string (repeated, if needed) so that the resulting string reaches the given length.
// It adds characters at the end of the string until the resulting string reaches the specified length (maxLength).
// The padString parameter is optional and specifies the string to pad with. If not provided, it pads with spaces.

let strasq = "Hello";
let paaddedStar = strasq.padEnd(10, "123");
console.log(paaddedStar,"\n"); // Output: "Hello12312"

// ___________________________________

// String.repeat(count):
// The repeat() method constructs and returns a new string that contains the specified number of copies of the string on which it was called.
// It concatenates the specified number of copies of the string together and returns the result.

let xtr = "Hello";
let repeatedStr = xtr.repeat(3);
console.log(repeatedStr,"\n"); // Output: "HelloHelloHello"

// // ___________________________________

// startsWith(prefix):

// Returns true if a string starts with the specified prefix, otherwise false.

let sa = "Hello, world!";
console.log(sa.startsWith("Hello")); // Outputs: true

// endsWith(suffix):
// Returns true if a string ends with the specified suffix, otherwise false.

let stzr = "Hello, world!";
console.log(stzr.endsWith("world!")); // Outputs: true

// indexOf(substring):

// Returns the index of the first occurrence of a substring in a string, or -1 if the substring is not found.

let stAr = "JavaScript";
console.log(stAr.indexOf("Script")); // Outputs: 4

// includes(substring):
// Returns true if a string contains a specified substring, otherwise false.

let stSr = "JavaScript";
console.log(stSr.includes("Script")); // Outputs: true