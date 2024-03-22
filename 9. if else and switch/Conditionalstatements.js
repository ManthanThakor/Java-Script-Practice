

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling 

// ___________________-Conditional statements-_________________

// Conditional statements are crucial for controlling the flow of your JavaScript code based on certain conditions. Here are two examples of conditional statements, along with explanations, followed by the most commonly used conditional statement:

//  if else statement

let number = 7;

if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

//  if else if else statement

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