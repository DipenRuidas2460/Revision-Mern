type Emp = {
    userName: string,
    age: number
}


const emp1: Emp = {
    userName: "Devanshi",
    age: 24
}

const emp2: Emp = {
    userName: "Priya",
    age: 23
}

type newID = string | number;

// intersection types

type Adm = Emp & {
    role: string
}

// function and object stucture using interface (oops coding)

interface Pro {
    readonly proId: number,
    title: string,
    price: number
}

interface Permission extends Pro{
    role: string
}

