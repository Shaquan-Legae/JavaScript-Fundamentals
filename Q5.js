/* Question 5: Loops, Spread Operator & Pattern Printing (50 Marks)
Create two arrays of numbers, merge them using the spread operator, and print the combined array.

Use a for loop to print the following pattern:

            *
         *    *
      *    *    *
   *     *    *    *
*     *    *    *    *

Use a while loop to print numbers from 10 down to 1. */

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

let nums = [...num1, ...num2];

console.log("Combined array:", nums);

let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= 5 - i; j++) {
        line += " ";
    }


    console.log(line);
}