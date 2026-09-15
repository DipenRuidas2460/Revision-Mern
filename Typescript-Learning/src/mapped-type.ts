// Mapped Type

type User2 = {
    name: string,
    age: number
}

type OptionalUser = {
    [key in keyof User2]?: User2[key]
}

type ReadOnlyUser = {
    readonly [key in keyof User2]: User2[key]
}

// Optional user

const newUser2: OptionalUser = {
    name: "Dipen"
}

const newUser3: OptionalUser = {
    age: 30
}

// Read only user

const newUser4: ReadOnlyUser = {
    name: "Ramesh",
    age: 35
}

// newUser4.name = "Rohit"; // not change read only value  

type BooleanUser = {
    [key in keyof User2]: boolean
}

const userStatus: BooleanUser = {
    name: true,
    age: false
}

console.log(userStatus.age);
