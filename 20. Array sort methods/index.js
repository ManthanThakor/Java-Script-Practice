

// @@@@@@@@@@@@@@@@@@ Alpabetic Sort @@@@@@@@@@@@@@@@@@

// Array sort()
// Array reverse()
// Array toSorted()
// Array toReversed()

// =====================================================================================================

// Array sort():

// The sort() method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings based on their UTF-16 code units' values.

const array = ['banana', 'apple', 'cherry'];
array.sort();
console.log(array); // Output: ['apple', 'banana', 'cherry']

// Array reverse():
// The reverse() method reverses the elements of an array in place and returns the reversed array.

const arraya = ['apple', 'banana', 'cherry'];
arraya.reverse();
console.log(arraya); // Output: ['cherry', 'banana', 'apple']

// Array toSorted(): 
// This method is not a standard JavaScript array method. If you mean sorting and returning a new sorted array without modifying the original array, you can use slice() followed by sort():

const arra = ['banana', 'apple', 'cherry'];
const sortedArray = arra.slice().sort();
console.log(sortedArray); // Output: ['apple', 'banana', 'cherry']

// Array toReversed(): Similarly, there's no standard toReversed() method. You can achieve this by using slice() followed by reverse():

const arrayp = ['apple', 'banana', 'cherry'];
const reversedArray = arrayp.slice().reverse();
console.log(reversedArray); // Output: ['cherry', 'banana', 'apple']


// @@@@@@@@@@@@@@@@@@ Numeric Sort @@@@@@@@@@@@@@@@@@

// Numeric Sort
// Random Sort
// Math.min()
// Math.max()
// Home made Min()
// Home made Max()

// =====================================================================================================

// Numeric Sort:
// For sorting numbers in ascending order, you can provide a custom sorting function to the sort() method:

const rray = [30, 10, 20];
rray.sort((a, b) => a - b);
console.log(rray); // Output: [10, 20, 30]

// Random Sort:
// You can achieve a random sort order by subtracting a random value between -0.5 and 0.5 from each element before sorting:

const aray = [30, 10, 20];
aray.sort(() => Math.random() - 0.5);
console.log(aray); // Output: [10, 30, 20] (random order)

// Math.min():
// The Math.min() function returns the smallest of zero or more numbers.

const min = Math.min(10, 30, 20);
console.log(min); // Output: 10

// Math.max():
// The Math.max() function returns the largest of zero or more numbers.

const max = Math.max(10, 30, 20);
console.log(max); // Output: 30

// Home made Min():
// You can create a function to find the minimum value in an array using the spread operator (...) and Math.min():

function mn(arr) {
  return Math.min(...arr);
}
const arr = [10, 30, 20];
console.log(mn(arr)); // Output: 10

// Home made Max():
// Similarly, you can create a function to find the maximum value in an array:

function mx(arrayaa) {
  return Math.max(...arrayaa);
}
const arrayaa = [10, 30, 20];
console.log(mx(arrayaa)); // Output: 30