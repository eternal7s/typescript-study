# π€ Chapter 5: λ°°μ΄κ³Ό νν

<details><summary>Table of Contents</summary>

- π¦ λ°°μ΄ μ΄ν΄νκΈ° [:link:](#-λ°°μ΄-μ΄ν΄νκΈ°)
  - π [] λ¨μΆ κ΅¬λ¬Έ [:link:](#--λ¨μΆ-κ΅¬λ¬Έ)
  - π μλ°μ€ν¬λ¦½νΈμμ λ°°μ΄μ κ°μ²΄λ€ [:link:](#-μλ°μ€ν¬λ¦½νΈμμ-λ°°μ΄μ-κ°μ²΄λ€)
  - π λ°°μ΄μ νμ [:link:](#-λ°°μ΄μ-νμ)
  - π λ¬Έμμ΄κ³Ό λ°°μ΄ κ° λ³ν [:link:](#-λ¬Έμμ΄κ³Ό-λ°°μ΄-κ°-λ³ν)
  - π μΈλ±μ€ μ°μ°μ [:link:](#-μΈλ±μ€-μ°μ°μ)
  - π λ°°μ΄μ λΉκ΅¬μ‘°ν ν λΉ [:link:](#-λ°°μ΄μ-λΉκ΅¬μ‘°ν-ν λΉ)
  - π for...in λ¬Έ [:link:](#-forin-λ¬Έ)
  - π for...of λ¬Έ [:link:](#-forof-λ¬Έ)
  - π μ λ€λ¦­ λ°©μ νμ [:link:](#-μ λ€λ¦­-λ°©μ-νμ)
  - π μ λ€λ¦­ ν¨μμ νμ μΆλ‘  [:link:](#-μ λ€λ¦­-ν¨μμ-νμ-μΆλ‘ )
  - π μ λ€λ¦­ ν¨μμ ν¨μ μκ·Έλμ² [:link:](#-μ λ€λ¦­-ν¨μμ-ν¨μ-μκ·Έλμ²)
  - π μ κ° μ°μ°μ [:link:](#-μ κ°-μ°μ°μ)
  - π range ν¨μ κ΅¬ν [:link:](#-range-ν¨μ-κ΅¬ν)
- π¦ μ μΈν νλ‘κ·Έλλ°κ³Ό λ°°μ΄ [:link:](#-μ μΈν-νλ‘κ·Έλλ°κ³Ό-λ°°μ΄)
  - π λͺλ Ήν νλ‘κ·Έλλ°μ΄λ? [:link:](#-λͺλ Ήν-νλ‘κ·Έλλ°μ΄λ)
  - π 1λΆν° 100κΉμ§ λνκΈ° λ¬Έμ  νμ΄ [:link:](#-1λΆν°-100κΉμ§-λνκΈ°-λ¬Έμ -νμ΄)
  - π fold: λ°°μ΄ λ°μ΄ν° μ κΈ° [:link:](#-fold-λ°°μ΄-λ°μ΄ν°-μ κΈ°)
  - π 1λΆν° 100κΉμ§ νμμ ν© κ΅¬νκΈ° [:link:](#-1λΆν°-100κΉμ§-νμμ-ν©-κ΅¬νκΈ°)
  - π filter: μ‘°κ±΄μ λ§λ μμ΄νλ§ μΆλ €λ΄κΈ° [:link:](#-filter-μ‘°κ±΄μ-λ§λ-μμ΄νλ§-μΆλ €λ΄κΈ°)
  - π 1^2^ + 2^2^ + ... + 100^2^ [:link:](#-12--22----1002)
  - π map: λ°°μ΄ λ°μ΄ν° κ°κ³΅νκΈ° [:link:](#-map-λ°°μ΄-λ°μ΄ν°-κ°κ³΅νκΈ°)
- π¦ λ°°μ΄μ map, reduce, filter λ©μλ [:link:](#-λ°°μ΄μ-map-reduce-filter-λ©μλ)
  - π filter λ©μλ [:link:](#-filter-λ©μλ)
  - π map λ©μλ [:link:](#-map-λ©μλ)
  - π reduce λ©μλ [:link:](#-reduce-λ©μλ)
- π¦ μμ ν¨μμ λ°°μ΄ [:link:](#-μμ-ν¨μμ-λ°°μ΄)
  - π μμ ν¨μλ? [:link:](#-μμ-ν¨μλ)
  - π νμ μμ μ readonly [:link:](#-νμ-μμ μ-readonly)
  - π λΆλ³κ³Ό κ°λ³ [:link:](#-λΆλ³κ³Ό-κ°λ³)
  - π κΉμ λ³΅μ¬μ μμ λ³΅μ¬ [:link:](#-κΉμ-λ³΅μ¬μ-μμ-λ³΅μ¬)
  - π μ κ° μ°μ°μμ κΉμ λ³΅μ¬ [:link:](#-μ κ°-μ°μ°μμ-κΉμ-λ³΅μ¬)
  - π λ°°μ΄μ sort λ©μλλ₯Ό μμ ν¨μλ‘ κ΅¬ννκΈ° [:link:](#-λ°°μ΄μ-sort-λ©μλλ₯Ό-μμ-ν¨μλ‘-κ΅¬ννκΈ°)
  - π λ°°μ΄μ filter λ©μλμ μμν μ­μ  [:link:](#-λ°°μ΄μ-filter-λ©μλμ-μμν-μ­μ )
  - π κ°λ³ μΈμ ν¨μμ μμ ν¨μ [:link:](#-κ°λ³-μΈμ-ν¨μμ-μμ-ν¨μ)
- π¦ νν μ΄ν΄νκΈ° [:link:](#-νν-μ΄ν΄νκΈ°)
  - π ννμμ νμ λ³μΉ­ μ¬μ©νκΈ° [:link:](#-ννμμ-νμ-λ³μΉ­-μ¬μ©νκΈ°)
  - π ννμ μ μ©νλ λΉκ΅¬μ‘°ν ν λΉ [:link:](#-ννμ-μ μ©νλ-λΉκ΅¬μ‘°ν-ν λΉ)

</details>

## π¦ λ°°μ΄ μ΄ν΄νκΈ°
- μλ°μ€ν¬λ¦½νΈμμ λ°°μ΄μ `Array` ν΄λμ€μ μΈμ€ν΄μ€μ΄λ€.

```ts
let array = new Array;
array.push(1);
array.push(2);
array.push(3);
console.log(array); // [1, 2, 3]
```
- λ°°μ΄μ λ΄κΈ΄ κ°κ° κ°μ μμ΄ν λλ μμλΌκ³  νλ€.

### π [] λ¨μΆ κ΅¬λ¬Έ
- μλ°μ€ν¬λ¦½νΈμμλ `[]`λΌλ λ¨μΆ κ΅¬λ¬Έμ μ κ³΅νλ€.

```ts
let numbers = [1, 2, 3];
let strings = ['Hello', 'World'];
console.log(numbers, strings); // [1, 2, 3] ['Hello', 'World']
```

### π μλ°μ€ν¬λ¦½νΈμμ λ°°μ΄μ κ°μ²΄λ€
- μλ°μ€ν¬λ¦½νΈμμ λ°°μ΄μ κ°μ²΄μ΄λ€.
- λ°°μ΄μ `Array` ν΄λμ€μ μΈμ€ν΄μ€μΈλ°, ν΄λμ€μ μΈμ€ν΄μ€λ κ°μ²΄μ΄κΈ° λλ¬Έμ΄λ€.
- `Array.isArray`λ λ§€κ°λ³μλ‘ μ λ¬λ°μ μ¬λ²μ΄ λ°°μ΄μΈμ§ κ°μ²΄μΈμ§ μλ €μ€λ€.

```ts
let a = [1, 2, 3];
let o = { name: 'Jack', age: 32 };
console.log(Array.isArray(a), Array.isArray(o)); // true false
```

### π λ°°μ΄μ νμ
- νμμ€ν¬λ¦½νΈμμ λ°°μ΄μ νμμ `μμ΄ν νμ[]`μ΄λ€. μλ₯Ό λ€μ΄, λ°°μ΄μ μμ΄νμ΄ `number` νμμ΄λ©΄ λ°°μ΄μ νμμ `number[]`μ΄κ³ , μμ΄νμ΄ `string` νμμ΄λ©΄ `string[]`μ΄λ€.

```ts
let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = { name: string, age?: number };
let personArray: IPerson[] = [
  { name: 'Jack' },
  { name: 'Jane', age: 32 },
];

// [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
```

### π λ¬Έμμ΄κ³Ό λ°°μ΄ κ° λ³ν
- νμμ€ν¬λ¦½νΈμμλ λ¬Έμ νμμ΄ μκ³  λ¬Έμμ΄μ λ΄μ© λν λ³κ²½ν  μ μλ€. μ΄λ¬ν νΉμ§ λλ¬Έμ λ¬Έμμ΄μ κ°κ³΅νλ €λ©΄ **λ¨Όμ  λ¬Έμμ΄μ λ°°μ΄λ‘ μ ν**ν΄μΌ νλ€.
- λ³΄ν΅ λ¬Έμμ΄μ λ°°μ΄λ‘ μ νν  λλ `String` ν΄λμ€μ `split` λ©μλλ₯Ό μ¬μ©νλ€.

```ts
const split = (str: string, delim: string = ''): string[] => str.split(delim);

console.log(
  split('hello'), // [ 'h', 'e', 'l', 'l', 'o' ]
  split('h_e_l_l_o', '_'), // [ 'h', 'e', 'l', 'l', 'o' ]
);
```

- `string[]` νμμ λ°°μ΄μ λ€μ `string` νμμΌλ‘ λ³ννλ €λ©΄ `Array` ν΄λμ€μ `join` λ©μλλ₯Ό μ¬μ©νλ€.
- λ€μμ `join` λ©μλλ₯Ό μ΄μ©νλ μ¬μ©μ μ μ ν¨μ `join`μ μμ±ν μμ΄λ€.

```ts
const join = (strArray: string[], delim: string=''): string =>
  strArray.join(delim);

console.log(
  join(['h', 'e', 'l', 'l', 'o']), // hello
  join(['h', 'e', 'l', 'l', 'o'], '_'), // h_e_l_l_o
);
```

### π μΈλ±μ€ μ°μ°μ
- λ°°μ΄μ΄ λ΄κ³  μλ μμ΄ν μ€ νΉμ  μμΉμ μλ μμ΄νμ μ»κ³ μ ν  λλ μΈλ±μ€ `μ°μ°μ[μΈλ±μ€]`λ₯Ό μ¬μ©νλ€.

```ts
const numbers: number[] = [1, 2, 3, 4, 5];

for(let index = 0; index < numbers.length; index++) {
  const item: number = numbers[index];
  console.log(item); // 1 2 3 4 5
}
```

### π λ°°μ΄μ λΉκ΅¬μ‘°ν ν λΉ
- λ°°μ΄μ λΉκ΅¬μ‘°ν ν λΉλ¬Έμμλ κ°μ²΄μ λ¬λ¦¬ `[]` κΈ°νΈλ₯Ό μ¬μ©νλ€.

```ts
let array: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array;

console.log(first, second, third, rest); // 1 2 3 [4, 5]
```

### π for...in λ¬Έ
- `for...in` λ¬Έμ κ°μ²΄λ₯Ό λμμΌλ‘ μ¬μ©νμ§λ§ λ°°μ΄λ κ°μ²΄μ΄λ―λ‘ λ°°μ΄μμ μ¬μ©ν  μ μλ€.

```ts
let names = ['Jack', 'Jane', 'Steve'];

for (let index in names) {
  const name = names[index];
  console.log(`[${index}]: ${name}`); // [0]: Jack [1]: Jane [2]: Steve
}
```

- λ§μ½ `for...in` λ¬Έμ κ°μ²΄λ₯Ό μ¬μ©ν  λλ κ°μ²΄κ° κ°μ§ μμ±μ λμμΌλ‘ μννλ€.

```ts
let jack = { name: 'Jack', age: 32 };
for(let property in jack) {
  console.log(`${property}: ${jack[property]}`); // name: 'Jack' age: 32
}
```

### π for...of λ¬Έ
- `for...in` λ¬Έμ λ°°μ΄μ μΈλ±μ€κ°μ λμμΌλ‘ μννμ§λ§, `for...of` λ¬Έμ λ°°μ΄μ μμ΄νκ°μ λμμΌλ‘ μννλ€.

```ts
for(let name of ['Jack', 'Jane', 'Steve'])
  console.log(name); // Jack Jane Steve
```

### π μ λ€λ¦­ λ°©μ νμ
- λ°°μ΄μ λ€λ£¨λ ν¨μλ₯Ό μμ±ν  λλ `number[]`μ κ°μ΄ νμμ΄ κ³ μ λ ν¨μλ₯Ό λ§λ€κΈ°λ³΄λ€λ `T[]` ννλ‘ λ°°μ΄μ μμ΄ν νμμ νκΊΌλ²μ νννλ κ²μ΄ νΈλ¦¬νλ€.
- νμμ `T`μ κ°μ μΌμ’μ λ³μλ‘ μ·¨κΈνλ κ²μ **μ λ€λ¦­(generics) νμ**μ΄λΌκ³  νλ€.

```ts
const arrayLength = (array: T[]): number => array.length;
```
- κ·Έλ°λ° μ΄λ κ² νλ©΄ μ»΄νμΌλ¬κ° `T`μ μλ―Έλ₯Ό μ μ μμ΄μΌ νλ€.
- μ¦, `T`κ° νμ λ³μλΌκ³  μλ €μ€μΌ νλ€.

```ts
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;
```

- μ λ€λ¦­ ν¨μλ‘ κ΅¬ννμΌλ―λ‘ λ€μν λ°°μ΄ νμμ λͺ¨λ μ μμ μΌλ‘ λμνλ κ²μ λ³Ό μ μλ€.

```ts
import { arrayLength, isEmpty } from "./arrayLength";

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

type IPerson = {
  name: string,
  age?: number,
};

let personArray: IPerson[] = [
  { name: 'Jack'},
  { name: 'Jane', age: 32 },
];

console.log(
  arrayLength(numArray), // 3 
  arrayLength(strArray), // 2 
  arrayLength(personArray), // 2 
  isEmpty([]), // true
  isEmpty([1]), // false
);
```

### π μ λ€λ¦­ ν¨μμ νμ μΆλ‘ 
- λ€μ μ½λμ 1νμ `identity` ν¨μλ μ λ€λ¦­ ννλ‘ κ΅¬νλμ΄ μλ€.
- μ λ€λ¦­ ννλ‘ κ΅¬νλ ν¨μλ μμΉμ μΌλ‘ 3νμ²λΌ νμ λ³μλ₯Ό λ€μκ³Ό κ°μ ννλ‘ λͺμν΄ μ£Όμ΄μΌ νλ€.

```ts
const identity = <T>(n: T): T => n;

console.log(
  identity<boolean>(true), // true
  identity(true), // true
);
```

- νμ§λ§ μ΄λ° μ½λλ λ²κ±°λ‘μμ νμμ€ν¬λ¦½νΈλ 4νμ²λΌ νμ λ³μ λΆλΆμ μλ΅ν  μ μκ² νλ€.

```ts
ν¨μμ΄λ¦<νμλ³μ>(λ§€κ°λ³μ)
```

- νμμ€ν¬λ¦½νΈλ **νμ λ³μκ° μλ΅λ μ λ€λ¦­ ν¨μλ₯Ό λ§λλ©΄ νμ μΆλ‘ μ ν΅ν΄ μλ΅λ νμμ μ°ΎμλΈλ€.**

### π μ λ€λ¦­ ν¨μμ ν¨μ μκ·Έλμ²
- νμμ€ν¬λ¦½νΈλ μ΄λ€ κ²½μ° ν¨μ μκ·Έλμ²μ λ§€κ°λ³μ λΆλΆμ λ³μ μ΄λ¦μ κΈ°μνλΌκ³  μκ΅¬νλ€.
- λ€μ νλ©΄μμ `normal` ν¨μλ `cb`λΌλ μ΄λ¦μ λ§€κ°λ³μμ ν¨μ μκ·Έλμ²λ₯Ό μ¬μ©νλ€. κ·Έλ°λ° `normal`κ³Ό λ¬λ¦¬ `error`λ μ€λ₯κ° λ°μνλ€.

```ts
const normal = (cb: (number) => number): void => {};
// error: number μλ³μκ° μ€λ³΅λμμ΅λλ€.
const error = (cb: (number, number?) => number): void => {}; 
const fixed = (cb: (a:number, number?) => number): void => {};
```

- μ΄λ° μ€λ₯κ° λ°μνλ©΄ 3νμ `fixed` μ μΈλ¬Έμ²λΌ **νμμ€ν¬λ¦½νΈκ° ν΄μνμ§ λͺ»νλ λΆλΆμ λ³μλ₯Ό μ½μνκ³  μ΄ λ³μμ νμμ λͺμν΄ ν΄κ²°νλ€.**
- μ λ€λ¦­ νμμ ν¨μμμλ κ°μ λ¬Έμ κ° λ°μνλλ°, ν΄κ²° λ°©λ²μ μμ `fixed`μμμ κ°λ€.

```ts
const f = <T>(cb: (arg: T, i?: number) => number): void => {};
```

### π μ κ° μ°μ°μ
- μ κ° μ°μ°μλ λ°°μ΄μμλ μ μ©ν  μ μλ€.

```ts
let array1: number[] = [1];
let array2: number[] = [2, 3];
let mergedArray: number[] = [...array1, ...array2, 4];
console.log(mergedArray); // [1, 2, 3, 4]
```

### π range ν¨μ κ΅¬ν
- ramdaμ μΈλΆ ν¨ν€μ§κ° μ κ³΅νλ `R.range`λ ν¨μλ₯Ό μ¬μ©ν΄ λ΄€μλλ°, λ°°μ΄μ μ κ° μ°μ°μλ₯Ό μ μ©νλ©΄ `R.range`μ κ°μ ν¨μλ₯Ό μ½κ² λ§λ€ μ μλ€.
- λ€μ `range` ν¨μλ μ¬κ· ν¨μ μ€νμΌλ‘ λμνλ©°, `R.range`μ²λΌ `from`μμ `to`κΉμ§ μλ‘ κ΅¬μ±λ λ°°μ΄μ μμ±ν΄ μ€λ€.

```ts
const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)]: [];

let numbers: number[] = range(1, 10);
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

> [πμλ‘κ°κΈ°](#-Chapter-5-λ°°μ΄κ³Ό-νν)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)

## π¦ μ μΈν νλ‘κ·Έλλ°κ³Ό λ°°μ΄

### π λͺλ Ήν νλ‘κ·Έλλ°μ΄λ?
- νλ‘κ·Έλ¨μ κΈ°λ³Έ ννλ μλ ₯ λ°μ΄ν°λ₯Ό μ»κ³  κ°κ³΅ν λ€μ, κ²°κ³Όλ₯Ό μΆλ ₯νλ ννλ‘ κ΅¬μ±λλ€.

> 1. μλ ₯ λ°μ΄ν° μ»κΈ°
> 2. μλ ₯ λ°μ΄ν° κ°κ³΅ν΄ μΆλ ₯ λ°μ΄ν° μμ±
> 3. μΆλ ₯ λ°μ΄ν° μΆλ ₯

- λ°λ©΄μ μ μΈν νλ‘κ·Έλλ°μ μμ€ν μμμ ν¨μ¨μ μΈ μ΄μ©λ³΄λ€λ μΌκ΄λ λ¬Έμ  ν΄κ²° κ΅¬μ‘°μ λ μ§μ€νλ€. μ μΈν νλ‘κ·Έλλ°μ λͺλ Ήν νλ‘κ·Έλλ°μ²λΌ `for`λ¬Έμ μ¬μ©νμ§ μκ³  λͺ¨λ λ°μ΄ν°λ₯Ό λ°°μ΄μ λ΄κ³  κ·Έ λ¬Έμ κ° ν΄κ²°λ  λκΉμ§ λμμμ΄ λ λ€λ₯Έ ννμ λ°°μ΄λ‘ κ°κ³΅νλ λ°©μμΌλ‘ κ΅¬ννλ€.

> 1. λ¬Έμ λ₯Ό νΈλ λ° νμν λͺ¨λ  λ°μ΄ν° λ°°μ΄μ μ μ₯
> 2. μλ ₯ λ°μ΄ν° λ°°μ΄μ κ°κ³΅ν΄ μΆλ ₯ λ°μ΄ν° λ°°μ΄ μμ±
> 3. μΆλ ₯ λ°μ΄ν° λ°°μ΄μ λ΄κΈ΄ μμ΄ν μΆλ ₯


### π 1λΆν° 100κΉμ§ λνκΈ° λ¬Έμ  νμ΄
- μλ κ΅¬μ‘°λ λͺλ Ήν νλ‘κ·Έλλ° λ°©μμ΄λ€.

```ts
let sum = 0;
for(let val = 1; val <= 100;)
  sum += val++;
console.log(sum); // 5050
```

- λ€μ μ½λλ μ μΈνμΌλ‘ κ΅¬νν κ²μ΄λ€.
- λͺλ Ήμ΄ μ½λλ λ°μ΄ν°μ κ°κ³΅μ΄ `for` λ¬Έ μμμ μ΄λ£¨μ΄μ‘μ§λ§, **μ μΈνμ λ°μ΄ν° μμ±κ³Ό κ°κ³΅ κ³Όμ μ λΆλ¦¬νλ€.**

```ts
import { range } from "./range";

let numbers: number[] = range(1, 100 + 1);
console.log(numbers); // [1, 2, ..., 100]
```

### π fold: λ°°μ΄ λ°μ΄ν° μ κΈ°
- ν΄λλ `[1, 2, 3, ...]` ννμ λ°°μ΄ λ°μ΄ν°λ₯Ό κ°κ³΅ν΄ `5050`κ³Ό κ°μ νλμ κ°μ μμ±νλ €κ³  ν  λ μ¬μ©νλ€.
- ν΄λ ν¨μλ `T[]` νμ λ°°μ΄μ κ°κ³΅ν΄ `T` νμμ κ²°κ³Όλ₯Ό λ§λ€μ΄ μ€λ€.

```ts
export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initValue: T) => {
  let result: T = initValue;

  for (let i = 0; i < array.length; ++i) {
    const value = array[i];
    result = callback(result, value);
  }
  
  return result;
}
```

- λ€μμ `fold` ν¨μλ₯Ό μ¬μ©ν΄ μ μΈν νλ‘κ·Έλλ° λ°©μμΌλ‘ 1λΆν° 100κΉμ§ λνλ μ½λλ₯Ό κ΅¬νν κ²μ΄λ€.

```ts
import { range } from "./range";
import { fold } from './fold';

// μλ ₯ λ°μ΄ν° μμ±
let numbers: number[] = range(1, 100 + 1);

// μλ ₯ λ°μ΄ν° κ°κ³΅
let result = fold(numbers, (result, value) => result + value, 0);
console.log(result); // 5050
```

- λͺλ Ήν λ°©μμ μμ€ν μμμ ν¨μ¨μ μ΅μ°μ μΌλ‘ μκ°νμ§λ§, μ μΈν λ°©μμ ν΄λμ²λΌ λ²μ©μΌλ‘ κ΅¬νλ ν¨μλ₯Ό μ¬μ¬μ©νλ©΄μ λ¬Έμ λ₯Ό ν΄κ²°νλ€.

### π 1λΆν° 100κΉμ§ νμμ ν© κ΅¬νκΈ°
- λ€μμ λͺλ Ήν λ°©μμΌλ‘ κ΅¬νν μ½λμ΄λ€.

```ts
let oddSum = 0;
for (let val = 1; val <= 100; val += 2) {
  oddSum += val;
}

console.log(oddSum); // 2500
```

### π filter: μ‘°κ±΄μ λ§λ μμ΄νλ§ μΆλ €λ΄κΈ°
- ν¨μν νλ‘κ·Έλλ°μμ νν λ³΄λ `filter`λΌλ μ΄λ¦μ ν¨μλ μλ ₯ λ°°μ΄μ κ°κ³΅ν΄ μ‘°κ±΄μ λ§λ κ°λ§ μΆλ €λ΄λ κΈ°λ₯μ νλ€.
- `filter` ν¨μλ₯Ό κ΅¬νν μμ΄λ€.

```ts
export const filter = <T>(array: T[], callback: (value: T, index?: number) => boolean): T[] => {
  let result: T[] = [];

  for (let index: number = 0; index < array.length; ++index) {
    const value = array[index];
    
    if(callback(value, index)) {
      result = [...result, value];
    }

    return result;
  }
}
```

- `filter`λ₯Ό μ¬μ©ν΄ κ΅¬ννλ€.

```ts
import { range } from "./range";
import { fold } from './fold';
import { filter } from './filter';

let numbers: number[] = range(1, 100 + 1);

const isOdd = (n: number): boolean => n % 2 !== 0;
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0);

console.log(result); // 2500
```

### π 1<sup>2</sup> + 2<sup>2</sup> + ... + 100<sup>2</sup>
- λͺλ Ήν λ°©μμΌλ‘ κ΅¬νν κ²μ΄λ€.

```ts
let squareSum = 0;
for (let val = 1; val <= 100; ++val ) {
  squareSum += val * val;
}
console.log(squareSum);
```
- μ μΈν λ°©μμΌλ‘ μλ ₯ λ°μ΄ν°λ₯Ό μ΄μ κ°μ΄ κ΅¬ννλ €λ©΄ `map`μ΄λΌλ ν¨μκ° νμνλ€.

### π map: λ°°μ΄ λ°μ΄ν° κ°κ³΅νκΈ°
- λ³μ `x`μ `y`μ νμκΉμ§ μκ°νλ©΄ `map`μ `x: T -> y: Q` μ²λΌ μλ ₯κ³Ό μΆλ ₯μ λ³μμ νμμ΄ μλ‘ λ€λ₯Ό μ μμμ κ³ λ €ν΄μΌ νλ€.

```ts
export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
  let result: Q[] = [];

  for(let index = 0; index < array.length; ++index) {
    const value = array[index];
    result = [...result, callback(value, index)];
  }
  
  return result;
}
```

- μ΄μ  `map` ν¨μλ₯Ό μ΄μ©νλ©΄ μ μΈν λ°©μμ μ½λλ‘ μμ±ν  μ μλ€.

```ts
import { range } from "./range";
import { fold } from './fold';
import { map } from './map';

let numbers: number[] = range(1, 100 + 1);
let result = fold(
  map(numbers, value => value * value),
  (result, value) => result + value, 
  0
)

console.log(result); // 338350
```

> [πμλ‘κ°κΈ°](#-Chapter-5-λ°°μ΄κ³Ό-νν)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)

## π¦ λ°°μ΄μ map, reduce, filter λ©μλ

### π filter λ©μλ
- λ°°μ΄μ νμμ΄ `T[]`μΌ λ λ°°μ΄μ `filter` λ©μλλ λ€μκ³Ό κ°μ ννλ‘ μ€κ³λμλ€.

```ts
filter(callback: (value: T, index?: number): boolean): T[]
```

- λ€μ μ½λλ `filter` λ©μλλ₯Ό μ¬μ©ν΄ κ΅¬νν μμ΄λ€.

```ts
import { range } from "./range";

const array: number[] = range(1, 10 + 1);

let odds: number[] = array.filter((value) => value % 2 !== 0);
let evens: number[] = array.filter((value) => value % 2 === 0);

console.log(odds, evens); // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]
```

### π map λ©μλ
- λ°°μ΄μ νμμ΄ `T[]`μΌ λ λ°°μ΄μ `map` λ©μλλ λ€μκ³Ό κ°μ ννλ‘ μ€κ³λμμΌλ©°, `filter`μ λ¬λ¦¬ `map` λ©μλλ μλ ₯ νμκ³Ό λ€λ₯Έ νμμ λ°°μ΄μ λ§λ€ μ μλ€.

```ts
map(callback: (value: T, index? number): Q): Q[]
```
- λ€μ μ½λλ `map` λ©μλλ₯Ό μ¬μ©ν΄ κ΅¬νν μλ‘ `number[]` νμ λ°°μ΄μ `string[]` νμ λ°°μ΄λ‘ κ°κ³΅νλ μμ΄λ€.

```ts
import { range } from "./range";

let square: string[] = range(1, 5 + 1)
  .map((val, index) => `[${index}]: ${val}`);

console.log(square); // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]
```

### π reduce λ©μλ
- κ΅¬νν `fold` ν¨μλ νμμ€ν¬λ¦½νΈ λ°°μ΄μ `reduce` λ©μλλ‘ λμ²΄ν  μ μλ€.
- λ°°μ΄μ νμμ΄ `T[]`μΌ λ λ°°μ΄μ `reduce` λ©μλλ λ€μκ³Ό κ°μ ννλ‘ μ€κ³λμλ€.

```ts
reduce(callback: (result: T, value: T), initialValue: T): T;
```

- λ€μμ 1λΆν° 100κΉμ§ λνλ λ‘μ§μ `reduce` λ©μλλ₯Ό μ¬μ©ν΄ λ€μ κ΅¬νν μμ΄λ€.

```ts
import { range } from "./range";

let reduceSum: number = range(1, 100 + 1)
  .reduce((result: number, value: number) => result + value, 0);

console.log(reduceSum); // 5050
```

## π¦ μμ ν¨μμ λ°°μ΄
- ν¨μν νλ‘κ·Έλλ°μμ ν¨μλ **μμ ν¨μ**(**pure function**)λΌλ μ‘°κ±΄μ λ§μ‘±ν΄μΌ νλ€.
- κ·Έλ¬λ νμμ€ν¬λ¦½νΈμ `Array` ν΄λμ€μλ μμ ν¨μ μ‘°κ±΄μ λΆν©νμ§ μλ λ©μλκ° λ§λ€.

### π μμ ν¨μλ?
- μμ ν¨μλ **λΆμ ν¨κ³Ό**(**side-effect**)κ° μλ ν¨μλ₯Ό λ§νλ€.
- μ¬κΈ°μ λΆμ ν¨κ³Όλ **ν¨μκ° κ°μ§ κ³ μ ν λͺ©μ  μ΄μΈμ λ€λ₯Έ ν¨κ³Όκ° λνλλ κ²**μ μλ―Ένλ©° λΆμμ©μ΄λΌκ³ λ νλ€.
- λ°λ©΄μ λΆμ ν¨κ³Όκ° μλ ν¨μλ₯Ό **λΆμ ν¨μ**(**impure function**)λΌκ³  νλ€.
- ν¨μν νλ‘κ·Έλλ°μμ λ°μνλ λΆμ ν¨κ³Όλ ν¨μλ₯Ό **μμ ν¨μ ννλ‘ μμ±ν΄μΌλ§ μ κ±°ν  μ μλ€.**
- λΆμ ν¨κ³Όκ° μλ μμν ν¨μμ΄λ €λ©΄ λ€μκ³Ό κ°μ μ‘°κ±΄μ μΆ©μ‘±ν΄μΌ νλ€.

> - ν¨μ λͺΈν΅μ **μμΆλ ₯ κ΄λ ¨ μ½λ**κ° μμ΄μΌ νλ€.
> - ν¨μ λͺΈν΅μμ **λ§€κ°λ³μ«κ°μ λ³κ²½**μν€μ§ μλλ€. (μ¦, λ§€κ°λ³μλ `const`λ `readonly` ννλ‘λ§ μ¬μ©νλ€.)
> - ν¨μ λͺΈν΅μμ λ§λ€μ΄μ§ **κ²°κ³Όλ₯Ό μ¦μ λ°ν**νλ€.
> - ν¨μ λ΄λΆμ **μ μ­ λ³μλ μ μ  λ³μ**λ₯Ό μ¬μ©νμ§ μλλ€.
> - ν¨μκ° **μμΈλ₯Ό λ°μ**μν€μ§ μλλ€.
> - ν¨μκ° **μ½λ°± ν¨μ**λ‘ κ΅¬νλμ΄μκ±°λ ν¨μ λͺΈν΅μ μ½λ°± ν¨μλ₯Ό μ¬μ©νλ μ½λκ° μλ€.
> - ν¨μ λͺΈν΅μ `Promise`μ κ°μ **λΉλκΈ° λ°©μμΌλ‘ λμ**νλ μ½λκ° μλ€.

- μλ₯Ό λ€μ΄, λ€μ `pure` ν¨μλ μ΄λ° μ‘°κ±΄μ λͺ¨λ λ§μ‘±νλ μμ ν¨μμ΄λ€.

```ts
function pure(a: number, b: number): number {
  return a + b;
}
```

- κ·Έλ‘λ λ€μ impure1 ν¨μλ λ§€κ°λ³μλ₯Ό λ³κ²½νλ―λ‘ λΆμ ν¨κ³Όκ° λ°μνλ€. μ¦, λ§€κ°λ³μκ° `readonly` ννλ‘ λμνμ§ μμΌλ―λ‘ λΆμ ν¨μμ΄λ€.

```ts
function impure1(array: number[]): void {
  array.push(1);
  array.splice(0, 1);
}
```

- λ€μ `impure2` ν¨μλ `g`λΌλ μΈλΆ λ³μλ₯Ό μ¬μ©νλ―λ‘ λΆμ ν¨μμ΄λ€.

```ts
let g = 10;
function impure2(x: number) {
  return x + g;
}
```

### π νμ μμ μ readonly
- νμμ€ν¬λ¦½νΈλ μμ ν¨μ κ΅¬νμ μ½κ² νλλ‘ `readonly` ν€μλλ₯Ό μ κ³΅νλ€.
- `readonly` νμμΌλ‘ μ μΈλ λ§€κ°λ³μ«κ°μ **λ³κ²½νλ μλκ° μμΌλ©΄ λ€μμ²λΌ λ¬Έμ κ° μλ μ½λλΌκ³  μλ €μ€μ λΆμ ν¨μκ° λμ§ μκ² λ°©μ§νλ€.**

```ts
function forcePure(array: readonly number[]){
  array.push(1); // 'readonly number[]' νμμ 'push' μμ±μ΄ μμ΅λλ€.
}
```

- νμμ€ν¬λ¦½νΈμμ μΈν°νμ΄μ€, ν΄λμ€, ν¨μμ λ§€κ°λ³μ λ±μ `let`μ΄λ `const` ν€μλ μμ΄ μ μΈνκΈ° λλ¬Έμ μ΄λ° μ¬λ²μ `const`μ κ°μ ν¨κ³Όλ₯Ό μ£Όλ €λ©΄ `readonly`λΌλ νμ μμ μκ° νμνλ€.

### π λΆλ³κ³Ό κ°λ³
- λ³μ `const`λ `readonly`λ₯Ό λͺμνκ³  μμΌλ©΄ λ³μ«κ°μ μ΄κΉκ°μ ν­μ μ μ§νλ€.
- μ΄λ° λ³μλ₯Ό **λΆλ³(immutable) λ³μ**λΌκ³  νλ€.
- λ°λ©΄μ `let`μ΄λ `readonly`λ₯Ό λͺμνμ§ μμ λ³μλ₯Ό μΈμ λ  κ°μ λ³κ²½ν  μ μλ€. μ΄λ° λ³μλ **κ°λ³(mutable) λ³μ**λΌκ³  νλ€.


> [πμλ‘κ°κΈ°](#-Chapter-5-λ°°μ΄κ³Ό-νν)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)

### π κΉμ λ³΅μ¬μ μμ λ³΅μ¬
- **μμ ν¨μλ₯Ό κ΅¬νν  λλ λ§€κ°λ³μκ° λΆλ³μ±μ μ μ§ν΄μΌ νλ―λ‘**, λ§€κ°λ³μλ₯Ό κ°κ³΅νλ €κ³  ν  λ κΉμ λ³΅μ¬κ° μ€νν΄ **λ§€κ°λ³μκ°μ΄ λ³κ²½λμ§ μκ² ν΄μΌ νλ€.**
- κΉμ λ³΅μ¬λ λμ λ³μ«κ°μ΄ λ°λ λ μλ³Έ λ³μκ°μ κ·Έλλ‘μΈ ννλ‘ λμνλ€.

```ts
let original = 1;
let copied = original;
copied += 2;
console.log(original, copied); // 1 3
```
- νμμ€ν¬λ¦½νΈμμ `number`μ `boolean` νμμ κΉμ λ³΅μ¬ ννλ‘ λμνλ€.
- κ·Έλ¬λ **κ°μ²΄μ λ°°μ΄μ μμ λ³΅μ¬ λ°©μμΌλ‘ λμνλ€.**

```ts
const originalArray = [5, 3, 9, 7];
const shallowCopiedArray = originalArray;
shallowCopiedArray[0] = 0;
console.log(originalArray, shallowCopiedArray); // [ 0, 3, 9, 7 ] [ 0, 3, 9, 7 ]
```

### π μ κ° μ°μ°μμ κΉμ λ³΅μ¬
- μ κ° μ°μ°μλ₯Ό μ¬μ©ν΄ λ°°μ΄μ λ³΅μ¬νλ©΄ κΉμ λ³΅μ¬λ₯Ό ν  μ μλ€.

```ts
const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray); // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]
```

### π λ°°μ΄μ sort λ©μλλ₯Ό μμ ν¨μλ‘ κ΅¬ννκΈ°
- `sort` λ©μλλ μλ³Έ λ°°μ΄μ λ΄μ©μ λ³κ²½νλ€.
- λ€μ `pureSort` ν¨μλ `readonly` νμμΌλ‘ μλ ₯ λ°°μ΄μ λ΄μ©μ μ μ§ν μ± μ λ ¬ν  μ μλλ‘ μ κ° μ°μ°μμ κΉμ λ³΅μ¬ κΈ°λ₯μ μ¬μ©νλ€.

```ts
const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array];
  return deepCopied.sort();
}

let beforeSort = [6, 2, 9, 0];
const afterSort = pureSort(beforeSort);
console.log(beforeSort, afterSort); // [ 6, 2, 9, 0 ] [ 0, 2, 6, 9 ]
```


### π λ°°μ΄μ filter λ©μλμ μμν μ­μ 
- λ°°μ΄μμ νΉμ  μμ΄νμ μ­μ ν  λλ `splice` λ©μλλ₯Ό μ¬μ©νλ€. κ·Έλ°λ° `splice`λ μλ³Έ λ°°μ΄μ λ΄μ©μ λ³κ²½νλ―λ‘ μμ ν¨μμμλ μ¬μ©ν  μ μλ€. κ·Έλ κΈ° λλ¬Έμ `filter` λ©μλλ₯Ό μ¬μ©ν  μ μλ€.
- `filter` λ©μλλ₯Ό μ¬μ©νλ©΄ μλ³Έ λ°°μ΄μ λ΄μ©μ νΌμνμ§ μμΌλ©΄μ μ‘°κ±΄μ λ§μ§ μλ μμ΄νμ μ­μ ν  μ μλ€.

```ts
const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) 
  => boolean): T[] => array.filter((val, index) => cb(val, index) == false);

const mixedArray: object[] = [
  [], { name: 'Jack' }, { name: 'Jane', age: 32 }, ['description']
]

const objectsOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val));

console.log(mixedArray, objectsOnly);
// [ [], { name: 'Jack' }, { name: 'Jane', age: 32 }, [ 'description' ] ] 
// [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]
```

### π κ°λ³ μΈμ ν¨μμ μμ ν¨μ
- ν¨μλ₯Ό νΈμΆν  λ μ λ¬νλ μΈμμ κ°μλ₯Ό μ ννμ§ μλ κ²μ **κ°λ³ μΈμ**(**variadic arguments**)λΌκ³  νλ€.

```ts
const mergedArray: number[] = mergeArray(
  [1], [2, 3], [4, 5, 6], [7, 8, 9, 10],
)

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

- λ€μ μ½λλ κ°λ³ μΈμλ‘ νΈμΆν  μ μλ `mergeArray` ν¨μμ΄λ€.

```ts
export const mergeArray = (...arrays) => {};
```

- νμμ μκ΄ μμ΄ λμνκ² νλ €λ©΄ λ€μ μ²λΌ μ λ€λ¦­ νμμΌλ‘ κ΅¬ννλ€.

```ts
export const mergeArray = <T>(...arrays) => {};
```

- λν, `mergeArray` ν¨μλ₯Ό νΈμΆν  λ μ λ¬νλ κ°μ λͺ¨λ λ°°μ΄μ΄μλ€. λ°λΌμ λ§€κ°λ³μ `arrays`μ νμμ λ°°μ΄μ λ°°μ΄λ‘ μ μΈνλ€.

```ts
export const mergeArray = <T>(...arrays: T[][]) => {};
```

- `mergeArray` ν¨μμ λ§€κ°λ³μ `arrays`λ λ°°μ΄μ λ°°μ΄μΈ `T[][]` νμμΌμ§λΌλ μΆλ ₯μ `T[]`ννμ λ°°μ΄μ λ°νν΄μΌ νλ€.

```ts
export const mergeArray = <T>(...arrays: T[][]): T[] => {};
```

- λ§μ§λ§μΌλ‘ `mergeArray` ν¨μλ₯Ό **μμ ν¨μ**λ‘ κ΅¬ννλ €λ©΄ λ§€κ°λ³μμ λ΄μ©μ νΌμνμ§ λ§μμΌ νλ€. λ°λΌμ λ€μμ²λΌ λ§€κ°λ³μ νμ μμ `readonly` ν€μλλ₯Ό μλ ₯νλ€.

```ts
export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {};
```
- `mergeArray` ν¨μλ₯Ό κ΅¬ννλ©΄ λ€μκ³Ό κ°λ€.

```ts
export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = [];
  
  for (let index = 0; index < arrays.length; index++) {
    const array: T[] = arrays[index];

    result = [...result, ...array];
  }

  return result;
}
```


## π¦ νν μ΄ν΄νκΈ°
- μλ°μ€ν¬λ¦½νΈμμλ ννμ΄ μμΌλ©° λ¨μν λ°°μ΄μ ν μ’λ₯λ‘ μ·¨κΈλλ€.
- λ€μμ μ¬λ¬ νμμ λμνλ `any` νμ λ°°μ΄μ μ μΈν μμ΄λ€.

```ts
let tuple: any[] = [true, 'the result is ok'];
```

- κ·Έλ°λ° `any[]` ννλ νμμ€ν¬λ¦½νΈμ νμ κΈ°λ₯μ λ¬΄λ ₯ννλ―λ‘, νμμ€ν¬λ¦½νΈλ ννμ νμ νκΈ°λ²μ λ°°μ΄κ³Ό λ€λ₯΄κ² μ μΈν  μ μλ€.

```ts
const array: number[] = [1, 2, 3, 4];
const tuple: [boolean, string] = [true, 'the result is ok'];
```

### π ννμμ νμ λ³μΉ­ μ¬μ©νκΈ°
- λ³΄ν΅ ννμ μ¬μ©ν  λλ νμ λ³μΉ­(alias)μΌλ‘ ννμ μλ―Έλ₯Ό λͺννκ² νλ€.
- μλ₯Ό λ€μ΄ `[boolean, string]`μ΄λΌκ³  νμμ μ§μ νλ κ²λ³΄λ€ λ€μμ²λΌ **νμ λ³μΉ­μ μ¬μ©ν΄ μ΄ ννμ΄ μ΄λ€ μ©λλ‘ μ¬μ©λλμ§ μ’ λ λΆλͺνκ² μλ €μ£Όλ κ²μ΄ μ’λ€.**

```ts
export type ResultType = [boolean, string];
```

- λ€μ μ½λλ μμΈ μ²λ¦¬ κ΅¬λ¬Έμ μ¬μ©ν΄ μμΈκ° λ°μνμ λ κ΅¬μ²΄μ μΈ λ΄μ©μ ννλ‘ λ°ννλ€. μ΄λ λ³μΉ­μΌλ‘ μ μν `ResultType`μ μ¬μ©νλ€.

```ts
import { ResultType } from "./ResultType";

export const doSomething = (): ResultType => {
  try {
    throw new Error('Some error occurs...');
  } catch (e) {
    return [false, e.message];
  }
}
```

- μ΄λ¬ν μμΈ μ΄λ¦¬ μ½λλ λΆμν ν¨μλ₯Ό μμ ν¨μλ‘ λ°κΏμ£Όλ μ νμ μΈ μ½λ μ€κ³ λ°©μμ΄λ€.

### π ννμ μ μ©νλ λΉκ΅¬μ‘°ν ν λΉ
- ννμ λ¬Όλ¦¬μ μΌλ‘λ λ°°μ΄μ΄λ―λ‘ λ°°μ΄μ²λΌ μΈλ±μ€ μ°μ°μλ λΉκ΅¬μ‘°ν ν λΉλ¬Έμ μ μ©ν  μ μλ€.

```ts
import { doSomething } from './doSomething';

const [result, errorMessage] = doSomething();

console.log(result, errorMessage); // false Some error occurs...
```

> [πμλ‘κ°κΈ°](#-Chapter-5-λ°°μ΄κ³Ό-νν)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)