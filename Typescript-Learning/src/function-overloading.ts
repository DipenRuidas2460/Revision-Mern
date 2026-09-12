// function overloading in typescript

// function add(x: number, y: number): number;
// function add(x: string, y: string): string;

function welcome(x: any, y: any): any {
    return x + y;
}

console.log(welcome(10, 20)); // Output: 30
console.log(welcome("Hello ", "World")); // Output: Hello World


function search(value: any): string {
    if (typeof value === "number") {
        return `Searching by ID: ${value}`;
    } else {
        return `Searching by Name: ${value}`;
    }
}

console.log(search(123)); // Output: Searching by ID: 123
console.log(search("John")); // Output: Searching by Name: John