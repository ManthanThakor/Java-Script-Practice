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


//  Array delete()
// JavaScript Array delete()
// Warning !
// Using delete() leaves undefined holes in the array.
// Use pop() or shift() instead.
const fruitsa = ["Banana", "Orange", "Apple", "Mango"];
delete fruitsa[0];
console.log(fruitsa,"\n"); // Output: ["Orange", "Apple", "Mango"]


// Array copyWithin()
// The copyWithin() method copies array elements to another position in an array:
// Copy to index 2, all elements from index 0:

// ++++++++++++++++ array.copyWithin(target, start, end) ++++++++++++++++

const fruitsA = ["Banana", "Orange", "Apple", "Mango"];
fruitsA.copyWithin(2, 0);
console.log(fruitsA,"\n"); // Output: [ 'Banana', 'Orange', 'Banana', 'Orange' ]

// Copy to index 2, the elements from index 0 to 2:

const fruitsAA = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruitsAA.copyWithin(1, 2, 4);
console.log(fruitsAA,"\n"); // Output:[ 'Banana', 'Banana', 'Orange', 'Apple', 'Mango' ]

const arraAy = [1, 2, 3, 4, 5];
arraAy.copyWithin(0, 3, 4); // Copies the element at index 3 to index 0
console.log(arraAy); // Output: [4, 2, 3, 4, 5]

const arrAAay = [1, 2, 3, 4, 5];
// Copies the elements from index 0 to index 2 and pastes them starting at index 2
arrAAay.copyWithin(2, 0, 3);
console.log(arrAAay); // Output: [1, 2, 1, 2, 3]

// Array.flat()
// Array.flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arraAAy = [1, [2, 3], [4, [5, 6]]];
const flatArray = arraAAy.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


// Note
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
// The copyWithin() method does not change the length of the array.


// Array.slice()
// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

// SYNTAX : array.slice(start, end)

const arraAya = [1, 2, 3, 4, 5];
console.log(arraAya.slice(0, 3)); // Output: [1, 2, 3]
console.log(arraAya.slice(1, 4)); // Output: [2, 3, 4]
console.log(arraAya.slice(2, 5)); // Output: [3, 4, 5]
console.log(arraAya.slice(3, 6)); // Output: [4, 5]

const fraauits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fraauits.slice(1);
console.log(citrus,"\n"); // Output: ["Orange", "Lemon", "Apple", "Mango"]

// JavaScript Array toSpliced()
// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(1, 3);
console.log(spliced,"\n"); // Output: ["Jan"]




// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
// Splice( ) : change original array (add, remove, replace)

const arraay = [1, 2, 3, 4, 5];
// Remove 2 elements starting from index 1 and insert 'a' and 'b' in their place
const removedElements = arraay.splice(1, 2, 'a', 'b');
console.log(arraay); // Output: [1, 'a', 'b', 4, 5]
console.log(removedElements); // Output: [2, 3]

// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// The splice() method returns an array with the deleted items:

const fruitassss = ["sa", "Osemon", "Asspple", "Masngo"];
fruitassss.splice(2, 0, "Kiwi"); 
console.log(fruitassss,"\n"); // Output: [ 'sa', 'Osemon', 'Kiwi', 'Asspple', 'Masngo' ]
// The splice() method can also be used to remove elements from an array:


const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits2.splice(2, 1)); // Output: ["Orange", "Lemon", "Apple", "Mango"]
console.log(fruits2,"\n"); // Output: ["Banana", "Orange", "Lemon", "Apple", "Mango"]
// The splice() method can also be used to add new elements to an array:

const fruitass = ["Banana", "Orange", "Apple", "Mango"];
fruitass.splice(2, 2, "Lemon", "Kiwi");
console.log(fruitass,"\n"); // Output: [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]