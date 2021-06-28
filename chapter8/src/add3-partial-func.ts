import {FirstOrderFunc, SecondOrderFunc} from "./function-signature";
import {add3} from "./third-order-func";

const add2: SecondOrderFunc<number, number> = add3(1);
const add1: FirstOrderFunc<number, number> = add2(1);
console.log(
    add1(3),
    add2(1)(2),
    add3(1)(2)(3)
);