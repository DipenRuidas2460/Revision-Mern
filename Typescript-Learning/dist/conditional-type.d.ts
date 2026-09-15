type CheckUser<T> = T extends string ? "Yes" : "No";
type Result1 = CheckUser<string>;
type Result2 = CheckUser<number>;
declare const printRes: Result1;
declare const newRes: Result2;
type IsAdmin<T> = T extends "admin" ? true : false;
type User7 = IsAdmin<"admin">;
type User8 = IsAdmin<"user">;
declare const correct1: User7;
declare const correct2: User8;
interface NewAdmin {
    permission: string[];
}
interface NewEmployee {
    department: string;
}
type Customer<T> = T extends NewAdmin ? "Admin User" : "Employee User";
type Sol1 = Customer<NewAdmin>;
type Sol2 = Customer<NewEmployee>;
declare const demo1: Sol1;
declare const demo2: Sol2;
declare function getUser(): {
    name: string;
    age: number;
};
type GetUserType<T> = T extends (...args: any[]) => infer R ? R : never;
type NewCustomer = GetUserType<typeof getUser>;
declare const NewSol: NewCustomer;
