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
    console.log("Hello, world!" ,"\n");
}
// Calling the function
greett(); // Output: Hello, world!

//===============================================

/* 2. Function Parameters:
Functions can take parameters, which are variables listed inside the parentheses in the function declaration. These parameters act as placeholders for values that the function will receive when it's called.
 */
function greet(name) {
    console.log("Hello, " + name + "!" ,"\n");
}
// Calling the function with an argument
greet("Manthan" ); // Output: Hello, John!WW


// Onther example of a function  Parameters

function wel(name,blocks) {
    console.log("Hello, " + name + blocks + "!");
    console.log("Welcome to Js PRACTICE");
    console.log("we are learning js PRACTICE");
    console.log("BEST OF LUCK" ,"\n");
}
wel("Manthan","THAKOR"); // arguments
wel("ROCK","BHAI"); // arguments

//===============================================

/* 3. Return Statement:
Functions can return a value using the return statement. When a function encounters a return statement, it stops executing and returns the value specified in the statement.
 */
function add(a, b) {
    return a + b;
}

const result = add(1000, 1000);
console.log(result,"\n"); // Output: 2000


function mul(a,b){
    let x = a * b;
    return x;
}
const result1 = mul(1000, 1000);
console.log(result1,"\n"); // Output 1000000

// !!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!!!!!

// we cant write anything after return in functions

function m(a){
    return a;
    console.log("we cant write anything after return in functions");
}
const abbb = m("WARNING !!!!!!!!!!!!");
console.log(abbb,"\n");



// =============================================

// 4. Function Expressions:
// In addition to function declarations, you can also define functions using function expressions. Function expressions can be anonymous or named.

// Anonymous Function Expression:

const gSA = function(name) {
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
    console.log("Hello, " + name + "!");
};

greet1("Emily"); // Output: Hello, Emily!

// example2 

const arrowf = (params) => {
   let aaaaa = console.log("Hello, " + params + "!");
    return aaaaa;
}
arrowf("John"); // Output: Hello, John!

// example3

const multif = (a,b) => {
    let multiff = a *b;
    return multiff;
}
let multifff = multif(100,20);
console.log(multifff);




