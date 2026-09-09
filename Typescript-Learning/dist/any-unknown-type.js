"use strict";
// Any Types   // for any type we can assign any value to it and it will not give any error
// minimised error of the code for better understanding when js to typescript conversion is done
// let userName: any = "Dipen";
// userName = 10;
// userName = true;
// console.log(typeof(userName));
// console.log(userName);
// unknown type is a type-safe counterpart of any. 
// It means that you can assign any value to a variable of type unknown, 
// but you cannot perform any operations on it without first asserting its type. 
// This helps prevent runtime errors and encourages better type safety in your code.
let userLoggedIn = true;
userLoggedIn = "Dipen";
userLoggedIn = 10;
if (typeof userLoggedIn === "string") {
    console.log(userLoggedIn.toUpperCase());
}
else {
    console.log("userLoggedIn is not a string");
}
