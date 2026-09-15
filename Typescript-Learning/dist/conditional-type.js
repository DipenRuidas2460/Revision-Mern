"use strict";
// Conditional Types:
const printRes = "Yes";
const newRes = "No";
console.log(`newRes:- ${newRes}, printRes:- ${printRes}`);
const correct1 = true;
const correct2 = false;
console.log(correct1);
console.log(correct2);
const demo1 = "Admin User";
const demo2 = "Employee User";
console.log(demo1);
console.log(demo2);
// infer keyword using function return types :
function getUser() {
    return {
        name: "Dipen",
        age: 30
    };
}
const NewSol = {
    name: "Dipen",
    age: 30
};
console.log(NewSol);
