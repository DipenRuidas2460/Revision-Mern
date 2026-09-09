type User = {
    userName: string;
};
type Admin = {
    permission: string[];
};
type AdminUser = User & Admin;
declare let adminUser: AdminUser;
interface person {
    name: string;
    age: number;
}
interface employee {
    employeeId: number;
    department: string;
    salary: number;
}
type staffDetails = person & employee;
declare let staff: staffDetails;
