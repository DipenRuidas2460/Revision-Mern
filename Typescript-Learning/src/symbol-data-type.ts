// symbol creates unique value

// let sym1: symbol = Symbol();
// let sym2: symbol = Symbol();

// console.log(sym1 === sym2); // Output: false

let id1 : symbol = Symbol("id");
let id2 : symbol = Symbol("id");

console.log(id1 === id2); // Output: false

let user = {
    [id1]: "Dipen",
    [id2]: "Ruidas"
}

console.log(user[id1]); // Output: Dipen

console.log(user[id2].toString()); // Output: Ruidas

// unique object key, or not name conflict, not auto converted.


