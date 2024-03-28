/* JavaScript Function Definitions
JavaScript functions are defined with the function keyword.

You can use a function declaration or a function expression. */


/* 1. Function Declaration:
You can declare a function in JavaScript using the function keyword followed by the function name and a pair of parentheses ( ). If the function takes parameters, you can list them inside the parentheses. The function body is enclosed in curly braces { }.
 */

function greett() {
    console.log("Hello, world!" ,"\n");
}
// Calling the function
greett(); // Output: Hello, world!


/* 2. Function Parameters:
Functions can take parameters, which are variables listed inside the parentheses in the function declaration. These parameters act as placeholders for values that the function will receive when it's called.
 */
function greet(name) {
    console.log("Hello, " + name + "!" ,"\n");
}
// Calling the function with an argument
greet("Manthan" ); // Output: Hello, John!WW

/* 3. Return Statement:
Functions can return a value using the return statement. When a function encounters a return statement, it stops executing and returns the value specified in the statement.
 */
function add(a, b) {
    return a + b;
}

const result = add(1000, 1000);
console.log(result,"\n"); // Output: 2000