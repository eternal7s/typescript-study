import * as R from 'ramda';

const addIndex = R.pipe(
    R.addIndex(R.map)(R.add),
    //R.addIndex(R.map)((value: number, index: number) => R.add(value)(index)),
    R.tap(a => console.log(a))
)

//@ts-ignore
const newNumbers = addIndex(R.range(1, 9 + 1));