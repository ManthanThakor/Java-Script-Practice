


// In JavaScript, the prompt() method is used to display a dialog box that prompts the user for input. It typically contains a message, an input field for the user to enter text, and buttons to confirm or cancel the input. The prompt() method returns the text entered by the user as a string.
// Here's how you can use the prompt() method in JavaScript:


let userInput = prompt("Please enter your name:");
console.log("Hello, " + userInput + "! Welcome.");

let age = prompt("Please enter your age:");
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// Prompt the user to enter the length of the rectangle
let length = prompt("Enter the length of the rectangle:");

// Convert the input (which is a string) to a number using parseFloat
length = parseFloat(length);

// Prompt the user to enter the width of the rectangle
let width = prompt("Enter the width of the rectangle:");

// Convert the input (which is a string) to a number using parseFloat
width = parseFloat(width);

// Calculate the area of the rectangle
let area = length * width;

// Display the result to the user
alert("The area of the rectangle is: " + area);
