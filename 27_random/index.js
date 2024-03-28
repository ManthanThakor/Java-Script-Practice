

/* 
JavaScript Random
Math.random()
Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

Example
// Returns a random number:
Math.random();
Math.random() always returns a number lower than 1 */

/* JavaScript Random Integers
Math.random() used with Math.floor() can be used to return random integers.

There is no such thing as JavaScript integers.

We are talking about numbers with no decimals here. */


// Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10))

// Returns a random integer from 0 to 10:
console.log(Math.floor(Math.random() * 11))
// Returns a random integer from 0 to 99:
console.log(Math.floor(Math.random() * 100))

// Returns a random integer from 0 to 100:
console.log(Math.floor(Math.random() * 101))
// Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1)
// Returns a random integer from 1 to 100:
console.log(Math.floor(Math.random() * 100) + 1)



/* A Proper Random Function
As you can see from the examples above, it might be a good idea to create a proper random function to use for all random integer purposes.

This JavaScript function always returns a random number between min (included) and max (excluded):

Example */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
// Returns a random integer from 0 to 9:
console.log(getRndInteger(0, 10))
/* This JavaScript function always returns a random number between min and max (both included):

Example */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Returns a random integer from 0 to 9:
console.log(getRndInteger(0, 10))