let a = 30;
let b = 20;
let c = 0;
let d = 0;

console.log(b || a);  // 20  -  first value is true, so it will return the first value.
console.log(c || d);  // 0 -  both values are false, so it will return the last value.
console.log(c || b);  // 20 -  first value is false, so it will return the second value that is true.

let p = !2;
console.log(p);  // false -  2 is a truthy value, so it will return false.