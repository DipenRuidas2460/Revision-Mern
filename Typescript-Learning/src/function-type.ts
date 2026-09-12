const subtraction: (a: number, b: number) => number = (a, b) => {
    return a - b;
}

console.log(subtraction(10, 5)); // Output: 5

let division: (a: number, b: number) => number

division = (a, b) => {
    return a / b;
}

console.log(division(10, 2)); // Output: 5

// Callback Function Example

const processNumbers = (a: number, b: number, callback: (x: number, y: number) => number) => {
    return callback(a, b);
};

const result1 = processNumbers(10, 5, (x, y) => x * y);
console.log(result1); // Output: 50


function processData(callback: (value: number) => void) {
    callback(100)
}

processData((value) => {
    console.log(value); // Output: 100
});

