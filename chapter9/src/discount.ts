import * as R from 'ramda';

type NumtoNumFunc = (n: number) => number;
const applyDiscount = (minmum: number, discount: number): NumtoNumFunc =>
    R.pipe(
        R.ifElse(
            R.flip(R.gte)(minmum),
            R.flip(R.subtract)(discount),
            R.identity
        ),
        R.tap(amount => console.log(amount))
    );
const clacPrice = applyDiscount(5000, 500);

const discountedPrice = clacPrice(6000);
const notDiscountedPrice = clacPrice(4500);