type CallSignature = (x: number, y: number) => number;
declare let newMultiply: CallSignature;
interface CallSignatureInterface {
    (x: number, y: number): number;
}
declare let newAdd: CallSignatureInterface;
interface LoginFunction {
    (username: string, password: string): boolean;
}
declare let login: LoginFunction;
