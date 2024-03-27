


// search array methods

// Array Find and Search Methods
// Array indexOf()
// Array lastIndexOf()
// Array includes()
// Iteration Methods	Array find()
// Array findIndex()
// Array findLast()
// Array findLastIndex()

// JavaScript Array indexOf()

// array.indexOf(item, start)
// The indexOf() method searches an array for an element value and returns its position.
// Note: The first item has position 0, the second item has position 1, and so on.
// Array.indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3)); // Output: 2
console.log(array.indexOf(6)); // Output: -1


// Array.lastIndexOf(): 

// array.lastIndexOf(item, start)
// Array.lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

const arrayy = [1, 2, 3, 4, 3];
console.log(arrayy.lastIndexOf(3)); // Output: 4
console.log(arrayy.lastIndexOf(6)); // Output: -1

// Array.includes()
// Array.includes(): Determines whether an array includes a certain element, returning true or false.

const arraay = [1, 2, 3, 4, 5];
console.log(arraay.includes(3)); // Output: true
console.log(arraay.includes(6)); // Output: false

// Array.findIndex()
// Array.findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

const arrayyy = [10, 20, 30, 40, 50];
const index = array.findIndex(element => element > 25);
console.log(index); // Output: 2

// Array.find():
// Array.find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

const arraya = [10, 20, 30, 40, 50];
const value = arraya.find(element => element > 25);
console.log(value); // Output: 30

// JavaScript Array findLast() Method
// ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high); // Output: 42

// JavaScript Array findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.

const temps = [27, 28, 30, 40, 42, 35, 30];
let pos = temps.findLastIndex(x => x > 40);
console.log(pos); // Output: 4