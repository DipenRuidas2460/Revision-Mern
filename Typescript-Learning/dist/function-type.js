"use strict";
const subtraction = (a, b) => {
    return a - b;
};
console.log(subtraction(10, 5)); // Output: 5
let division;
division = (a, b) => {
    return a / b;
};
console.log(division(10, 2)); // Output: 5
// Callback Function Example
const processNumbers = (a, b, callback) => {
    return callback(a, b);
};
const result1 = processNumbers(10, 5, (x, y) => x * y);
console.log(result1); // Output: 50
function processData(callback) {
    callback(100);
}
processData((value) => {
    console.log(value); // Output: 100
});
