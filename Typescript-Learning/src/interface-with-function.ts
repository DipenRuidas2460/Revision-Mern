interface Calculator { (a: number, b: number): number }

const addition: Calculator = (x, y) => x + y;

const sub: Calculator = (x, y) => x - y;

const mul: Calculator = (x, y) => x * y;

const divided: Calculator = (x, y) => x / y;

console.log(addition(10, 5));

console.log(sub(10, 5));

console.log(mul(10, 5));

console.log(divided(10, 5));
