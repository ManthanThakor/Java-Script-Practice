
// ************************DATA TYPES***********************************

/*JavaScript Data Types
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date */

//______________________________Primitive Data Types:__________________

// 1. string

// String: Represents textual data
var y= "Hello, world!"; // "string"
console.log(y);

// 2. Number

// Number: Represents both integer and floating-point numbers.
var x= 25;  // number
console.log(x);

// 4. Booleans

// Boolean: Represents a logical value - either true or false.
let xs = true;
let yy = false; // boolean
// document.getElementById("x").innerHTML = y;
console.log(xs);

// 5. Undefined

// Undefined: Represents the absence of a value.
var z;
console.log(z); // undefined

// 6. Null

// Null: Represents the intentional absence of any object value.
var xx = null;
console.log(xx); // null

// 7. Symbol

// Symbol: Represents a unique identifier.
const symbol = Symbol("Hello");
console.log(symbol);

// *Empty strings

let car = "";
console.log(typeof car + car);


// _________Non-Primitive Data Types_______________


// Object:
// Object: Represents a collection of key-value pairs.

let person = { name: "John", age: 30 };
const person_two = {firstName:"John", lastName:"Doe"};
console.log(person + person_two);

// Array object:

// Array: Represents a collection of elements, which can be of different types.

let numbers = [1, 2, 3, 4, 5];
const cars = ["Saab", "Volvo", "BMW"];

console.log(numbers + cars);

// Function object:
// Function: Represents a reusable block of code.
function greet() {
    return "Hello!";
}

// Date object:

const date = new Date("2022-03-25");

/*
Primitive Data Types:

Stored directly in memory: Primitive data types are stored directly in memory, and they are represented by a fixed size in memory.
Immutable: Primitive values cannot be altered. When you change the value of a primitive data type, you are actually creating a new value in memory.
Assigned by value: When you assign a primitive data type to a variable or pass it as an argument to a function, a copy of the actual value is passed or assigned.
Examples of primitive data types in JavaScript include numbers, strings, booleans, undefined, null, and symbols.

Non-Primitive Data Types (Reference Types):

Stored by reference: Non-primitive data types are stored by reference in memory. Instead of holding the data directly, they hold a reference (address) to where the data is stored.
Mutable: Non-primitive values can be modified directly because they are stored by reference.
Assigned by reference: When you assign a non-primitive data type to a variable or pass it as an argument to a function, you are passing a reference to the original data, not a copy of the data itself. 
*/