// key one and type one, but uses different names.
// Index Signature using with interface

interface UserRoles {
    [key: string]: string
}

interface Languages {
    [key: string]: string
}

const userRoles: UserRoles = {
    stu: "Student",
    emp: "Employee",
    adm: "Admin",
    ban: "Banker"
}

const languages: Languages = {
    en: "English",
    bn: "Bengali",
    hi: "Hindi",
    ur: "Urdu"
}

interface Scores {
    [index: number]: string
}

const studentScores: Scores = {
    1: "A",
    2: "B",
    3: "C",
    4: "A+"
}


console.log(userRoles);
console.log(languages);
console.log(studentScores);