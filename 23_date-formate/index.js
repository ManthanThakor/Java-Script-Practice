

/* JavaScript Date Formats
JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

Type	Example
ISO Date	"2015-03-25" (The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015" */

/* The ISO format follows a strict standard in JavaScript.
The other formats are not so well defined and might be browser specific.
JavaScript Date Output
Independent of input format, JavaScript will (by default) output dates in full text string format:
Thu Mar 28 2024 09:07:08 GMT+0530 (India Standard Time)

// JavaScript ISO Dates

ISO 8601 is the international standard for the representation of dates and times.
The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

Example (Complete date) */
const d2 = new Date("2015-03-25");
console.log(d2, d2.getFullYear());


/* ISO Dates (Year and Month)
ISO dates can be written without specifying the day (YYYY-MM):

Example */
const d3 = new Date("2015-03");
console.log(d3,"\n");

/* Time zones will vary the result above between February 28 and March 01.

ISO Dates (Only Year)
ISO dates can be written without month and day (YYYY):

Example */
const d4 = new Date("2015");
console.log(d4,"\n");

/* Time zones will vary the result above between December 31 2014 and January 01 2015.

ISO Dates (Date-Time)
ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):

Example */
const d5 = new Date("2015-03-25T12:00:00Z");
console.log(d5,"\n");

/* Date and time is separated with a capital T.

UTC time is defined with a capital letter Z.

If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:

Example */
const d6 = new Date("2015-03-25T12:00:00-06:30");
console.log(d6,"\n");



/* UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).

Omitting T or Z in a date-time string can give different results in different browsers. */


/* JavaScript Short Dates.
Short dates are written with an "MM/DD/YYYY" syntax like this:
 */

const d7 = new Date("03/25/2015");
console.log(d7,"\n");


// WARNINGS !
// In some browsers, months or days with no leading zeroes may produce an error:

const d8 = new Date("2015-3-25");
console.log(d8,"\n");


// The behavior of "YYYY/MM/DD" is undefined.
// Some browsers will try to guess the format. Some will return NaN.

const d9 = new Date("2015/03/25");
console.log(d9,"\n");


// The behavior of  "DD-MM-YYYY" is also undefined.
// Some browsers will try to guess the format. Some will return NaN.

const d10 = new Date("25-03-2015");
console.log(d10,"\n");


// JavaScript Long Dates.
// Long dates are most often written with a "MMM DD YYYY" syntax like this:

const d11 = new Date("Mar 25 2015");
console.log(d11,"\n");

// Month and day can be in any order:

const d12 = new Date("25 Mar 2015");
console.log(d12,"\n");


// And, month can be written in full (January), or abbreviated (Jan):

const d13 = new Date("January 25 2015");
console.log(d13,"\n");


const d14 = new Date("Jan 25 2015");
 console.log(d14,"\n");

// Commas are ignored. Names are case insensitive:


const d15 = new Date("JANUARY, 25, 2015");
 console.log(d15,"\n");