

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling 

// ___________________-Conditional statements-_________________

// Conditional statements are crucial for controlling the flow of your JavaScript code based on certain conditions. 
// In JavaScript we have the following conditional statements:

// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// ================================================================

// __________-The if Statement-_________
// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

// Syntax
// if (condition) {
//   //  block of code to be executed if the condition is true
// }

let hour = 3;
if (hour < 18) {
    console.log("Good day");
  }

let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
}
// ================================================================

// _________ if else statement_________

// Use the else statement to specify a block of code to be executed if the condition is false.
let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}


let agee = 16;

if (agee >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}
// ================================================================

// _________ if else if else statement_________

// Use the else if statement to specify a new condition if the first condition is false.
let score = 75;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

console.log(`The student's grade is: ${grade}`);


let price = 25;

if (price < 10) {
    console.log("This product is in the 'Low Cost' category.");
} else if (price >= 10 && price < 50) {
    console.log("This product is in the 'Medium Cost' category.");
} else {
    console.log("This product is in the 'High Cost' category.");
}

// ================================================================