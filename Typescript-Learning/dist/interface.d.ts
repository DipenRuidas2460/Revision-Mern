interface Employees {
    readonly empId: number;
    userName: string;
    salary?: number;
}
type Students = {
    readonly studentId: number;
    userName: string;
    class: string;
};
declare const employee1: Employees;
declare const employee2: Employees;
declare const student1: Students;
declare const student2: Students;
