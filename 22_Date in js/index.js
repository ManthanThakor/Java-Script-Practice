
// Dates  

// JavaScript Date Objects
// JavaScript Date Objects let us work with dates:
// Wed Mar 27 2024 17:44:21 GMT+0530 (India Standard Time)

const d = new Date();
console.log(d,"\n");

const d2 = new Date("2024-03-27");
console.log(d2,"\n");
// Note
// Date objects are static. The "clock" is not "running".
// The computer clock is ticking, date objects are not.

// JavaScript Date Output
// By default, JavaScript will use the browser's time zone and display a date as a full text string:
// Wed Mar 27 2024 17:44:21 GMT+0530 (India Standard Time)
// You will learn much more about how to display dates, later in this tutorial.


// Creating Date Objects
// Date objects are created with the new Date() constructor.
// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// JavaScript new Date()
// new Date() creates a date object with the current date and time:

// JavaScript new Date()
// new Date() creates a date object with the current date and time:

const d3 = new Date();
console.log(d3,"\n");

// new Date(date string)
// new Date(date string) creates a date object from a date string:

const d4 = new Date("October 13, 2014 11:13:00");
console.log(d4,"\n");

const d5 = new Date("2022-03-25");
console.log(d5,"\n");

// Date string formats are described in the next chapter.

// new Date(year, month, ...)
// new Date(year, month, ...) creates a date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):


const d6 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d6,"\n");


// **************** Note **************
// JavaScript counts months from 0 to 11:
// January = 0.
// December = 11.

// Specifying a month higher than 11, will not result in an error but add the overflow to the next year:
// Specifying:

const d7 = new Date(2018, 15, 24, 10, 33, 30);
console.log(d7,"\n");

// Specifying a day higher than max, will not result in an error but add the overflow to the next month:
// Specifying:

const d8 = new Date(2018, 5, 35, 10, 33, 30);
console.log(d8,"\n");



// Using 6, 4, 3, or 2 Numbers
// 6 numbers specify year, month, day, hour, minute, second:
// Example

const d9 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d9,"\n");


// 5 numbers specify year, month, day, hour, and minute:
// Example

const d10 = new Date(2018, 11, 24, 10, 33);
console.log(d10,"\n");


// 4 numbers specify year, month, day, and hour:
// Example

const d11 = new Date(2018, 11, 24, 10);
console.log(d11,"\n");


// 3 numbers specify year, month, and day:
// Example

const d12 = new Date(2018, 11, 24);
console.log(d12,"\n");


// 2 numbers specify year and month:
// Example

const d13 = new Date(2018, 11);
console.log(d13,"\n");

// You cannot omit month. If you supply only one parameter it will be treated as milliseconds.
// Example

const d14 = new Date(2018);
console.log(d14,"\n");

// Previous Century
// One and two digit years will be interpreted as 19xx:

const d15 = new Date(99, 11, 24);
 console.log(d15,"\n");

const d16 = new Date(20, 11, 24);
 console.log(d16,"\n");


//  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


/* JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970.
Zero time is January 01, 1970 00:00:00 UTC.
One day (24 hours) is 86 400 000 milliseconds.
Now the time is: 1711546421093 milliseconds past January 01, 1970 */

/* new Date(milliseconds)
new Date(milliseconds) creates a new date object as milliseconds plus zero time:

Examples
01 January 1970 plus 100 000 000 000 milliseconds is: */

const d17 = new Date(100000000000);
console.log(d17,"\n");

// January 01 1970 minus 100 000 000 000 milliseconds is:

const d18 = new Date(-100000000000);
console.log(d18,"\n");

// January 01 1970 plus 24 hours is:

const d19 = new Date(24 * 60 * 60 * 1000);
console.log(d19,"\n");

// or
const d20 = new Date(86400000);
console.log(d20,"\n");


// 01 January 1970 plus 0 milliseconds is:
const d21 = new Date(0);
console.log(d21,"\n");


/* 
Displaying Dates
JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:

Wed Mar 27 2024 19:03:41 GMT+0530 (India Standard Time)
When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
 */

const d22 = new Date();
d22.toString();
console.log(d22,"\n");

// The toDateString() method converts a date to a more readable format:

const d23 = new Date();
d23.toDateString();
 console.log(d23,"\n");

// The toUTCString() method converts a date to a string using the UTC standard:

const d24 = new Date();
d24.toUTCString();
 console.log(d24,"\n");

// The toISOString() method converts a date to a string using the ISO standard:

const d25 = new Date();
d25.toISOString();
 console.log(d25,"\n");
