// Basic Array Methods
// Array length ********************************
// Array toString()********************************
// Array at()********************************
// Array join()********************************
// Array pop()********************************
// Array push()********************************
// Search Methods
// Sort Methods
// Iteration Methods	
// Array shift()
// Array unshift()
// Array delete()
// Array concat() ********************************
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


// JavaScript Array join()
// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:

const fruitas = ["Banana", "Orange", "Apple", "Mango"];
let aaaa = fruitas.join(",");
let aaaaa = fruitas.join("*");
console.log(aaaa,"\n"); // Output: "Banana,Orange,Apple,Mango"
console.log(aaaaa,"\n"); // Output: "Banana*Orange*Apple*Mango"

// ___________________Popping and Pushing___________________
// When you work with arrays, it is easy to remove elements and add new elements.
// This is what popping and pushing is:
// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop()
// The pop() method removes the last element from an array:


const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let xx = fruitss.pop();
console.log(xx,"\n"); // Output: "Mango"
console.log(fruitss,"\n");

// The pop() method returns the value that was "popped out":

// JavaScript Array push()
// The push() method adds a new element to an array (at the end):

const fruiaats = ["Banana", "Orange", "Apple", "Mango"];
fruiaats.push("Kiwi");

console.log(fruiaats,"\n"); // Output: ["Banana", "Orange", "Apple", "Mango", "Kiwi"]

// The push() method returns the new array length

const frauits = ["Banana", "Orange", "Apple", "Mango"];
let length = frauits.push("Kiwii");

console.log(length,"\n"); // Output: 5
console.log(frauits,"\n");


// #################################################################################################

// Array.shift()
// Array.shift(): Removes the first element from an array and returns that removed element.

const array = [1, 2, 3];
const shiftedElement = array.shift();
console.log(shiftedElement); // Output: 1
console.log(array); // Output: [2, 3]

// Array.unshift()
// Array.unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

const arraya = [2, 3];
const newLength = arraya.unshift(1);
console.log(newLength); // Output: 3
console.log(arraya); // Output: [1, 2, 3]