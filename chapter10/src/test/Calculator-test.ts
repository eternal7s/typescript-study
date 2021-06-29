import {Calculator} from '../classes/calculator';

const value = (new Calculator(1))
                .add(2)
                .add(3)
                .multiply(4)
                .value()
console.log(value);