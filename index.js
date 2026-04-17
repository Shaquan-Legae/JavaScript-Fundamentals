/* Question 1: Control Flow & Conditional Logic (15 Marks) */

/* Write a JavaScript program that takes a variable score 
    and uses a switch statement to print a grade:

        A: 90–100
        B: 80–89
        C: 70–79
        D: 60–69
        F: below 60

Then, use a ternary operator to check if the student has passed (60 or above) or failed, 
and print the result. */

let score = parseInt(prompt("Enter your score: "));

switch (true) {
        case (score >= 90 && score <= 100):
            console.log("A");
            break;
        case (score >= 80 && score <= 89):
            console.log("B");
            break;
        case (score >= 70 && score <= 79):
            console.log("C");
            break;
        case (score >= 60 && score <= 69):
            console.log("D");
            break;
        case (score >= 0 && score < 60):
            console.log("F");
            break;
    default:
        console.log("Enter a valid score between 0 and 100.");
}

console.log(score >= 60 ? "Passed" : "Failed");


/* Question 2: Type Conversion, Truthy & Falsy Values (15 Marks) */

/* Create a program that:Takes a string input like "25" and converts it into a number.
Tests whether different values (0, "", "hello", null, undefined, NaN) are truthy or falsy using if statements.
Print out which values are truthy and which are falsy. */

let input = Number(prompt("Enter a number: "));

console.log("Converted input:", input);

let valuesToTest = [0, "", "hello", null, undefined, NaN];

for (let value of valuesToTest) {
    if (value) {
        console.log(`${JSON.stringify(value)} is truthy.`);
    } else {
        console.log(`${JSON.stringify(value)} is falsy.`);
    }
}

if (input) {
    console.log(`The input ${input} is truthy.`);
} else {
    console.log(`The input ${input} is falsy.`);
}


/* Question 3: Functions & Logical Operators (20 Marks)

Write a function named greetingBot that:

Takes a user’s name and a boolean value isMorning.
If isMorning is true, return "Good morning, [name]!"; 
otherwise, return "Hello, [name]!". Use logical operators and template literals to build
your output.
Then test your function with different inputs. */

let name = prompt("Enter your name: ");
let isMorningInput = prompt("Is it morning? (true/false): ");
let isMorning = isMorningInput.toLowerCase() === "true";

function greetingBot(name, isMorning) {
    if (isMorning) {
        return `Good morning, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greetingBot(name, isMorning));


/* Question 4: Objects & Methods (30 Marks)

Create a JavaScript object named post representing a social media post with
these properties: username, caption, likes, comments (array data type).

Add a method inside the object named addLike() that increases the like count by 1.
Then, use object destructuring to extract and print the username and caption. */

let post = {
    username: "Kago Kola",
    caption: "I love JavaScript!",
    likes: 100,
    comments: ["Great!", "Awesome K!"],

    addLike() {
        this.likes += 1;
    }
};

post.addLike();

const { username, caption } = post;

console.log("Username:", username);
console.log("Caption:", caption);
console.log("Likes:", post.likes);


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

    for (let k = 1; k <= i; k++) {
        line += "* ";
    }

    console.log(line);
}