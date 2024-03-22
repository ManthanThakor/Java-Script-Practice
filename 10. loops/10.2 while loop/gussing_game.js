
// guessing the number game 

let gameNum = 25;
let userNum = parseInt(prompt("Guess the game number: "));

while (userNum !== gameNum) {
   userNum = parseInt(prompt("You entered the wrong game number. Guess the game number again: "));
}

console.log("Congratulations! You entered the correct game number.");

