import * as R from 'ramda';
import {selectRange} from "./selectRange";

R.pipe(
    R.filter(selectRange(3, 6 + 1)),
    R.tap(n => console.log(n))
)(R.range(1, 10 + 1));