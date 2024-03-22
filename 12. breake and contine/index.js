


// break:
// The break statement is used to terminate the loop prematurely when a certain condition is met. It allows you to exit the loop before its normal termination condition.
// When break is encountered inside a loop, the loop is immediately terminated, and the program continues executing the code after the loop.
// break is commonly used to exit a loop early when a specific condition is met, saving unnecessary iterations.


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}

// continue:
// The continue statement is used to skip the current iteration of the loop and proceed to the next iteration.
// When continue is encountered inside a loop, the remaining code within the loop for the current iteration is skipped, and the loop proceeds with the next iteration.
// continue is commonly used to skip specific iterations of the loop based on certain conditions, without terminating the loop entirely.


for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip iteration when i equals 3
    }
    console.log(i);
}