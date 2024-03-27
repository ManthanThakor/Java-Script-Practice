
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

const person = ["John", "Doe", 46];
console.log(person);


// ************************************************************************************************

// The length Property
// The length property of an array returns the length of an array (the number of array elements).

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
let length = fruitss.length;
console.log(length);

const cricket = ["Virat", "Siraj", "Rohit"];
console.log(cricket.length);

// Accessing the First Array Element

const fr = ["Banana", "Orange", "Apple", "Mango"];
let fru = fr[0];
console.log(fru);

// Accessing the Last Array Element

const fruiats = ["Banana", "Orange", "Apple", "Mango"];
let fut = fruiats[fruits.length - 1];
console.log(fut);




// __________________________________________________Looping Array Elements________________________________


// Using a for loop:

const araray = [1, 2, 3, 4, 5];

for (let i = 0; i < araray.length; i++) {
  console.log(araray[i]);
}

// Using the forEach method:

const array = [1, 2, 3, 4, 5];

array.forEach(element => {
  console.log(element);
});

// Using a for...of loop:

const arraay = [1, 2, 3, 4, 5];

for (const element of arraay) {
  console.log(element);
}

// ------------------------------

const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruitsss.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruitsss[i] + "</li>";
}
text += "</ul>";
console.log(text);
// document.getElementById("demo").innerHTML = text;



// ===============================================================

// Adding Array Elements
// The easiest way to add a new element to an array is using the push() method:

const fffruits = ["Banana", "Orange", "Apple"];
fffruits.push("Lemon");  // Adds a new element (Lemon) to fruits
console.log(fffruits);

// New element can also be added to an array using the length property:

const ffruits = ["Banana", "Orange", "Apple"];
ffruits[ffruits.length] = "Lemon";  // Adds "Lemon" to fruits
console.log(ffruits);

// WARNING !
// Adding elements with high indexes can create undefined "holes" in an array:


const fruitaas = ["Banana", "Orange", "Apple"];
fruitaas[6] = "Lemon";  // Creates undefined "holes" in fruits
console.log(fruitaas);


// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.  
// In JavaScript, objects use named indexes.

// ================================================================================================

// Associative Arrays
// Many programming languages support arrays with named indexes.
// Arrays with named indexes are called associative arrays (or hashes).
// JavaScript does not support arrays with named indexes.
// In JavaScript, arrays always use numbered indexes.  


const peson = [];
peson[0] = "John";
peson[1] = "Doe";
peson[2] = 46;
peson.length;    // Will return 3
peson[0];        // Will return "John"
console.log(person[0] + " " + person.length + " " + peson);


// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// The problem is that the JavaScript operator typeof returns "object":

const fruitsaa = ["Banana", "Orange", "Apple"];
let type = typeof fruitsaa;
console.log(type);