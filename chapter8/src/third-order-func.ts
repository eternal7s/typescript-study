import {FirstOrderFunc, SecondOrderFunc, ThirdOdrderFunc} from "./function-signature";

export const add3: ThirdOdrderFunc<number, number> =
    (x: number): SecondOrderFunc<number, number> =>
        (y: number): FirstOrderFunc<number, number> =>
            (z: number): number => x + y + z;