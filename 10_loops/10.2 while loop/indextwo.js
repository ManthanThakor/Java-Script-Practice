

//______________- while Loop:_____________--

// The while loop executes a block of code as long as the specified condition evaluates to true. It checks the condition before entering the loop, so if the condition is initially false, the block of code inside the loop will not execute at all.

// while (condition) {
//     // code block to be executed
//   }
let idex=10;
while (idex>1) {
    console.log(idex);
    idex--;
}

let iI = 0;
while (iI < 10) {
    console.log(iI);
    iI++;
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while(cars[i]) {
  text =text + cars[i];
  i++;
  console.log(text);

}
let ie = 0;
while (ie < 10) {
  console.log(ie);
ie = ie + 2;
}
console.log("while end do while start condition");

// ----------------------------------------------------------------

//_______________________________DO WHILE LOOP_________________________________

// do...while loop:
// The do...while loop is similar to the while loop, but it checks the loop condition after executing the block of code. This means that the block of code inside the loop will always execute at least once, even if the condition is initially false.

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);

