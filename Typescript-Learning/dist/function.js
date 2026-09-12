"use strict";
// function in TypeScript
function addNum(a, b) {
    return a + b;
}
let result = addNum(5, 10);
console.log(result); // Output: 15
// optional and default parameters, default parameters is first parameter
//  and optional parameter is second parameter.
function greetUser(age, userName) {
    if (userName) {
        console.log(`Hello, ${userName}! You are ${age} years old.`);
    }
    else {
        console.log(`Hello, stranger! You are ${age} years old.`);
    }
}
greetUser(25, "Alice"); // Output: Hello, Alice! You are 25 years old.
greetUser(30); // Output: Hello, stranger! You are 30 years old.
// default parameter
function test(userName = "Guest") {
    console.log(`Hello, ${userName}!`);
}
test(); // Output: Hello, Guest!
test("Bob"); // Output: Hello, Bob!
const multiply = (a, b) => {
    return a * b;
};
const multiplyResult = multiply(4, 5);
console.log(multiplyResult); // Output: 20
const square = (num) => num * num;
const squareResult = square(6);
console.log(squareResult); // Output: 36
