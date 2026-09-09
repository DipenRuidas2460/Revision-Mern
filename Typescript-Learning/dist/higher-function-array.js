"use strict";
// Example of using the reduce function in TypeScript
let numbers = [1, 2, 3, 4, 5];
let newSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(newSum); // Output: 15
// Example of using the map function in TypeScript
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// Example of using the filter function in TypeScript
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
