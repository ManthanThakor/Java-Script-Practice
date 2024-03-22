// ================================================================

// https://youtu.be/VlPiVmYuoqw?si=rpfR_8eWHA6Zlob6

// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
// ================================================================

// for Loop:

// The for loop is used when you know the number of iterations needed.

// Example: Printing numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
    console.log(`COUNT ${i}`); // use ${} for ___**template literal**_____
}

// Explanation:
// The loop starts with initializing i to 1.
// It continues as long as i is less than or equal to 5.
// After each iteration, i is incremented by 1.
// In each iteration, the value of i is printed to the console.


//Iterating over an array:

let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Calculating sum  of values 1 to n using a for loop

let sum = 0;
let n = 100;
for (let i = 0; i <= n; i++) {
    sum += i;
}
console.log(`sum of all number is ${sum}`);

console.log("loop finished");

// ================================================================

//infinite loop

// An infinite loop is a loop that continues to execute indefinitely because its terminating condition is never met. Infinite loops are usually unintentional and can cause your program to become unresponsive or crash.
// while (true) {
//     console.log("This is an infinite loop.");
// }

// ================================================================

//_____________________________for in and for of___________________________________

//___________________for...in________________________________
// The for...in loop is used to iterate over the properties of an object. It enumerates all enumerable properties of an object, including properties inherited from its prototype chain.

const person = {
    name: 'John',
    age: 30,
    gender: 'male'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

//   ___________for...of_____________
//   The for...of loop is used to iterate over the elements of an iterable object, such as arrays, strings, or other iterable objects (e.g., Map, Set).

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

// while Loop:

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }