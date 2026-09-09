type AdditionFunction = (a: number, b: number) => number;
declare const add: AdditionFunction;
type ID = string | number;
declare let userId: ID;
type Person = {
    name: string;
    age: number;
};
type Employee = {
    employeeId: number;
    department: string;
    salary: number;
};
type EmployeeDetails = Person & Employee;
declare let employee: EmployeeDetails;
