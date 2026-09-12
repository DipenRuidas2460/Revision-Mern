"use strict";
let student;
student = {
    userName: "Dipen",
    age: 30
};
console.log(student.userName);
console.log(student.age);
let products;
products = {
    productName: "Laptop",
    price: 60250,
    address: {
        city: "Kolapur",
        pin: 700045
    }
};
products.address.city = "Haripur";
console.log(products.productName);
console.log(products.address.city);
console.log(products);
