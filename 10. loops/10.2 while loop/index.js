//______________- while Loop:_____________--

// let idex=10;
// while (idex>1) {
//     console.log(idex);
//     idex--;
// }

let gameNum = 25;
let userNum = parseInt(prompt("Guess the game number: "));

while (userNum !== gameNum) {
   userNum = parseInt(prompt("You entered the wrong game number. Guess the game number again: "));
}

console.log("Congratulations! You entered the correct game number.");

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }