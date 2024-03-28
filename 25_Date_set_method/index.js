
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