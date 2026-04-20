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