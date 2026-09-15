type Emp = {
    userName: string;
    age: number;
};
declare const emp1: Emp;
declare const emp2: Emp;
type newID = string | number;
type Adm = Emp & {
    role: string;
};
interface Pro {
    readonly proId: number;
    title: string;
    price: number;
}
interface Permission extends Pro {
    role: string;
}
