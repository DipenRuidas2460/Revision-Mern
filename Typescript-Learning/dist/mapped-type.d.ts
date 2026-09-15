type User2 = {
    name: string;
    age: number;
};
type OptionalUser = {
    [key in keyof User2]?: User2[key];
};
type ReadOnlyUser = {
    readonly [key in keyof User2]: User2[key];
};
declare const newUser2: OptionalUser;
declare const newUser3: OptionalUser;
declare const newUser4: ReadOnlyUser;
type BooleanUser = {
    [key in keyof User2]: boolean;
};
declare const userStatus: BooleanUser;
