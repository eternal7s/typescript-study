const isAllTrue = (value: boolean[]) => value.every((value => value == true));

console.log(
    isAllTrue([true, true, true]),
    isAllTrue([false, true, true])
);