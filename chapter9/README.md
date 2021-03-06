# π€ Chapter 9: λλ€ λΌμ΄λΈλ¬λ¦¬

- μμΈν λ΄μ©μ μ±μ μ°Έκ³ ν©μλΉ (P.199 ~ P.258)

## π¦ λλ€ κΈ°λ³Έ μ¬μ©λ²

### π R.range ν¨μ

```ts
import * as R from 'ramda';

console.log(R.range(1, 9 + 1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### π R.tap λλ²κΉμ© ν¨μ
- `R.tap` ν¨μλ 2μ°¨ κ³ μ°¨ ν¨μ ννλ‘ νμ¬ κ°μ νμν  μ μκ² ν΄μ€λ€.

```ts
import * as R from 'ramda';

const numbers: number[] = R.range(1, 9 + 1);

R.tap(n => console.log(n))(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### π R.pipe ν¨μ

```ts
import * as R from 'ramda';

const array: number[] = R.range(1, 10);

R.pipe(R.tap(n => console.log(n)))(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### π ν¬μΈνΈκ° μλ ν¨μ

```ts
import * as R from 'ramda';

const dump = <T>(array: T[]): T[] => R.pipe(
  R.tap(n => console.log(n))
)(array) as T[]; // νμ λ¨μΈ μ¬μ©

dump(R.range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### π μλ μ»€λ¦¬ μ΄ν΄νκΈ°

```ts
import * as R from 'ramda';

console.log(
  R.add(1, 2),  // 3
  R.add(1)(2),  // 3
);
```

### π R.curryN ν¨μ
- Nκ°μ λ§€κ°λ³μλ₯Ό κ°μ§ 1μ°¨ ν¨μ(first function)λ₯Ό Nκ°μ μ»€λ¦¬ λ§€κ°λ³μλ₯Ό κ°μ§λ Nμ°¨ κ³ μ°¨ ν¨μλ‘ λ§λ€μ΄ μ€λ€.

```ts
import * as R from 'ramda';

const sum  = (...numbers: number[]): number =>
  numbers.reduce((result: number, sum: number) => result + sum, 0);

const curriedSum = R.curryN(4, sum);

console.log(
  curriedSum(), // [Function (anonymous)]
  curriedSum(1), // [Function (anonymous)]
  curriedSum(1)(2), // [Function (anonymous)]
  curriedSum(1)(2)(3), // [Function (anonymous)]
  curriedSum(1)(2)(3)(4), // 10
);
```

### π μμ ν¨μ
- λλ€ λΌμ΄λΈλ¬λ¦¬κ° μ κ³΅νλ ν¨μλ€μ ν­μ μλ ₯ λ³μμ μνλ₯Ό λ³νμν€μ§ μκ³  μλ‘μ΄ κ°μ λ°ννλ€.

## π¦ λ°°μ΄μ λ΄κΈ΄ μ λ€λ£¨κΈ°

### π μ μΈν νλ‘κ·Έλλ°
- μ μΈν νλ‘κ·Έλλ°μμ λͺ¨λ  μλ ₯ λ°μ΄ν°λ λ€μμ²λΌ λ¨μ λ°μ΄ν°λ³΄λ€λ°°μ΄ ννλ₯Ό μ£Όλ‘ μ¬μ©νλ€.

```ts
const value = 1;

const newArray = R.pipe(
  R.map(R.inc)
)([value]) // [2]
```

- `R.pipe` μμμλ `console.log()`λ¬Έμ μ§μ  μ¬μ©ν  μ μμΌλ―λ‘ λ°λμ `R.tap` ν¨μλ₯Ό μ¬μ©ν΄μΌ νλ€.

### π μ¬μΉ μ°μ° ν¨μ

```ts
R.add(a: number)(b: number); // a + b
R.subtract(a: number)(b: number); // a - b
R.multiply(a: number)(b: number); // a * b
R.divide(a: number)(b: number); // a / b
```

### π R.addIndex ν¨μ
- `Array.map`μ λ λ²μ§Έ λ§€κ°λ³μλ‘ `index`λ₯Ό μ κ³΅νμ§λ§, `R.map`μ `Array.map`κ³Ό λ€λ₯΄κ² `index` λ§€κ°λ³μλ₯Ό κΈ°λ³Έμ μΌλ‘ μ κ³΅νμ§ μλλ€. λ°λΌμ `R.addIndex` ν¨μλ₯Ό μ¬μ©ν΄ `R.map`μ΄ `index`λ₯Ό μ κ³΅νλ μλ‘μ΄ ν¨μλ₯Ό λ§λ€μ΄μΌ νλ€.

```ts
import * as R from 'ramda';

const addIndex = R.pipe(
  R.addIndex(R.map)(R.add),
  // R.addIndex(R.map)((value: number, index: number) => R.add(value)(index)),
  R.tap(a => console.log(a)) // [1, 3, 5, 7, 9, 11, 13, 15, 17]
);

const newNumbers = addIndex(R.range(1, 9 + 1));
```

### π R.flip ν¨μ
- λλ€λ `R.flip`μ΄λΌλ ν¨μλ₯Ό μ κ³΅νλλ° `R.flip`μ `R.subtract`μ κ°μ 2μ°¨ κ³ μ°¨ ν¨μμ λ§€κ° λ³μ μμλ₯Ό λ°κΏμ€λ€.

```ts
import * as R from 'ramda';

const reverseSubtract = R.flip(R.subtract);

const newArray = R.pipe(
  R.map(reverseSubtract(10)), // value - 10
  R.tap(a => console.log(a)), // [ -9, -8, -7, -6, -5, -4, -3, -2, -1 ]
)(R.range(1, 9 + 1));
```

### π μ¬μΉ μ°μ° ν¨μλ€μ μ‘°ν©

> f(x) = ax<sup>2</sup> + bx + c

```ts
import * as R from 'ramda';

type NumberToNumberFunc = (number) => number;

// λλ€λ₯Ό μ¬μ©νμ§ μμ
//const f = (a: number, b: number, c: number): NumberToNumberFunc =>
//  (x: number): number => a * x ** 2 + b * x + c;

// λλ€ ν¨μ μ¬μ©
const exp = (N: number) => (x: number) => x ** N;
const square = exp(2);

export const f = (a: number, b: number, c: number): NumberToNumberFunc =>
  (x: number): number => R.add(
    R.add(
      R.multiply(a)(square(x))
    )(R.multiply(b)(x)),
    c
  );
```

## π¦ μμ μμ μ‘°κ±΄ μ°μ°

### π μμ ν¬κΈ°λ₯Ό νλ¨νλ μμ μ
- μλ₯Ό λΉκ΅ν΄ `true`λ `false`λ₯Ό λ°ννλ λ€μμ μμ μλ€μ μ κ³΅νλ€.

```ts
R.lt(a)(b): boolean // a < b μ΄λ©΄ true, aκ° bλ³΄λ€ μμ
R.lte(a)(b): boolean // a <= b μ΄λ©΄ true, aκ° bλ³΄λ€ μκ±°λ κ°μ
R.gt(a)(b): boolean // a > b μ΄λ©΄ true, aκ° bλ³΄λ€ νΌ
R.gte(a)(b): boolean // a >= b μ΄λ©΄ true, aκ° bλ³΄λ€ ν¬κ±°λ κ°μ
```

- λ°°μ΄μ μμ΄ν μ€ 3λ³΄λ€ ν¬κ±°λ κ°μ μλ§ μ ν

```ts
import * as R from 'ramda';

R.pipe(
  R.filter(R.lte(3)),
  R.tap(n => console.log(n)) // [3, 4, 5, 6, 7, 8, 9, 10]
)(R.range(1, 10 + 1));
```

### π R.allPass λ‘μ§ ν¨μ
- `R.lt`, `R.gt`μ²λΌ `boolean` νμμ κ°μ λ°ννλ ν¨μλ€μ `R.allPass`μ `R.anyPass`λΌλ λ‘μ§ ν¨μλ₯Ό ν΅ν΄ κ²°ν©ν  μ μλ€.

```ts
R.allPass(μμ μλ°°μ΄) // λ°°μ΄μ μ‘°κ±΄μ λͺ¨λ λ§μ‘±νλ©΄ true
R.anyPass(μμ μλ°°μ΄) // λ°°μ΄μ μ‘°κ±΄μ νλλΌλ λ§μ‘±νλ©΄ true
```

- λ€μ μλ `x`κ° `min <= x < max` μ‘°κ±΄μ λ§μ‘±νλμ§ `R.allPass` ν¨μλ₯Ό μ¬μ©ν΄ νμΈνλ€.

```ts
import * as R from 'ramda';

type NumberToBooleanFunc = (n: number) => boolean;

export const selectRange = (min: number, max: number): NumberToBooleanFunc =>
  R.allPass([
    R.lte(min),
    R.gt(max),
  ]);
```

### π R.not ν¨μ
- μλ ₯κ°μ΄ `true`μ΄λ©΄ `false`λ₯Ό λ°ννκ³  `false`μ΄λ©΄ `true`λ₯Ό λ°ννλ ν¨μμ΄λ€.
- μ΄μ μ κ΅¬νν `selectRange`μ λ°λλ‘ μμ©νλ `notRange`λ₯Ό κ΅¬νν  μ μλ€.

```ts
import * as R from 'ramda';
import { selectRange } from './selectRange';

export const notRange = (min: number, max: number) => 
  R.pipe(selectRange(min, max), R.not);
```

### π R.ifElse ν¨μ
- `R.ifElse` ν¨μλ μΈ κ°μ§ λ§€κ°λ³μλ₯Ό ν¬ν¨νλλ°, μ²« λ²μ§Έλ `true/false`λ₯Ό λ°ννλ μμ μλ₯Ό, λ λ²μ§Έλ μ νμκ° `true`λ₯Ό λ°νν  λ μ€νν  ν¨μλ₯Ό μΈ λ²μ§Έλ μ νμκ° `false`λ₯Ό λ°νν  λ μ€νν  ν¨μμ΄λ€.
- λ€μ μ½λλ 1λΆν° 10κΉμ§ μμμ μ€κ°κ° 6λ³΄λ€ μμ μλ 1μ© κ°μμν€κ³ , κ°κ±°λ ν° μλ 1μ© μ¦κ°μν€λ κ²μ κ΅¬νν μμ΄λ€.

```ts
import * as R from 'ramda';

const input: number[] = R.range(1, 10 + 1);
const halfVale = input[input.length / 2]; // 6

const subtractOrAdd = R.pipe(
  R.map(R.ifElse(
    R.lte(halfVale), // μ‘°κ±΄ μμ μ: x => half <= x,
    R.inc, // true μΌ λ μ€νν  ν¨μ
    R.dec, // false μΌ λ μ€νν  ν¨μ
  )),
  R.tap(a => console.log(a)), // [0, 1, 2, 3, 4, 7, 8, 9, 10, 11]
);

const result = subtractOrAdd(input);
```

## π¦ λ¬Έμμ΄ λ€λ£¨κΈ°

- λ¬Έμμ΄ μλ€μ λ°±μ λ¬Έμ μλ₯΄κΈ°

```ts
import * as R from 'ramda';

R.trim('\t hello \n'); // hello
```

- λμλ¬Έμ μ ν

```ts
import * as R from 'ramda';

R.toUpper('Hello'); // HELLO
R.toLower('HELLO'); // hello
```

- λ¬Έμμ΄μ λ°°μ΄λ‘ λ³νκ³Ό λ°°μ΄μ λ¬Έμμ΄λ‘ λ³ν

```ts
import * as R from 'ramda';

const words: string[] = R.split(' ')(`Hello world!, I'm Peter.`);
// ['Hello', 'world!,', "I'm", 'Peter.']

R.join(' ')(words);
// "Hello world!, I'm Peter."
```

## π¦ chance ν¨ν€μ§λ‘ κ°μ²΄ λ§λ€κΈ°
- μμ λ₯Ό λ°λΌ ν΄λ΄. (P.225 ~ P.232)

> src/model directory μ°Έκ³ 

## π¦ λ μ¦λ₯Ό νμ©ν κ°μ²΄μ μμ± λ€λ£¨κΈ°

### π λ μ¦λ?
- λ μ¦λ νμ€μΌ μΈμ΄μ `Control.Lens` λΌμ΄λΈλ¬λ¦¬ λ΄μ© μ€ μλ°μ€ν¬λ¦½νΈμμ λμν  μ μλ κ²ν°μ μΈν° κΈ°λ₯λ§μ λλ€ ν¨μλ‘ κ΅¬νν κ²μ΄λ€. λλ€μ λ μ¦ κΈ°λ₯μ νμ©νλ©΄ κ°μ²΄μ μμ±κ°μ μ»κ±°λ μ€μ νλ λ±μ μμμ μ½κ² ν  μ μλ€.

> 1. `R.lens` ν¨μλ‘ κ°μ²΄μ νΉμ  μμ±μ λν λ μ¦λ₯Ό λ§λ λ€.
> 2. λ μ¦λ₯Ό `R.view` ν¨μμ μ μ©ν΄ μμ±κ°μ μ»λλ€.
> 3. λ μ¦λ₯Ό `R.set` ν¨μμ μ μ©ν΄ μμ±κ°μ΄ λ°λ μλ‘μ΄ κ°μ²΄λ₯Ό μ»λλ€.
> 4. λ μ¦μ μμ±κ°μ λ°κΎΈλ ν¨μλ₯Ό `R.over` ν¨μμ μ μ©ν΄ κ°μ΄ λ°λ μλ‘μ΄ κ°μ²΄λ₯Ό μ»λλ€.

### π R.propκ³Ό R.assoc ν¨μ
- `R.prop`λ κ°μ²΄μ νΉμ  μμ±κ°μ κ°μ Έμ€λ ν¨μλ‘μ, μ΄λ° λμμ νλ ν¨μλ₯Ό **κ²ν°**λΌκ³  νλ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from "./model/person";

const person: IPerson = makeRandomIPerson();

const name = R.pipe(
  R.prop('name'),
  R.tap(name => console.log(name)), // λλ€ μμ±λ μ΄λ¦
)(person);
```

- κ°μ²΄μ νΉμ  μμ±κ°μ λ³κ²½νλ €λ©΄ `R.assoc` ν¨μλ₯Ό μ¬μ©νλλ°, μ΄λ° λͺ©μ μΌλ‘ μ¬μ©νλ ν¨μλ₯Ό **μΈν°**λΌκ³  νλ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';

const getName = R.pipe(R.prop('name'), R.tap(name => console.log(name)));

const person: IPerson = makeRandomIPerson();
const originalName = getName(person); // λλ€ μμ±λ μ΄λ¦

const modifiedPerson = R.assoc('name', 'Seungmin')(person);
const modifiedName = getName(modifiedPerson); // Seungmin
```

### π R.lens ν¨μ
- λ μ¦λ λ€μμ²λΌ `R.lens`, `R.prop`, `R.assoc`μ μ‘°ν©μΌλ‘ λ§λ€ μ μλ€.

```ts
export const makeLens = (propName: string) => R.lens(R.prop(propName), R.assoc(propName));
```

### π R.view, R.set, R.over ν¨μ
- `R.view`, `R.set`, `R.over` ν¨μμ λ μ¦λ₯Ό μ μ©ν΄μ λ€μκ³Ό κ°μ κ²ν°μ μΈν° κ·Έλ¦¬κ³  `setterUsingFunc`κ³Ό κ°μ ν¨μλ₯Ό λ§λ€ μ μλ€.

```ts
import * as R from 'ramda';

export const makeLens = (propName: string) => 
  R.lens(R.prop(propName), R.assoc(propName));

export const getter = (lens) => R.view(lens);
export const setter = (lens) => <T>(newValue: T) => R.set(lens, newValue);
export const setterUsingFunc = (lens) => <T, R>(func: (T) => R) => R.over(lens, func);
```

- μ μ½λλ₯Ό μ¬μ©ν `lens.ts`μ ν¨μλ€μ νμ€νΈλ `lens-test.ts`λ₯Ό μ°Έκ³ 

### π R.lensPath ν¨μ
- λλ€ λΌμ΄λΈλ¬λ¦¬μμλ κ°μ²΄μ μ€μ²© μμ±μ κ²½λ‘(path)λΌκ³  νλ€. `longitude`μ²λΌ κΈ΄ κ²½λ‘μ μμ±μ λ μ¦λ‘ λ§λ€λ €λ©΄ `R.lensPath` ν¨μλ₯Ό μ¬μ©νλ€.

```ts
λ μ¦ = R.lensPath(['location', 'coordinates', 'longitude']);
```

- μ΄λ κ² λ μ¦λ₯Ό λ§λ€μμΌλ©΄ μμμ κ΅¬νν `lens.ts`μ κ²ν°μ μΈν° κ·Έλ¦¬κ³  `setterUsingFunc` ν¨μμ λ°λ‘ μ μ©ν  μ μλ€.

```ts
import * as R from 'ramda';

import { getter, setter, setterUsingFunc } from './lens';
import { IPerson, makeRandomIPerson } from './model/person';

const longitudeLens = R.lensPath(['location', 'coordinates', 'longitude']);
const getLongitude = getter(longitudeLens);
const setLongitude = setter(longitudeLens);
const setLongitudeUsingFunc = setterUsingFunc(longitudeLens);

const person: IPerson = makeRandomIPerson();

const longitude = getLongitude(person);
const newPerson = setLongitude(0.1234567)(person);
const anotherPerson = setLongitudeUsingFunc(R.add(0.1234567))(person);

console.log(
  longitude, getLongitude(newPerson), getLongitude(anotherPerson),
);
// 91.00362 0.1234567 91.1270767
```

## π¦ κ°μ²΄ λ€λ£¨κΈ°

### π R.toPairsμ R.fromPairs ν¨μ
- `R.toPairs` ν¨μλ κ°μ²΄μ μμ±λ€μ λΆν΄ν΄ λ°°μ΄λ‘ λ§λ€μ΄μ€λ€. μ΄λ λ°°μ΄μ κ° μμ΄νμ `[string, any]` νμμ ννμ΄λ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';

const person: IPerson = makeRandomIPerson();
const pairs: [string, any][] = R.toPairs(person);

console.log('pairs', pairs);
```

- R.fromPairs ν¨μλ `[ν€:κ°]` ννμ μμ΄νμ κ°μ§ λ°°μ΄μ λ€μ κ°μ²΄λ‘ λ§λ€μ΄ μ€λ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';

const pairs: [string, any][] = R.toPairs(makeRandomIPerson());
const person: IPerson = R.fromPairs(pairs) as IPerson;

console.log('person: ', person);
```

### π R.keysμ R.values ν¨μ
- `R.keys` ν¨μλ κ°μ²΄μ μμ± μ΄λ¦λ§ μΆλ €μ `string[]` νμ λ°°μ΄λ‘ λ°ννλ€.

```ts
import * as R from 'ramda';

import { makeRandomIPerson } from './model/person';

const keys: string[] = R.keys(makeRandomIPerson());

console.log('keys: ', keys); // keys: ['name', 'age', 'title', 'location']
```

- `R.values` ν¨μλ κ°μ²΄μ μμ±κ°λ§ μΆλ €μ `any[]` νμ λ°°μ΄λ‘ λ°ννλ€.

```ts
import * as R from 'ramda';

import { makeRandomIPerson } from './model/person';

const values: any[] = R.values(makeRandomIPerson());

console.log('values: ', values);
```

### π R.zipObj ν¨μ
- `R.zipObj` ν¨μλ *ν€ λ°°μ΄*κ³Ό *κ° λ°°μ΄*μ΄λΌλ λ κ°μ§ λ§€κ°λ³μλ₯Ό κ²°ν©ν΄ κ°μ²΄λ‘ λ§λ€μ΄ μ€λ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';

const originalPerson: IPerson = makeRandomIPerson();
const keys: string[] = R.keys(originalPerson);
const values: any[] = R.values(originalPerson);
const zippedPerson: IPerson = R.zipObj(keys, values) as IPerson;

console.log(
  'originalPerson: ', originalPerson,
  'zippedPerson: ', zippedPerson,
);
```

### π R.mergeLeftμ R.mergeRight ν¨μ
- `R.mergeLeft`μ `R.mergeRight` ν¨μλ λ κ°μ κ°μ²΄λ₯Ό μλ ₯λ°μ λ κ°μ²΄μ μμ±λ€μ κ²°ν©ν΄ μλ‘μ΄ κ°μ²΄λ₯Ό μμ±νλ€.

```ts
μλ‘μ΄κ°μ²΄ = R.mergeLeft(κ°μ²΄1)(κ°μ²΄2); // μμ±κ°μ΄ λ€λ₯Ό λ μΌμͺ½ κ°μ²΄μ μ°μ μμκ° λμ
μλ‘μ΄κ°μ²΄ = R.mergeRight(κ°μ²΄1)(κ°μ²΄2); // μμ±κ°μ΄ λ€λ₯Ό λ μ€λ₯Έμͺ½ κ°μ²΄μ μ°μ μμκ° λμ
```

- λ€μ κ²°κ³Όλ `left` μͺ½μ `name` μμ±κ°μ΄ μ€μ λλ€.

```ts
import * as R from 'ramda';

const left = { name: 'Jack' };
const right = { name: 'Jane', age: 32 };

const person = R.mergeLeft(left, right);
console.log(person); // { name: 'Jack', age: 32 }
```

### π R.mergeDeepLeftμ R.mergeDeepRight ν¨μ
- `R.mergeLeft`μ `R.mergeRight` ν¨μλ κ°μ²΄μ μμ±μ λ΄κΈ΄ κ°μ²΄λ₯Ό λ°κΎΈμ§λ λͺ»νλ€.
- λ°λ©΄μ μ΄ λ ν¨μλ€μ μλ μμ μ κ°μ΄ `location`, `coordinates`μ κ°μ κ²½λ‘μ μμ±κ°λ€λ λ°κΏ μ μλ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';
import { ILocation, makeRandomILocation } from './model/location';
import { ICoordinates, makeRandomICoordinates } from './model/coordinates';

const person: IPerson = makeRandomIPerson();
const location: ILocation = makeRandomILocation();
const coordinates: ICoordinates = makeRandomICoordinates();

const newLocation = R.mergeDeepRight(location, { coordinates });
const newPerson = R.mergeDeepRight(person, { location: newLocation });

console.log('person: ', person);
console.log('newPerson: ', newPerson);
```

## π¦ λ°°μ΄ λ€λ£¨κΈ°

### π R.prependμ R.append ν¨μ
- `R.prepend`μ `R.append`λ κΈ°μ‘΄ λ°°μ΄μ μλ€μ μ μμ΄νμ μ½μν μ λ°°μ΄μ λ§λ€μ΄ μ€λ€.

```ts
import * as R from 'ramda';

const array: number[] = [3, 4];
const newPrependArray = R.prepend(1)(array);

console.log(newPrependArray); // [1, 3, 4]

const newAppendArray = R.append(1)(array);

console.log(newAppendArray); // [3, 4, 1]
```

### π R.flatten ν¨μ
- λ°°μ΄μ κ΅¬μ‘°κ° λ€μμ²λΌ λ³΅μ‘νκ² κ΅¬μ±λμ΄ μμΌλ©΄, μ΄ λ°°μ΄μ λμμΌλ‘ λλ€ λΌμ΄λΈλ¬λ¦¬μ κΈ°λ₯μ μ μ©νλ κ²μ μ΄λ ΅λ€.

```js
[[[1, 1], [1, 2]], [[2, 1], [2, 2]]]
```

- `R.flatten` ν¨μλ μμ²λΌ λ³΅μ‘ν 1μ°¨μμ ννν λ°°μ΄λ‘ λ°κΏμ€λ€.

```ts
import * as R from 'ramda';

const array = [[[1, 1], [1, 2]], [[2, 1], [2, 2]]];

const flattendArray = R.flatten(array);
console.log(flattendArray); // [1, 1, 1, 2, 2, 1, 2, 2]
```

### π R.unnest ν¨μ
- `R.unnest` ν¨μλ `R.flatten`λ³΄λ€ μ’λ μ κ΅νκ² λ°°μ΄μ κ°κ³΅ν΄μ€λ€.

```ts
const array = [[[1, 1], [1, 2]], [[2, 1], [2, 2]]];

const unnestedArray = R.unnest(array);
console.log(unnestedArray); //[[1, 1], [1, 2], [2, 1], [2, 2]]

const twoUnnestedArray = R.pipe(R.unnest, R.unnest)(array);
console.log(twoUnnestedArray); // [1, 1, 1, 2, 2, 1, 2, 2]
```

### π R.sort ν¨μ
- λ°°μ΄μ νμμ΄ `number[]`λΌλ©΄ `R.sort` ν¨μλ₯Ό μ¬μ©ν΄ λ°°μ΄μ λ΄λ¦Όμ°¨μμ΄λ μ€λ¦μ°¨μμΌλ‘ μ λ ¬ν  μ μλ€.

```ts
import * as R from 'ramda';

const array: number[] = [5, 6, 2, 1, 7, 9, 8, 3, 4];
const sortedArray = R.sort((a: number, b: number): number => a - b)(array);

console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### π R.sortBy ν¨μ
- λ°°μ΄μ λ΄κΈ΄ μμ΄νμ΄ κ°μ²΄λΌλ©΄ νΉμ  μμ±κ°μ λ°λΌ μ λ ¬ν΄μΌ νλλ°, μ΄λ `R.sortBy` ν¨μλ₯Ό μ¬μ©νλ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortBy(R.prop('name'))(persons);
const ageSortedPersons = R.sortBy(R.prop('age'))(persons);
```

### π R.sortWith ν¨μ
- `R.sortBy` ν¨μλ μ€λ¦μ°¨μ λ΄λ¦Όμ°¨μ μ λ ¬μ νμ§ λͺ»νκ³  ν­μ μ€λ¦μ°¨μμΌλ‘λ§ μ λ ¬νλ€.
- `R.sortWith` ν¨μλ `R.ascend`, `R.descend` ν¨μμ ν¨κ» μ¬μ©λμ΄ μ€λ¦μ°¨μ, λ΄λ¦Όμ°¨μ μ λ ¬μ ν  μ μλ€.

```ts
import * as R from 'ramda';

import { IPerson, makeRandomIPerson } from './model/person';

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomIPerson);
const nameSortedPersons = R.sortWith([
  R.descend(R.prop('name'))
])(persons);
```

## π¦ μ‘°ν© λΌλ¦¬ μ΄ν΄νκΈ°
- λλ€ μνμ λͺ¨λ  μ΄λ‘ μ μ»΄ν¨ν° νλ‘κ·Έλλ° μΈμ΄λ‘ ννν  μ μμΌλ―λ‘ μ΄λ€ μ νλ λ²μμμ λλ€ μνμ κ΅¬ννκΈ° μν΄ μ‘°ν© λΌλ¦¬νμ΄ μκ²¨λ¬λ€.

### π μ‘°ν©μλ?
- μ‘°ν© λΌλ¦¬νμ μ‘°ν©μ(combinator)λΌλ νΉλ³ν ννμ κ³ μ°¨ ν¨μλ€μ κ²°ν©ν΄ μλ‘μ΄ μ‘°ν©μλ₯Ό λ§λ€μ΄ λ΄λ κ²μ΄λ€. μ΄λ ν¨μν μΈμ΄μ μ»΄νμΌλ¬λ₯Ό λ§λλ λ° νμν μ΄λ‘ μ κ²μ¦νκ³  κ°λ°ν  λ μ£Όλ‘ μ¬μ©λλ€.
- λλ€ λΌμ΄λΈλ¬λ¦¬μμ λͺ κ°μ§ μ λͺν μ‘°ν©μλ₯Ό μ κ³΅νλ€.

|μ‘°ν©μ μ΄λ¦|μλ―Έ|λλ€ ν¨μ μ΄λ¦|
|:---:|:---:|:---:|
|I|identity|R.identity|
|K|constant|R.always|
|T|thrush|R.applyTo|
|W|duplication|R.unnest|
|C|flip|R.flip|
|S|substitution|R.ap|

### π R.chain ν¨μ νκ΅¬
- λλ€ λΌμ΄λΈλ¬λ¦¬λ `R.chain`μ΄λΌλ ν¨μλ₯Ό μ κ³΅νλ€. μ΄ ν¨μλ ν¨μλ₯Ό λ§€κ°λ³μλ‘ λ°μ λμνλ ν¨μλ‘μ, λ§€κ°λ³μκ° ν κ°μΌ λμ λ κ°μΌ λμ λμμ΄ μ‘°κΈ λ€λ₯΄λ€.

```ts
import * as R from 'ramda';

const array = [1, 2, 3];

R.pipe(
  R.chain(n => [n, n]),
  R.tap(n => console.log(n)), // [1, 1, 2, 2, 3, 3]
)(array);

R.pipe(
  R.chain(R.append, R.head),
  R.tap(n => console.log(n)), // [1, 2, 3, 1]
)(array);
```

- `R.chain` ν¨μλ λ§€κ°λ³μκ° ν κ°μΌ λλ λ€μ `flatMap` ν¨μμ²λΌ λμνλ€.

```ts
import * as R from 'ramda';

const array = [1, 2, 3];

const flatMap = (f) => R.pipe(
  R.map(f),
  R.flatten,
);

R.pipe(
  flatMap(n => [n, n]),
  R.tap(n => console.log(n)), // [1, 1, 2, 2, 3, 3]
)(array);
```

- λ§€κ°λ³μκ° λ κ°μΌ λλ λ€μ μ½λμ `chainTwoFunc` ν¨μμ²λΌ λμνλ€.

```ts
import * as R from 'ramda';

const chainTwoFunc = (firstFn, secondFn) => (x) => firstFn(secondFn(x), x);

const array = [1, 2, 3];

R.pipe(
  chainTwoFunc(R.append, R.head), // array => R.append(R.head(array))(array)
  R.tap(n => console.log(n)), // [1, 2, 3, 1]
)(array);
```

### π R.flip μ‘°ν©μ
- `R.flip`ν¨μλ 2μ°¨ κ³ μ°¨ ν¨μμ λ§€κ°λ³μ μμλ₯Ό μλ‘ λ°κΏμ£Όλ μ­ν μ νλ€.

```ts
// flip ν¨μμ²λΌ κ΅¬νλμ΄ μλ€.
const flip = cb => a => b => cb(b)(a);
```

### π R.identity μ‘°ν©μ
- `R.identity`λ λ€μμ²λΌ κ΅¬νλ κ°μ₯ λ¨μν μ‘°ν©μμ΄μ§λ§, μ‘°ν©μμ κ΅¬μ‘°μ λ°λμ ν¨μκ° μμ΄μΌ νλ κ³³μ μμΉν  λ κ·Έ μλ ₯μ λ°ννλ€.

```ts
const identity = x => x;
```

- μμ κ΅¬νν `flatMap` ν¨μλ μ½λ°± ν¨μκ° ν κ° νμνλ€. λ€μ μ½λλ `flatMap` ν¨μκ° μκ΅¬νλ μ½λ°± ν¨μμ `R.identity` μ‘°ν©μλ₯Ό μ¬μ©ν μμ΄λ€. `unnest` ν¨μλ `R.unnest` ν¨μμ λκ°μ΄ λμνλ€.

```ts
import * as R from 'ramda';

import { flatMap } from './flatMap';

const unnest = flatMap(R.identity);

const array = [[1], [2], [3]];

R.pipe(
  unnest,
  R.tap(n => console.log(n)), // [1, 2, 3]
)(array);
```

### π R.always μ‘°ν©μ
- `R.always` μ‘°ν©μλ λ€μμ²λΌ λ κ°μ κ³ μ°¨ λ§€κ°λ³μ μ€ μ²« λ²μ§Έ κ²μ λ°ννλ€.

```ts
const always = x => y => x;
```

- `R.always`λ λ κ°μ λ§€κ°λ³μκ° νμν μ‘°ν©μμ λ§μΉ `R.identity`μ²λΌ μ¬μ©λλ€. λΉλ‘ `R.always`λ ν­μ μ²« λ²μ§Έ λ§€κ°λ³μκ°λ§ λ°ννμ§λ§, `R.flip(R.always)`λ λ°λλ‘ ν­μ λ λ²μ§Έ λ§€κ°λ³μκ°λ§ λ°ννλ€.

```ts
import * as R from 'ramda';

const always = a => b => a;
const flip = cb => a => b => cb(b)(a);

const first = <T>(a: T) => (b: T): T => always(a)(b);
const second = <T>(a: T) => (b: T): T => flip(always)(a)(b);

console.log(first(1)(2), second(1)(2)); // 1 2
```

### π R.applyTo μ‘°ν©μ
- νΉλ³νκ² κ°μ μ²« λ²μ§Έ λ§€κ°λ³μλ‘, κ·Έλ¦¬κ³  μ΄ κ°μ μλ ₯μΌλ‘ νλ μ½λ°± ν¨μλ₯Ό λ λ²μ§Έ λ§€κ°λ³μλ‘ λ°μ λ€μ μ½λμ²λΌ λμνλ€.

```ts
const applyTo = value => cb => cb(value);
```

- λ€μμ `R.applyTo` μμ μ΄λ€.

```ts
import * as R from 'ramda';

const T = value => R.pipe(
  R.applyTo(value),
  R.tap(value => console.log(value)),
);

const value100 = T(100);
const sameValue = value100(R.identity); // 100
const add1Value = value100(R.add(1)); // 101
```

### π R.ap μ‘°ν©μ
- `R.ap` μ‘°ν©μλ μ½λ°± ν¨μλ€μ λ°°μ΄μ μ²« λ²μ§Έ λ§€κ°λ³μλ‘, λ°°μ΄μ λ λ²μ§Έ λ§€κ°λ³μλ‘ μΌλ²½λ°λ 2μ°¨ κ³ μ°¨ ν¨μμ΄λ€.

```ts
const ap = ([μ½λ°± ν¨μ]) => λ°°μ΄ => [μ½λ°±ν¨μ](λ°°μ΄);
```

- `R.ap`λ μ½λ°± ν¨μκ° ν κ°μΌ λλ λ§μΉ `R.map` ν¨μμ²λΌ λμνλ€.

```ts
import * as R from 'ramda';

const callAndAppend = R.pipe(
  R.ap([R.multiply(2)]),
  R.tap(a => console.log(a)),
);

const input = [1, 2, 3];
const result = callAndAppend(input); // [2, 4, 6]
```

- κ·Έλ°λ° μ½λ°± ν¨μκ° λ€μμ²λΌ λ κ°μΌ λλ λ§μΉ `R.chain(n => [n, n])` ννλ‘ λμνλ€.
- `R.ap`λ λ μ½λ°± ν¨μλ₯Ό μ μ©ν κ°κ°μ λ°°μ΄μ λ§λ  λ€μ, μ°μ°μ΄ λλλ©΄ μ΄ λ°°μ΄μ λͺ¨λ ν΅ν©ν΄ ν κ°λ‘ λ§λ€μ΄μ€λ€.

```ts
import * as R from 'ramda';

const callAndAppend = R.pipe(
  R.ap([R.multiply(2), R.add(10)]),
  R.tap(a => console.log(a)),
);

const input = [1, 2, 3];
const result = callAndAppend(input); // [2, 4, 6, 11, 12, 13]
```

- λ€μ μ½λλ `R.ap` μ‘°ν©μμ μ΄λ° μ±μ§μ μ΄μ©ν΄ `[1, 2, 3]` λ°°μ΄μ μΈ λ² λ³΅μ ν λ€ ν΅ν©ν λ°°μ΄μ λ§λλ μμ΄λ€.

```ts
import * as R from 'ramda';

const repeat = (N, cb) => R.range(1, N + 1).map(n => cb);

const callAndAppend = R.pipe(
  R.ap(repeat(3, R.identity)),
  R.tap(a => console.log(a)),
);

const input = [1, 2, 3];
const result = callAndAppend(input); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```
