

// _______SWITCH_______


// The switch statement in JavaScript provides a way to execute different code blocks based on the value of an expression. It's an alternative to using multiple if...else if...else statements when you have multiple conditions to check against a single value. 

// Example: Checking the day of the week using a switch statement

let day = 4;
let dayName;

switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}

console.log(`The day of the week is ${dayName}.`);
