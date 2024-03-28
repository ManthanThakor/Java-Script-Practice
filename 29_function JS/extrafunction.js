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

let numm = [12 , 21, 12];

 let newnumm = numm.map((value) => {
 return value * 2;
});
console.log(newnumm); //[ 24, 42, 24 ]


// Filter
// Creates a new array of elements that give true for a condition/filter.

let arrr = [1, 2, 3, 4, 5, 6, 7];
let evenarr = arrr.filter((value) =>{
 return value % 2 === 0;
});
console.log(evenarr);//[ 2, 4, 6 ]


// Reduce
// Performs some operations & reduces the array to a single value. It returns
// that single value.

let arrrr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arrrr.reduce((results, current) => {
 return results + current;
});
console.log(sum); // 55 



// // different between forEach , map and filter reduce

// FOREACH : NORMAL CALCULATION OR print
// MAP : value ko use karke new array banana
// filter : Creates a new array of elements that give true for a condition
// reduce : Performs some operations & reduces the array to a single value.(jab input bahut sara ho but output 1 hi chahiye tab reduce like : sum , average)