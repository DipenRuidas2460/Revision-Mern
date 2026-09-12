interface Employees {
    readonly empId: number,
    userName: string,
    salary?: number
}


type Students = {
    readonly studentId: number,
    userName: string,
    class: string
}

const employee1: Employees = {
    empId: 123,
    userName: "Dipen",
    salary: 60000
}

const employee2: Employees = {
    empId: 345,
    userName: "Ananta",
    salary : 90000
}

const student1: Students = {
    studentId: 678,
    userName: "Subrata",
    class: "X"
}

const student2: Students = {
    studentId: 890,
    userName: "Naresh",
    class: "XI"
}

console.log(employee1);
console.log(employee2);
console.log(student1);
console.log(student2);



