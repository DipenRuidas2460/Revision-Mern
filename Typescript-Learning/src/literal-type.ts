// Liternal Types:

// String

type UserRole = "Admin" | "User" | "Guest";

const role: UserRole = "User"

console.log(role);


// Number

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

const dice : DiceValue = 5;

console.log(dice);

// Boolean

type IsVeryFied = true

const veryFi : IsVeryFied = true;

console.log(veryFi);

// Function

function setTheme(theme:"Light" | "Dark") {
    console.log(theme);
}

setTheme("Light")
setTheme("Dark")