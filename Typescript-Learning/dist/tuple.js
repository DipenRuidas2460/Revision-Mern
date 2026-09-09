"use strict";
// order and type and length is fixed in tuple, we can not change the order and type of tuple.
let person = ["Alice", 30, true];
console.log(person); // Output: ["Alice", 30, true]
// Accessing elements in a tuple
console.log(person[0]); // Output: "Alice"
console.log(person[1]); // Output: 30
console.log(person[2]); // Output: true
// Normal Array vs Tuple
let normalArray = [30, true, "Alice"];
console.log(normalArray); // Output: [30, true, "Alice"] 
// order and type is not fixed in normal array, we can change the order and type of normal array.
// Tuple with optional elements
let personWithOptional = ["Bob", 25000, true];
console.log(personWithOptional); // Output: ["Bob", 25000, true]
let [userName, salary, isUserLoggedIn] = personWithOptional;
console.log(userName); // Output: "Bob"
console.log(salary); // Output: 25000
console.log(isUserLoggedIn); // Output: true
function getPersonInfo() {
    return ["Charlie", 28, false];
}
let [nickName, age, isLoggedIn] = getPersonInfo();
console.log(nickName); // Output: "Charlie"
console.log(age); // Output: 28
console.log(isLoggedIn); // Output: false
