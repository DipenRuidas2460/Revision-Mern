"use strict";
// Call Signature in TypeScript
let newMultiply = (a, b) => {
    return a * b;
};
console.log(newMultiply(5, 4)); // Output: 20
let newAdd = (a, b) => {
    return a + b;
};
console.log(newAdd(5, 4)); // Output: 9
let login = (username, password) => {
    return username === "admin" && password === "password";
};
console.log(login("admin", "password")); // Output: true
