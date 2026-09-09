// console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991

// console.log(Number.MAX_SAFE_INTEGER + 1); // Output: 9007199254740992  // not safe because it exceeds the maximum safe integer limit
// console.log(Number.MAX_SAFE_INTEGER + 2); // Output: 9007199254740992  // not safe because it exceeds the maximum safe integer limit

// let bigNumber: bigint = 9007199254740991n; // 'n' at the end indicates a BigInt literal
// console.log(bigNumber); // Output: 9007199254740991n

// let anotherBigNumber: bigint = BigInt(45677); 
// console.log(anotherBigNumber); 

let a : bigint = 100n; // 'n' at the end indicates a BigInt literal
let b : bigint = 200n; // 'n' at the end indicates a BigInt literal

let sum : bigint = a + b;
console.log(sum); // Output: 300n