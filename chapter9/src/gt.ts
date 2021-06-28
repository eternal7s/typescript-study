import * as R from 'ramda';

R.pipe(
    R.filter(R.gt(6 + 1)),
    R.tap(n => console.log(n))
)(R.range(1, 10 + 1));