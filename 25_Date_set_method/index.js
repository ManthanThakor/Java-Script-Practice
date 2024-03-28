
// JavaScript Set Date Methods
// Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

// Set Date Methods
// Set Date methods are used for setting a part of a date:

// Method	Description
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (optionally month and day)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

/* The setFullYear() Method
The setFullYear() method sets the year of a date object. In this example to 2020:

Example */
const d = new Date();
console.log(d.setFullYear(2013));

/* The setHours() Method
The setHours() method sets the hour of a date object. In this example to 12:

Example */

const d33 = new Date();
console.log(d33.setHours(12));

/* The setMilliseconds() Method
The setMilliseconds() method sets the milliseconds of a date object. In this example to 300:

Example */

const d6 = new Date();
console.log(d6.setMilliseconds(300));

/* The setMinutes() Method
The setMinutes() method sets the minutes of a date object. In this example to 30:

Example */

const d5 = new Date();
console.log(d5.setMinutes(30));

/* The setMonth() Method
The setMonth() method sets the month of a date object. In this example to January:

Example */

const d4 = new Date();
console.log(d4.setMonth(0));

/* The setSeconds() Method
The setSeconds() method sets the seconds of a date object. In this example to 59:

Example */

const d3 = new Date();
console.log(d3.setSeconds(59));