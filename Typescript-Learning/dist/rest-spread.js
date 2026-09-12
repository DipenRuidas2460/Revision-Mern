"use strict";
// ... (Rest & Spread Operators in TypeScript)
// Rest Operator (Collect Values into an Array)
function addNum1(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(addNum1(1, 2, 3)); // Output: 6
console.log(addNum1(4, 5, 6, 7)); // Output: 22
function printNumbers(userName1, ...numbers) {
    console.log(`Hello, ${userName1}! Numbers:`, numbers);
}
printNumbers("Dipen", 1, 2, 3); // Output: Hello, Dipen! Numbers: [1, 2, 3]
// Spread Operator (Expand an Array into Individual Elements)
const numbersArray = [1, 2, 3, 4, 5];
console.log(...numbersArray); // Output: 1 2 3 4 5
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const resultArray = [...num1, ...num2];
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]
// Spread Operator with Objects
const user1 = {
    name: "Dipen",
    age: 25
};
const updatedUser = {
    ...user1,
    age: 30, // Overriding the age property
    city: "New York" // Adding a new property
};
console.log(updatedUser); // Output: { name: "Dipen", age: 30, city: "New York" }
