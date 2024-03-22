// Prompt the user to enter a number
let userInput = parseInt(prompt("Enter a number to calculate its factorial:"));

// Initialize the factorial variable to 1
let factorial = 1;

// Check if the user input is a valid number
if (!isNaN(userInput) && userInput >= 0) {
    // Calculate factorial using a for loop
    for (let i = 1; i <= userInput; i++) {
        factorial *= i;
    }
    // Print the factorial
    console.log(`The factorial of ${userInput} is: ${factorial}`);
} else {
    console.log("Invalid input. Please enter a valid non-negative number.");
}