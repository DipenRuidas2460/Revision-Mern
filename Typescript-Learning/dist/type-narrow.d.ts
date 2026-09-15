declare const random: number;
declare const val: string | number;
declare function printVal(value: string | number): void;
type User1 = {
    name: string;
    email: string;
};
type Admin1 = {
    name: string;
    permission: string[];
};
declare function getInfo(person: Admin1 | User1): void;
declare class Dog {
    bark(): void;
}
declare class Cat {
    meow(): void;
}
declare function makeSound(animal: Dog | Cat): void;
