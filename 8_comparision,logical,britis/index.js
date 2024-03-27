
// Comparison Operators:

// Comparison operators are used to compare values and return a Boolean result (true or false).
// Example: == (equal to), != (not equal to), > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to), === (strict equal to), !== (strict not equal to).

let aa = 5;
let bb = 10;

console.log(aa == bb);  // Outputs: false (equal to)
console.log(aa != bb);  // Outputs: true (not equal to)
console.log(aa < bb);   // Outputs: true (less than)
console.log(aa > bb);   // Outputs: false (greater than)
console.log(aa <= bb);  // Outputs: true (less than or equal to)
console.log(aa >= bb);  // Outputs: false (greater than or equal to)
console.log(aa === bb); // Outputs: false (strict equal to) it checks the datatype and value 
console.log(aa !== bb); // Outputs: true (strict not equal to)



// Logical Operators:

// Logical operators are used to combine conditional statements.
// Example: && (logical AND), || (logical OR), ! (logical NOT).

let a = true;
let b = false;

console.log(a && b); // Outputs: false (logical AND)
console.log(a || b); // Outputs: true (logical OR)
console.log(!a);     // Outputs: false (logical NOT)

// Bitwise Operators:

// Bitwise operators are used to perform bitwise operations on operands that are treated as a set of 32 bits (zeros and ones).
// Example: & (bitwise AND), | (bitwise OR), ^ (bitwise XOR), ~ (bitwise NOT), << (left shift), >> (right shift), >>> (zero-fill right shift).

let m = 5;  // binary: 0101
let n = 10; // binary: 1010

console.log(m & n);   // Outputs: 0 (bitwise AND)
console.log(m | n);   // Outputs: 15 (bitwise OR)
console.log(m ^ n);   // Outputs: 15 (bitwise XOR)
console.log(~m);      // Outputs: -6 (bitwise NOT)
console.log(m << 1);  // Outputs: 10 (left shift by 1 bit)
console.log(n >> 1);  // Outputs: 5 (right shift by 1 bit)



// Ternary operator

// The ternary operator (condition ? expr1 : expr2) is a shorthand for an if...else statement. It evaluates a condition and returns one of two values based on whether the condition is true or false.

let result = (aa > bb) ? "aa is greater" : "bb is greater";
console.log(result);