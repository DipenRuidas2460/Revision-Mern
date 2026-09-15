// Never Data Type
// The never type represents the type of values that never occur. 
// For example, 
// a function that always throws an error or a function that never returns has the return type never.

function throwError(message: string): never {
    throw new Error(message);
}

throwError("404 error!"); // This will throw an error and terminate the program

function infiniteLoop(): never {
    while (true) {
        console.log("This function will never return!");
    }
}

infiniteLoop(); // This will run indefinitely and never return, function never finished.


// error handling and impossible state handling are common use cases for the never type.


// // Void Data Type
// The void type represents the absence of a value.
// It is commonly used as the return type of functions that do not return a value.

function logMessage(message: string): void {
    console.log(message);
}

let res = logMessage("Hello, this is a void function!"); // This will log the message to the console
console.log(res); // Output: undefined, since the function does not return a value, function finished.
