

//======================== JavaScript Variables========================================================

// Variables are Containers for Storing Data
// JavaScript Variables can be declared in 4 ways:
// -Automatically
// -Using var
// -Using let
// -Using const


// ========Var - Variables=========

// var was the original way to declare variables in JavaScript.
// Variables declared with var are function-scoped, meaning they are accessible within the function they are declared in, but not outside of it.
// Variables declared with var can be redeclared and reassigned.

var x = 5;
var y = 6;
var z = x + y;
console.log("The value of z is: " + z);

// ========let - Variables=========

// let was introduced in ES6 (ECMAScript 2015) and it's the preferred way to declare variables since it has block scope.
// Variables declared with let are block-scoped, meaning they are accessible only within the block they are declared in (block is defined by {}).
// Variables declared with let can be reassigned, but not redeclared within the same block.

let namee = "John" + " " + "Doe";
console.log("The name is: " + namee);

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log("The total is: " + total);

let xx = 10;
{
    let xx = 20;
    console.log(xx); // Outputs: 20
}
console.log(xx);


// =================const variable=================

// const is also introduced in ES6. It creates a read-only reference to a value, meaning the variable cannot be reassigned.
// Variables declared with const must be assigned a value when declared, and this value cannot be changed.
// const variables are block-scoped like let.

const PI = 3.14;
PI = 3; // ERROR

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR