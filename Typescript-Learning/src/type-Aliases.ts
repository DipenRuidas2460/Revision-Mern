// Type Aliases in TypeScript

// type UserName = string;
// type UserAge = number;

// let myName: UserName = "David";
// let myAge: UserAge = 35;

// console.log(myName); // Output: "David"
// console.log(myAge); // Output: 35

// type for Object

// type User = {
//     userName: string,
//     age: number
// };

// let user1: User = {
//     userName: "Eve",
//     age: 29
// };

// let user2: User = {
//     userName: "Frank",
//     age: 40
// };

// let user3: User = {
//     userName: "Grace",
//     age: 22
// };

// console.log(user1); // Output: { userName: "Eve", age: 29 }
// console.log(user2); // Output: { userName: "Frank", age: 40 }
// console.log(user3); // Output: { userName: "Grace", age: 22 }

// type for Function

type AdditionFunction = (a: number, b: number) => number;

const add: AdditionFunction = (x, y) => {
    return x + y;
};

console.log(add(5, 10)); // Output: 15

// type for Union Types (allowing multiple types for a variable)

type ID = string | number;

let userId: ID = "user123";
userId = 456;

console.log(userId); // Output: 456

// type for Intersection Types (combining multiple types)

type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
    salary : number;
};

type EmployeeDetails = Person & Employee;

let employee: EmployeeDetails = {
    name: "John Doe",
    age: 30,
    employeeId: 123,
    department: "Engineering",
    salary: 50000
};

console.log(employee);
