// forEach Loop in Arrays
// ______________** HIGHER ORDER FUNCTIONS ** _____________________

// arr.forEach( callBackFunction )

// CallbackFunction : Here, it is a function to execute for each element in the array

// *A callback is a function passed as an argument to another function.

let arr = ["a", "b", "c", "d", "e"];
arr.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

//example 2

let num = [28, 99, 2, 3];
num.forEach((numb) => {
  console.log(numb * numb); // numb ** 2
});

console.log("\n");

// example 2 with different formatting

let numq = [100, 99, 21, 322];
let calcSquare = (num) => {
  console.log(num * num); // num ** 2
};
numq.forEach(calcSquare);

// Some More Array Methods
// Map
// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array
// arr.map( callbackFnx( value, index, array ) )

// Filter
// Creates a new array of elements that give true for a condition/filter.
// Eg: all even elements

// Reduce
// Performs some operations & reduces the array to a single value. It returns
// that single value.
