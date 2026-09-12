"use strict";
// optional and default parameters in TypeScript
// optional parameter
function greetUser1(userName) {
    console.log(`Hello, ${userName}! `);
}
greetUser1("Alice"); // Output: Hello, Alice!
greetUser1(); // Output: Hello, undefined!
// default parameter
function greetUserWithDefault(userName = "Guest") {
    console.log(`Hello, ${userName}!`);
}
greetUserWithDefault(); // Output: Hello, Guest!
greetUserWithDefault("Bob"); // Output: Hello, Bob!
