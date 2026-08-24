// const product = {
//     valueOf: function() {
//         return 100;
//     }
// }

// console.log( product);   // Object { valueOf: [Function: valueOf] }
// console.log(+ product); 
// console.log(-product);

// Creating a object using to array

// const carCompanies = ["Toyota", "Honda", "Ford", "BMW"];

// const carModels = ["Camry", "Civic", "Focus", "X3"];

// const carDetails = {};

// carCompanies.forEach((company, index) => {
//     carDetails[company] = carModels[index];
// });

// console.log(carDetails);  // { Toyota: 'Camry', Honda: 'Civic', Ford: 'Focus', BMW: 'X3' }


// Freezing an object

const frozenObject = Object.freeze({ name: "John", age: 30 });
frozenObject.age = 35; // This will not change the age property
console.log(frozenObject.age); // Output: 30

// Sealing an object

const sealedObject = Object.seal({ name: "Jane", age: 25 });
sealedObject.age = 28; // This will change the age property
console.log(sealedObject.age); // Output: 28
 
sealedObject.gender = "female"; // This will not add a new property
console.log(sealedObject.gender); // Output: undefined