type UserRole = "Admin" | "User" | "Guest";
declare const role: UserRole;
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;
declare const dice: DiceValue;
type IsVeryFied = true;
declare const veryFi: IsVeryFied;
declare function setTheme(theme: "Light" | "Dark"): void;
