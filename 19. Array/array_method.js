// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// Search Methods
// Sort Methods
// Iteration Methods	
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Arrays Methods @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// Array concat()
// concat(): Joins two or more arrays and returns a new array.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray,"\n"); // Output: [1, 2, 3, 4, 5, 6]

// JavaScript Array length
// The length property returns the length (size) of an array:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size,"\n"); // Output: 4

// JavaScript Array toString()
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const frAuits = ["Banana", "Orange", "Apple", "Mango"];
let aaa = frAuits.toString();
console.log(aaa,"\n"); // Output: "Banana,Orange,Apple,Mango"


// JavaScript Array at()
// ES2022 intoduced the array method at():
// Get the third element of fruits using at():

const fruiats = ["Banana", "Orange", "Apple", "Mango"];
let fruiaaat = fruiats.at(2);
console.log(fruiaaat,"\n"); // Output: "Apple"