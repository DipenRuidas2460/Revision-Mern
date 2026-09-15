// Conditional Types:

type CheckUser<T> = T extends string ? "Yes" : "No";

type Result1 = CheckUser<string>
type Result2 = CheckUser<number>

const printRes: Result1 = "Yes"

const newRes: Result2 = "No"

console.log(`newRes:- ${newRes}, printRes:- ${printRes}`);

// Real life example :-

type IsAdmin<T> = T extends "admin" ? true : false;

type User7 = IsAdmin<"admin">
type User8 = IsAdmin<"user">

const correct1: User7 = true
const correct2: User8 = false

console.log(correct1);
console.log(correct2);

// Interface conditional types:

interface NewAdmin {
    permission: string[]
}

interface NewEmployee {
    department: string
}

type Customer<T> = T extends NewAdmin ? "Admin User" : "Employee User"

type Sol1 = Customer<NewAdmin>

type Sol2 = Customer<NewEmployee>

const demo1: Sol1 = "Admin User"

const demo2: Sol2 = "Employee User"

console.log(demo1);

console.log(demo2);

// infer keyword using function return types :

function getUser() {
    return {
        name: "Dipen",
        age: 30
    }
}

type GetUserType<T> = T extends (...args: any[]) => infer R ? R : never

type NewCustomer = GetUserType<typeof getUser>

const NewSol : NewCustomer = {
    name:"Dipen",
    age:30
}

console.log(NewSol);
