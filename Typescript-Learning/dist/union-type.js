"use strict";
// function union type
function printData(data) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    }
    else {
        console.log(data);
    }
}
printData("Hello"); // Output: "HELLO"
printData(123); // Output: 123
// Api response, flexible userId, login function, form Input, Payment status.
