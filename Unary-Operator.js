const f = false;
console.log(+f);
console.log(-f);

const t = true;
console.log(+t);
console.log(-t);

let a = 5;
let b = 4;

let c = a++ + b;   // not changing the value of a, because postfix increment operator returns the value before incrementing it.

console.log("Postfix Increment:-", a); // 6 -- Postfix increment operator returns the value before incrementing it.

console.log('Result Postfix:-', c);  // 9 , postfix


let d = 6;
let e = 3;
let p = ++d + e;  // changing the value of d, because prefix increment operator returns the value after incrementing it.

console.log("Prefix Increment:-", d); // 7 -- Prefix increment operator returns the value after incrementing it.

console.log('Result Prefix:-', p);  // 10 , prefix