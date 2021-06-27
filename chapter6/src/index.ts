import { test } from './createRangeIterable-test';
import { RangeIterable } from './RangeIterable';
import {StringIterable} from "./StringIterable";
import {generator} from "./generator";
import {countInterval} from "./setInterval";

console.log('test1');
test();


console.log('test2');
const iterator = new RangeIterable(1, 3 + 1);

for (const value of iterator) {
    console.log(value);
}

console.log('test3');
for(let value of new StringIterable(['hello', 'world', '!'])) console.log(value);

console.log('test4');
for(let value of generator())
    console.log(value);

console.log('test5');
countInterval();