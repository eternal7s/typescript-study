import * as R from 'ramda';

const callAndAppend = R.pipe(
    R.ap([R.multiply(2), R.add(10)]),
    R.tap(a => console.log(a))
)

const input = R.range(1)(4);
const result = callAndAppend(input);