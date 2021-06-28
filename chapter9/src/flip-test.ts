import * as R from 'ramda';

const flip = cb => a => b => cb(b)(a);

/*
function (cb) {
    return function (a){
        return function(b) {
            return cb(b, a);
        }
    }
}*/

const reverseSubtract = flip(R.subtract);

const newArray = R.pipe(
    R.map(reverseSubtract(10)),
    R.tap(a => console.log(a))
)(R.range(1, 9 + 1));

console.log(R.subtract(10, 5));