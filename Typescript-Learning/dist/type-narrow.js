"use strict";
// Type Narrow
// Normal Variable
const random = Math.random();
console.log(random);
const val = random > 0.5 ? "Dipen" : 100;
if (typeof val === "string") {
    console.log(val.toLowerCase());
}
else {
    console.log(val);
}
// using function
function printVal(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printVal("Dipen");
printVal(123);
function getInfo(person) {
    if ("permission" in person) {
        console.log("Admin User");
    }
    else {
        console.log("Normal User");
    }
}
getInfo({
    name: "Dipen",
    permission: ["Create", "Delete"]
});
getInfo({
    name: "Naresh",
    email: "naresh123@gmail.com"
});
// Class InstanceOf
class Dog {
    bark() {
        console.log("Dog is Barking!");
    }
}
class Cat {
    meow() {
        console.log("Cat is Meowing!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
