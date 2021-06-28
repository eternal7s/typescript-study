export type FirstOrderFunc<T, R> = (T) => R;
export type SecondOrderFunc<T, R> = (T) => FirstOrderFunc<T, R>;
export type  ThirdOdrderFunc<T, R> = (T) => SecondOrderFunc<T, R>;