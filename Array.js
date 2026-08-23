const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// const f = fruits.filter(fruit => fruit.length > 5);
// console.log(f); // Output: ['banana', 'cherry', 'elderberry']

// const d = fruits.push('grape');
//console.log(d); // Output: 6

// console.log(fruits.length); // Output: 6

// fruits.forEach(fruit => {
//     console.log(fruit);
// });

const p = fruits.unshift('fig');
// console.log(p); // Output: 6
// console.log(fruits); // Output: ['fig', 'apple', 'banana', 'cherry', 'date', 'elderberry']

const r = fruits.shift();
// console.log(r); // Output: 'fig'
// console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']

fruits.splice(2, 0, 'kiwi', 'lemon');
// console.log(fruits); // Output: ['apple', 'banana', 'kiwi', 'lemon', 'cherry', 'date', 'elderberry']

const s = fruits.slice(1, 4);
// console.log(s); // Output: ['banana', 'kiwi', 'lemon']
console.log(fruits); // Output: ['apple', 'banana', 'kiwi', 'lemon', 'cherry', 'date', 'elderberry']

console.log(s);
