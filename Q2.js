/* Question 2: Type Conversion, Truthy & Falsy Values (15 Marks) */

/* Create a program that:Takes a string input like "25" and converts it into a number.
Tests whether different values (0, "", "hello", null, undefined, NaN) are truthy or falsy using if statements.
Print out which values are truthy and which are falsy. */

let inputString = prompt("Enter a number as string: ");
let input = Number(inputString);

console.log("Converted input:", input);

// values to test
let valuesToTest = [0, "", "hello", null, undefined, NaN];

for (let value of valuesToTest) {

    if (value === "") {
        console.log(`"" is falsy`);
    } else if (Number.isNaN(value)) {
        console.log(`NaN is falsy`);
    } else if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
}

if (input) {
    console.log(`The input ${input} is truthy`);
} else {
    console.log(`The input ${input} is falsy`);
}
