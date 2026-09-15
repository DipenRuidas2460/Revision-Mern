// Type Narrow

// Normal Variable

const random = Math.random()

console.log(random);


const val: string | number = random > 0.5 ? "Dipen" : 100;

if (typeof val === "string") {
    console.log(val.toLowerCase());
} else {
    console.log(val);
}

// using function

function printVal(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

printVal("Dipen");
printVal(123);

// Object in Operator

type User1 = {
    name: string,
    email: string
}

type Admin1 = {
    name: string,
    permission: string[]
}

function getInfo(person: Admin1 | User1) {
    if ("permission" in person) {
        console.log("Admin User");
    } else {
        console.log("Normal User");
    }
}

getInfo({
    name: "Dipen",
    permission: ["Create", "Delete"]
})

getInfo({
    name: "Naresh",
    email: "naresh123@gmail.com"
})

// Class InstanceOf

class Dog {
    bark(): void {
        console.log("Dog is Barking!");
    }
}

class Cat {
    meow(): void {
        console.log("Cat is Meowing!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark()
    } else {
        animal.meow()
    }
}

makeSound(new Dog());
makeSound(new Cat())