// type person = {
//     name: string;
//     age: number;
// }

// type employee = {
//     employeeId: number;
//     department: string;
//     salary : number;
// }

// type staffDetails = person & employee;

// let staff: staffDetails = {
//     name: "John Doe",
//     age: 30,
//     employeeId: 12345,
//     department: "Engineering",
//     salary: 75000
// };

type User = {
    userName: string
}

type Admin = {
    permission: string[]
}

type AdminUser = User & Admin;

let adminUser: AdminUser = {
    userName: "admin123",
    permission: ["read", "write", "delete"]
};

console.log(adminUser); // Output: { userName: "admin123", permission: ["read", "write", "delete"] }


// interface

interface person {
    name: string;
    age: number;
}

interface employee {
    employeeId: number;
    department: string;
    salary : number;
}

type staffDetails = person & employee;

let staff: staffDetails = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering",
    salary: 75000   
}

console.log(staff); // Output: { name: "John Doe", age: 30, employeeId: 12345, department: "Engineering", salary: 75000 }
