

// @@@@@@@@@@ Array Iteration Methods @@@@@@@@@@@@

// Array iteration methods operate on every array item:

// Array forEach
// Executes a provided function once for each array element.

const array = [1, 2, 3];
array.forEach(element => console.log(element * 2));
// Output:
// 2
// 4
// 6

// Array map()

// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.
// This example multiplies each array value by 2:

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
function myFunction(value, index, array) {
  return value * 2;
}
console.log(numbers2); // Output: [90, 8, 18, 32, 45]

const arrsy = [1, 2, 3, 4, 5];
// Using map with a regular function
const doubledArray = arrsy.map(function(element) {
    return element * 2;
});
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]



// Array flatMap()

// First maps each element using a mapping function, then flattens the result into a new array.
const uay = [1, 2, 3];
const mappedAndFlattened = uay.flatMap(x => [x, x * 2]);
console.log(mappedAndFlattened); // Output: [1, 2, 2, 4, 3, 6]

// Array filter()

// Creates a new array with all elements that pass the test implemented by the provided function.

const ray = [1, 2, 3, 4, 5];
const evenNumbers = ray.filter(element => element % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]


const arrayff = [1, 2, 3, 4, 5];
// Using filter with a regular function to filter even numbers
const evenNumbersff = arrayff.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbersff); // Output: [2, 4]

// Array reduce()

// Executes a reducer function on each element of the array, resulting in a single output value.

const aray = [1, 2, 3, 4, 5];
const sum = aray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


const arraaaay = [1, 2, 3, 4, 5];
// Using reduce with a regular function to sum all elements
const summ = arraaaay.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(summ); // Output: 15


// Array reduceRight()

// Similar to reduce(), but processes the array from right to left.
const ay = ['a', 'b', 'c', 'd'];
const reversedString = ay.reduceRight((accumulator, currentValue) => accumulator + currentValue);
console.log(reversedString); // Output: 'dcba'

// Array every()

// Tests whether all elements in the array pass the test implemented by the provided function.
const arrazy = [1, 2, 3, 4, 5];
const allGreaterThanZero = arrazy.every(element => element > 0);
console.log(allGreaterThanZero); // Output: true

// Array some()

// Tests whether at least one element in the array passes the test implemented by the provided function.

const araray = [1, 2, 3, 4, 5];
const hasEvenNumber = araray.some(element => element % 2 === 0);
console.log(hasEvenNumber); // Output: true

// Array from()

// Creates a new, shallow-copied array instance from an array-like or iterable object.

const arrayLike = '123';
const arraay = Array.from(arrayLike);
console.log(arraay); // Output: ['1', '2', '3']

// Array keys()

// Returns a new Array Iterator object that contains the keys for each index in the array.

const rray = ['a', 'b', 'c'];
const keys = rray.keys();
console.log(keys.next()); // Output: { value: 0, done: false }
console.log(keys.next()); // Output: { value: 1, done: false }
console.log(keys.next()); // Output: { value: 2, done: false }

// Array entries()

// Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const arra = ['a', 'b', 'c'];
const entries = arra.entries();
console.log(entries.next()); // Output: { value: [0, 'a'], done: false }
console.log(entries.next()); // Output: { value: [1, 'b'], done: false }
console.log(entries.next()); // Output: { value: [2, 'c'], done: false }
// Array Spread (...)
// Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]