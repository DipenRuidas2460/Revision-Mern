// // Swallow Copy

// const originals = {
//     name: "Karim",
//     skills: ["JS", "React"] // Nested Array
// };

// // Shallow Copy
// const shallowCopy = { ...originals };

// // Top-level প্রপার্টি পরিবর্তন (মূল অবজেক্টে প্রভাব ফেলবে না)
// shallowCopy.name = "Sumon";

// // Nested প্রপার্টি পরিবর্তন (মূল অবজেক্টেও বদলে যাবে!)
// shallowCopy.skills.push("Node");

// console.log(originals.name);        // "Karim" (পরিবর্তন হয়নি)
// console.log(originals.skills);       // ["JS", "React", "Node"] (পরিবর্তন হয়েছে কারণ এটি একটি nested array)


// // Deep Copy (Traditional Method)

// const original = {
//     name: "Karim",
//     skills: ["JS", "React"] // Nested Array
// };

// // Deep Copy (Modern & Recommended Method)
// const deepCopy = structuredClone(original);

// // Nested প্রপার্টি পরিবর্তন
// deepCopy.skills.push("Python");

// console.log(deepCopy.skills);     // ["JS", "React", "Python"]
// console.log(original.skills);     // ["JS", "React"] (পরিবর্তন হয়নি)


// // Array Concatenation

// const a = [1, 2, 3];
// const b = [56, 78, 90,74,21];

// const c = a.concat(b);
// console.log(c); // [1, 2, 3, 56, 78, 90, 74, 21]

// const d = [...a, ...b];
// console.log(d); // [1, 2, 3, 56, 78, 90, 74, 21]

// // Array Destructuring

// const numbers = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = numbers;

// console.log(first);  // 1
// console.log(second); // 2
// console.log(rest);   // [3, 4, 5]

const r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
r[2] = undefined; // Set the value at index 2 to undefined

// console.log(r); // [1, 2, undefined, 4, 5, 6, 7, 8, 9, 10]

r.splice(2, 3, 0, 0); // Remove the element at index 2

// console.log(r); // [1, 2, 0, 0, 6, 7, 8, 9, 10]

const p = r.slice(0, 9); // Create a new array with elements from index 0 to 8
console.log(p); // [1, 2, 0, 0, 6, 7, 8, 9, 10]

console.log(r); // [1, 2, 0, 0, 6, 7, 8, 9, 10] (original array remains unchanged)