// Array in TypeScript

let marks : number[] = [90, 85, 78, 92, 88];
console.log(marks); // Output: [90, 85, 78, 92, 88]

// Array<Type>

let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

let prices: Array<number> = [10.99, 5.49, 20.0];
let isAvailable: Array<boolean> = [true, false, true];
let mixedArray: Array<string | number> = ["Hello", 42, "World", 3.14];

names.push("David");