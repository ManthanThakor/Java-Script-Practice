
// ****************************************************************ARRAYS ****************************************************************


/* ARRAY IS A COLLECTION OF ITEMS
An array is a special variable, which can hold more than one value:*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

let bomb = [ 1 , 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(bomb);

let info = [ "rahul" ,86, "Delhi" ];
console.log(info);

const heros = ["supermane,", "spiderman", "ironman"];
console.log(heros);

/* Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW"; */

//________________________________syntax________________________________

/* Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax: */

// const array_name = [item1, item2, ...];  It is a common practice to declare arrays with the const keyword.

// ________________________________________________________________________________________________________________________________


// Spaces and line breaks are not important. A declaration can span multiple lines:

// Example
const carss = [
  "buggati",
  "audi",
  "neno"
];
console.log(carss);

// ou can also create an array, and then provide the elements:
const caars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log("this is my car " + cars);

// Using the JavaScript Keyword new
// The following example also creates an Array, and assigns values to it:

let numbers = [ "1", "2", "3", "42", "5"];
 numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// Accessing Array Elements
// You access an array element by referring to the index number:

const caaars = ["Saab", "Volvo", "BMW"];

console.log(caaars[0]);
console.log(caaars[1]);
console.log(caaars[2]);
// Changing an Array Element
// This statement changes the value of the first element in cars:
caaars[0] = "Opel";
console.log(caaars);

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits.toString();
console.log(fruits.toString());

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". In this example, person[0] returns John:

