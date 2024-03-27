
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
