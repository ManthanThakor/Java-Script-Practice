/* JavaScript Function Definitions
JavaScript functions are defined with the function keyword.

You can use a function declaration or a function expression. */

//===============================================

/* Functions in JavaScript are blocks of reusable code that perform a specific task. They allow you to encapsulate a piece of code and execute it whenever needed */

//===============================================

/* 1. Function Declaration:
You can declare a function in JavaScript using the function keyword followed by the function name and a pair of parentheses ( ). If the function takes parameters, you can list them inside the parentheses. The function body is enclosed in curly braces { }.
 */

function greett() {
  console.log("Hello, world!", "\n");
}
// Calling the function
greett(); // Output: Hello, world!

//===============================================

/* 2. Function Parameters:
Functions can take parameters, which are variables listed inside the parentheses in the function declaration. These parameters act as placeholders for values that the function will receive when it's called.
 */
function greet(name) {
  console.log("Hello, " + name + "!", "\n");
}
// Calling the function with an argument
greet("Manthan"); // Output: Hello, John!WW

// Onther example of a function  Parameters

function wel(name, blocks) {
  console.log("Hello, " + name + blocks + "!");
  console.log("Welcome to Js PRACTICE");
  console.log("we are learning js PRACTICE");
  console.log("BEST OF LUCK", "\n");
}
wel("Manthan", "THAKOR"); // arguments
wel("ROCK", "BHAI"); // arguments

//===============================================

/* 3. Return Statement:
Functions can return a value using the return statement. When a function encounters a return statement, it stops executing and returns the value specified in the statement.
 */
function add(a, b) {
  return a + b;
}

const result = add(1000, 1000);
console.log(result, "\n"); // Output: 2000

function mul(a, b) {
  let x = a * b;
  return x;
}
const result1 = mul(1000, 1000);
console.log(result1, "\n"); // Output 1000000

// !!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!!!!!

// we cant write anything after return in functions

function m(a) {
  return a;
  console.log("we cant write anything after return in functions");
}
const abbb = m("WARNING !!!!!!!!!!!!");
console.log(abbb, "\n");

// =============================================

// 4. Function Expressions:
// In addition to function declarations, you can also define functions using function expressions. Function expressions can be anonymous or named.

// Anonymous Function Expression:

const gSA = function (name) {
  console.log("Hello, " + name + "!");
};

gSA("Alice"); // Output: Hello, Alice!

// Named Function Expression:

const gret = function sayHello(name) {
  console.log("Hello, " + name + "!");
};

gret("Bob"); // Output: Hello, Bob!

// =============================================

/* 5. Arrow Functions:
Arrow functions are a concise way to write functions in JavaScript. They have a more compact syntax compared to regular function expressions */

const greet1 = (name) => {
  // funtion variable const greet1
  console.log("Hello, " + name + "!");
};

greet1("Emily"); // Output: Hello, Emily!

// example2

const arrowf = (params) => {
  let aaaaa = console.log("Hello, " + params + "!");
  return aaaaa;
};
arrowf("John"); // Output: Hello, John!

// example3

const multif = (a, b) => {
  let multiff = a * b;
  return multiff;
};
let multifff = multif(100, 20);
console.log(multifff);

// example 4

const hello = () => {
  //EMPTY PARENTHESES
  console.log("Hello, World!");
};
hello(); // Output: Hello, World!

// const hello = () => console.log("Hello, World!"); // WE CAN WRITE THIS WAY ALSO
//   hello(); // Output: Hello, World!

// =============================================
// !!!!!!!!!!!!!!!! PRACTICE !!!!!!!!!!!!!!!!!!!!

// https://youtu.be/VlPiVmYuoqw?si=sygR0vIW_8xIGa60&t=18475

// Let‘s Practice
// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str) {
  let vowels = 0;
  // Loop through each character in the string
  for (let char of str) {
    console.log(char);
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowels++;
    }
  }
  return vowels;
}
console.log(countVowels);

// Qs. Create an arrow function to perform the same task.

const countVow = (str) => {
    let vowels = 0;
    // Loop through each character in the string
    for (let char of str) {
      console.log(char);
      if (
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u"
      ) {
        vowels++;
      }
    }
    return vowels;
}

// =============================================

/* 6. Immediately Invoked Function Expressions (IIFE):
An Immediately Invoked Function Expression is a function that is executed immediately after it's created. It's often used to create a private scope for variables. */


(function() {
    console.log("This is an IIFE.");
})();


// =============================================


/* 7. Function Scope:
Variables declared inside a function are scoped to that function and are not accessible from outside the function.
 */
function myFunction() {
    const message = "Hello!";
    console.log(message); // Output: Hello!
}
myFunction();  
// console.log(message); // Error: message is not defined

// =============================================

/* 8. Function Hoisting:
In JavaScript, function declarations are hoisted to the top of their scope, which means you can call a function before it's declared in the code.
 */

sayHello(); // Output: Hello!
function sayHello() {
    console.log("Hello!");
}

// =============================================

// 9. Callback Functions:
// A callback function is a function passed as an argument to another function and is executed later in the program's execution.


function greet(callback) {

    callback();
}

function sayHello() {
    console.log("Hello!");
}

greet(sayHello); // Output: Hello!