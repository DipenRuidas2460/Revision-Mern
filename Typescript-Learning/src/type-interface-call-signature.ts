// Call Signature in TypeScript

type CallSignature = (x: number, y: number) => number;

let newMultiply: CallSignature = (a, b) => {
    return a * b;
}

console.log(newMultiply(5, 4)); // Output: 20


// Call Signature with interface

interface CallSignatureInterface {
    (x: number, y: number): number;
}

let newAdd: CallSignatureInterface = (a, b) => {
    return a + b;
}

console.log(newAdd(5, 4)); // Output: 9


interface LoginFunction {
    (username: string, password: string): boolean;
}

let login: LoginFunction = (username, password) => {
    return username === "admin" && password === "password";
}

console.log(login("admin", "password")); // Output: true

