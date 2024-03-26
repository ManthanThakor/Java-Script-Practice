
// ****************************************************************ARRAYS ****************************************************************


/* ARRAY IS A COLLECTION OF ITEMS
An array is a special variable, which can hold more than one value:*/

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

let bomb = [ 1 , 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(bomb);

let info = [ "rahul" ,86, "Delhi" ];
console.log(info);

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



let numbers = [ "1", "2", "3", "42", "5"];
 numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);



// const caars = [];
// cars[0]= "Saab";
// cars[1]= "Volvo";
// cars[2]= "BMW";