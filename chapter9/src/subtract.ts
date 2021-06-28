import * as R from 'ramda';

const reversSubtract = R.flip(R.subtract);

const newArray = R.pipe(
    R.map(reversSubtract(10)),
    R.tap(a => console.log(a))
)(R.range(1, 9 + 1));