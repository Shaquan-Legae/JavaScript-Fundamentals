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