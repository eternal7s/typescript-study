# π€ Chapter 10: μ λ€λ¦­ νμ μ΄ν΄νκΈ°

## π¦ μ λ€λ¦­ νμ μ΄ν΄νκΈ°
- μ λ€λ¦­ νμμ μΈν°νμ΄μ€λ ν΄λμ€, ν¨μ, νμ λ³μΉ­ λ±μ μ¬μ©ν  μ μλ κΈ°λ₯μΌλ‘, ν΄λΉ μ¬λ²μ νμμ λ―Έλ¦¬ μ§μ νμ§ μκ³  λ€μν νμμ λμνλ €κ³  ν  λ μ¬μ©νλ€.

```ts
// μ λ€λ¦­ μΈν°νμ΄μ€ κ΅¬λ¬Έ
interface IValuable<T> {
  value: T;
}

// μ λ€λ¦­ ν¨μ κ΅¬λΆ
function identity<T>(arg: T): T { return arg; }

// μ λ€λ¦­ νμ λ³μΉ κ΅¬λ¬Έ
type IValuable<T> = {
  value: T;
}

// μ λ€λ¦­ ν΄λμ€ κ΅¬λ¬Έ
class Valuable<T> {
  constructor(public value: T) {};
}
```

### π μ λ€λ¦­ μ¬μ©νκΈ°
- μ λ€λ¦­ μΈν°νμ΄μ€ `IValuable<T>`λ₯Ό κ΅¬ννλ μ λ€λ¦­ ν΄λμ€λ μμ μ΄ κ°μ§ νμ λ³μ `T`λ₯Ό λ€μμ²λΌ μΈν°νμ΄μ€ μͺ½ μ λ€λ¦­ νμ λ³μλ‘ λκΈΈ μ μλ€.

```ts
interface IValuable<T> {
  value: T;
}

class Valuable<T> implements IValuable<T> {
  constructor(public value: T) {}
}

// μ λ€λ¦­ ν¨μλ λ€μμ²λΌ μμ μ νμ λ³μ Tλ₯Ό μ λ€λ¦­ μΈν°νμ΄μ€μ νμ λ³μ μͺ½μΌλ‘ λκΈ°λ ννλ‘ κ΅¬νν  μ μλ€.
const printValue = <T>(o: IValuable<T>): void => console.log(o.value);

printValue(new Valuable<number>(1)); // 1
printValue(new Valuable<boolean>(true)); // true
printValue(new Valuable<string>('hello')); // hello
printValue(new Valuable<number[]>([1, 2, 3])); // [1, 2, 3]
```

## π¦ μ λ€λ¦­ νμ μ μ½
- μ λ€λ¦­ νμ μ μ½μ νμ λ³μμ μ μ©ν  μ μλ νμμ λ²μλ₯Ό νμ νλ κΈ°λ₯μ νλ€.
- νμμ€ν¬λ¦½νΈμμ μ λ€λ¦­ ν¨μμ νμμ μ ννκ³  μΆμ λλ λ€μ κ΅¬λ¬Έμ μ¬μ©νλ€.

```ts
<μ΅μ’νμ1 extend νμ1, μ΅μ’νμ2 extend νμ2>(a: μ΅μ’νμ1, b: μ΅μ’νμ2, ...) {}
```

- `printValueT` ν¨μλ μ λ€λ¦­ νμ μ μ½ κ΅¬λ¬Έμ μ¬μ©ν΄ κ΅¬ννκ³  μλ€.

```ts
const printValueT = <Q, T extends IValuable<Q>>(o: T) => console.log(o.value);

printValueT(new Valuable(1)); // 1
printValueT({ value: true }); //true
```

### π new νμ μ μ½
- νλ‘κ·Έλλ° λΆμΌμμ ν©ν λ¦¬ ν¨μλ `new` μ°μ°μλ₯Ό μ¬μ©ν΄ κ°μ²΄λ₯Ό μμ±νλ κΈ°λ₯μ νλ ν¨μλ₯Ό μλ―Ένλ€.
- λ€μ μ½λμμ `create` ν¨μμ λ§€κ°λ³μ `type`μ μ€μ λ‘λ νμμ΄λ€. λ°λΌμ `type` λ³μμ νμ μ£ΌμμΌλ‘ λͺμν `T`λ νμμ νμμ ν΄λΉνλ€.

```ts
const create = <T>(type: T): T => new type();
```

- νμ§λ§ νμμ€ν¬λ¦½νΈ μ»΄νμΌλ¬λλ νμμ νμμ νμ©νμ§ μμΌλ―λ‘ μ€λ₯ λ©μμ§κ° λ°μνλ€.
- κ·Έλμ λ€μκ³Ό κ°μ΄ μ¬μ©ν΄μ€ μ μλ€.

```ts
const create = <T extends { new(): T }>(type: T): T => new type();

// λ κ°κ²°ν λ¬Έλ²
const create = <T>(type: new() => T): T => new type();
```

- κ²°λ‘ μ μΌλ‘, `{ new(): T }`μ `new() => T`λ κ°μ μλ―Έλ€. `new` μ°μ°μλ₯Ό `type`μ μ μ©νλ©΄μ `type`μ μμ±μ μͺ½μΌλ‘ λ§€κ°λ³μλ₯Ό μ λ¬ν΄μΌ ν  λ λ€μμ²λΌ `new(...args)`κ΅¬λ¬Έμ μ¬μ©νλ€.

```ts
const create = <T>(type: { new(...args): T }, ...args): T => new type(...args);
```

- λ€μ μ½λλ `Point`μ μΈμ€ν΄μ€λ₯Ό `{ new(...args): T }` νμ μ μ½μ μ€μ ν `create` ν¨μλ‘ μμ±νλ μμ΄λ€.

```ts
class Point {
  constructor(public x: number, public y: number) {};
}

[ create(Date), create(Point, 0, 0) ].forEach(s => console.log(s));
// 2020-05-22... Point { x: 0, y: 0 }
```

### π μΈλ±μ€ νμ μ μ½
- κ°μ²΄μ μΌμ  μμ±λ€λ§ μΆλ €μ μ’ λ λ¨μν κ°μ²΄λ₯Ό λ§λ€μ΄μΌ ν  λκ° μλ€.

```ts
const obj = {
  name: 'Jane',
  age: 22,
  city: 'Seoul',
  country: 'Korea',
}

const pick = (obj, keys) => keys.map(key => ({ [key]: obj[key] }))
  .reduce((result, value) => ({ ...result, ...value }, {}))

// obj κ°μ²΄μμ nameκ³Ό age λ μμ±λ§ μΆμΆ
pick(obj, ['name', 'age']); // { name: 'Jane', age: 22 }
pick(obj, ['nam', 'agge']); // { name: undefined, age: undefined }
```

- μ μμ μ²λΌ μ€νκ° λ°μνλ©΄ μλ±ν κ²°κ³Όκ° λμ¨λ€. νμμ€ν¬λ¦½νΈλ μ΄λ¬ν μν©μ λ°©μ§ν  λͺ©μ μΌλ‘ λ€μμ²λΌ `keyof T` ννλ‘ νμ μ μ½μ μ€μ ν  μ μκ² μ§μνλ€. μ΄κ²μ **μΈλ±μ€ νμ μ μ½**μ΄λΌκ³  νλ€.

```ts
<T, K extends keyof T>
```

- `keyof T` κ΅¬λ¬ΈμΌλ‘ νμ `K`κ° νμ `T`μ μμ± μ΄λ¦μ΄λΌκ³  νμ μ μ½μ μ€μ νλ€.

```ts
const pick = <T, K extends keyof T>(obj: T, keys: K[]) => 
  keys.map(key => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }, {}))
```

- μ΄λ κ² νλ©΄ μ»΄νμΌμ ν΄λ³΄μ§λ μκ³  μμμ μλ‘ λ  `nam`, `agge`μ κ°μ μλ ₯ μ€λ₯λ₯Ό μ½λ μμ± μμ μ νμ§ν  μ μλ€.

## π¦ λμ λ°μ΄ν° νμ
- νμμ€ν¬λ¦½νΈμμ λμ λ°μ΄ν° νμμ ν©μ§ν© νμκ³Ό κ΅μ§ν© νμ λ κ°μ§ μ’λ₯κ° μλ€.

### π ν©μ§ν© νμ
- ν©μ§ν© νμμ *λλ(or)*μ μλ―ΈμΈ `|` κΈ°νΈλ‘ λ€μν νμμ μ°κ²°ν΄μ λ§λ  νμμ λ§νλ€.
- λ€μ μ½λμμ λ³μ `ns`μ νμμΈ `NumberOrString`μ `number`λ `string` νμμ΄λ―λ‘, 1κ³Ό κ°μ μμ `hello`μ κ°μ λ¬Έμμ΄μ λͺ¨λ λ΄μ μ μλ€.

```ts
type NumberOrString = number | string;
let ns: NumberOrString = 1;
ns = 'hello';
```

### π κ΅μ§ν© νμ
- κ΅μ§ν© νμμ *μ΄κ³ (and)*μ μλ―ΈμΈ `&` κΈ°νΈλ‘ λ€μν νμμ μ°κ²°ν΄μ λ§λ  νμμ λ§νλ€.
- λνμ μΈ μλ‘ λ κ°μ κ°μ²΄λ₯Ό ν΅ν©ν΄μ μλ‘μ΄ κ°μ²΄λ₯Ό λ§λλ κ²μ΄λ€.

```ts
const mergeObjects = <T, U>(a: T, b: U): T & U => ({ ...a, ...b });

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects({ name: 'Jack' }, { age: 32 });
console.log(nameAndAge); // { name: 'Jack', age: 32 }
```

### π μλ³ ν©μ§ν© κ΅¬λ¬Έ
- μλ³ ν©μ§ν¨ κ΅¬λ¬Έμ μ¬μ©νλ €λ©΄ ν©μ§ν© νμμ κ΅¬μ±νλ μΈν°νμ΄μ€λ€μ΄ λͺ¨λ λκ°μ μ΄λ¦μ μμ±μ κ°μ§κ³  μμ΄μΌ νλ€.
- λ€μ μ½λμμ `ISquare`, `IRectangle`, `ICircle`μ λͺ¨λ `tag`λΌλ μ΄λ¦μ κ³΅ν΅ μμ±μ΄ μλ€.

```ts
interface ISquare { tag: 'square', size: number }
interface IRectangle { tag: 'rectangle', width: number, height: number }
interface ICircle { tag: 'circle', radius: number }

type IShape = ISquare | IRectangle | ICircle

const calcArea = (shape: IShape): number => {
  switch(shape.tag) {
    case 'square': return shape.size * shape.size;
    case 'rectangle': return shape.width * shape.height;
    case 'circle': return Math.PI * shape.radius * shape.radius;
  }

  return 0;
}
```

## π¦ νμ κ°λ

- λ€μ μ½λμμ `flyOrSwim` ν¨μλ λ§€κ°λ³μ `o`κ° `Bird`μ΄κ±°λ `Fish`μ΄λ―λ‘ μ½λ μμ±μ΄ λͺ¨νΈν΄μ§ μ μλ€.
- μ¦, κ΅¬μ²΄μ μΌλ‘ `Bird`μΈμ§ `Fish`μΈμ§ μμΌνλ€.

```ts
class Bird { fly() { console.log("I'm flying."); }}
class Fish { swim() { console.log("I'm swimming."); }}

const flyOrSwim = (o: Bird | Fish): void => {
  // o.fly() ???
}
```

### π νμ κ°λ
- νμμ€ν¬λ¦½νΈμμ `instanceof` μ°μ°μλ μλ°μ€ν¬λ¦½νΈμ λ€λ₯΄κ² νμ κ°λ κ°λ₯μ΄ μλ€.
- μ¬κΈ°μ νμ κ°λλ νμμ λ³ννμ§ μμ μ½λ λλ¬Έμ νλ‘κ·Έλ¨μ΄ λΉμ μμ μΌλ‘ μ’λ£λλ μν©μ λ³΄νΈν΄μ€λ€λ μλ―Έλ€.

```ts
const flyOrSwim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    o.fly();
  } else if (o instanceof Fish) {
    o.swim();
  }
}
```

### π is μ°μ°μλ₯Ό νμ©ν μ¬μ©μ μ μ νμ κ°λ ν¨μ μ μ
- νμ κ°λ κΈ°λ₯μ νλ ν¨μλ₯Ό κ΅¬νν  μ μλ€. μ΄λ ν¨μμ λ°ν νμ λΆλΆμ `is`λΌλ μ΄λ¦μ μ°μ°μλ₯Ό μ¬μ©ν΄μΌ νλ€.

```ts
const isFlyable = (o: Bird | Fish): o is Bird => {
  return o instanceof Bird;
}

const isSWimmalbe = (o: Bird | Fish): o is Fish => {
  return o instanceof Fish;
}

const swimOfFly = (o: Fish | Bird) => {
  if (isSwimmable(o)) {
    o.swim();
  } else if (isFlyable(o)) {
    o.fly();
  }
}

[new Bird, new Fish].forEach(swimOfFly); // I'm flying. I'm swimming
```

## π¦ F-λ°μ΄λ λ€νμ±

### π this νμκ³Ό F-λ°μ΄λ λ€νμ±
- νμμ€ν¬λ¦½νΈμμ `this` ν€μλλ νμμΌλ‘λ μ¬μ©λλ€. 
- `this`κ° νμμΌλ‘ μ¬μ©λλ©΄ κ°μ²΄μ§ν₯ μΈμ΄μμ μλ―Ένλ λ€νμ± ν¨κ³Όκ° λλλ°, μΌλ°μ μΈ λ€νμ±κ³Ό κ΅¬λΆνκΈ° μν΄ `this` νμμΌλ‘ μΈν λ€νμ±μ **F-λ°μ΄λ λ€νμ±**μ΄λΌκ³  νλ€.

#### π F-λ°μ΄λ νμ
- F-λ°μ΄λ νμμ΄λ, μμ μ κ΅¬ννκ±°λ μμνλ μλΈνμμ ν¬ν¨νλ νμμ λ§νλ€.
- λ€μ `IAddable<T>`λ `add` λ©μλκ° λ΄κ° μλ λλ₯Ό μμνλ νμμ λ°ννλ F-λ°μ΄λ νμμ΄λ€.

```ts
interface IAddable<T> {
  add(value: T): this
}

interface IMultiplyable<T> {
  multiply(value: T): this
}
```

#### π IValueProvider<T> μΈν°νμ΄μ€ κ΅¬ν
- λ€μ `Calculator` ν΄λμ€λ `IValueProvider<T>` μΈν°νμ΄μ€λ₯Ό κ΅¬ννκ³  μλ€.
- μ΄ ν΄λμ€λ `_value` μμ±μ `private`μΌλ‘ λ§λ€μ΄ `Calculator`λ₯Ό μ¬μ©νλ μ½λμμ `_value`μμ±μ΄ μλ `value()` λ©μλλ‘ μ κ·Όν  μ μκ² μ€κ³λλ€.

```ts
import { IValueProvider } from '../interfaces';

export class Calculator implements IValueProvider<number> {
  constructor(private _value: number = 0) {}
  value(): number { return this._value };
}
```

- κ°μ λ°©μμΌλ‘ λ€μ `StringComposer` λν `IValueProvider<T>`λ₯Ό κ΅¬ννλ€.

```ts
import { IValueProvider } from '../interfaces';

export class StringComposer implements IValueProvider<string> {
  constructor(private _value: string = '') {}
  value(): string { return this._value };
}
```

#### π IAddable<T>μ IMultiplyable<T> μΈν°νμ΄μ€ κ΅¬ν
- `Calculator`μ `add` λ©μλλ ν΄λμ€μ `this`κ°μ λ°ννλλ°, μ΄λ λ©μλ μ²΄μΈ κΈ°λ₯μ κ΅¬ννκΈ° μν΄μμ΄λ€.

```ts
import { IValueProvider, IAddable } from '../interfaces';

export class Calculator implements IValueProvider<number>, IAddable<number> {
  constructor(private _value: number = 0) {}
  value(): number { return this._value };
  add(value: number): this {
    this._value = this._value + value;
    return this;
  }
}
```

- `IMultiplyable<T>`λ κ°μ λ°©λ²μΌλ‘ `Calculator` ν΄λμ€μ κ΅¬ννλ€.

```ts
import { IValueProvider, IAddable, IMultiplyable } from '../interfaces';

export class Calculator implements IValueProvider<number>, IAddable<number>, IMultiplyable<number> {
  constructor(private _value: number = 0) {}
  value(): number { return this._value };
  add(value: number): this {
    this._value = this._value + value;
    return this;
  }
  multiply(value: number): this {
    this._value = this._value * value;
    return this;
  }
}
```

- λ€μμ `Calculator` ν΄λμ€λ₯Ό νμ€νΈνλ μ½λμ΄λ€.

```ts
import { Calculator } from '../classes/Calculator';

const value = (new Calculator(1))
  .add(2) // 3
  .add(3) // 6
  .multiply(4) // 24
  .value()

console.log(value); // 24
```

- `StringComposer`λ `Calculator`λ₯Ό κ΅¬νν λ°©μμ κ·Έλλ‘ μ¬μ©ν΄ κ΅¬νν  μ μλ€.

```ts
import { IValueProvider, IAddable, IMultiplyable } from '../interfaces';

export class StringComposer implements IValueProvider<string>, IAddable<string>, IMultiplyable<number> {
  constructor(private _value: string = '') {}
  value(): string { return this._value };
  add(value: string): this {
    this._value = this._value.concat(value);
    return this;
  }
  multiply(repeat: number): this {
    const value = this.value();
    for (let index = 0; index < repeat; index++) {
      this.add(value);
    }
    return this;
  }
}

// StringComposer-test.ts
import { StringComposer } from '../classes/StringComposer';

const value = new StringComposer('hello')
  .add(' ') // hello
  .add('world') // hello world
  .add('!') // hello world!
  .multiply(3) // hello world!hello world!hello world!hello world!
  .value();

console.log(value); // hello world!hello world!hello world!hello world!
```

- λ°ν νμ `this`λ μ΄λ€ λλ `Calculator`κ° λκΈ°λ νκ³  μ΄λ€ λλ `StringComposer`κ° λκΈ°λνλ€.
- μ΄λ° λ°©μμΌλ‘ λμνλ κ²μ F-λ°μ΄λ λ€νμ±μ΄λΌκ³  νλ€.

## π¦ nullable νμκ³Ό νλ‘κ·Έλ¨ μμ μ±

### π nullable νμμ΄λ?
- μλ°μ€ν¬λ¦½νΈμ νμμ€ν¬λ¦½νΈλ `undefined`μ μ¬μ€μ κ°μ μλ―ΈμΈ `null`μ΄ μλ€. νμμ€ν¬λ¦½νΈμμλ μλ‘ νΈνλλ€.
- `undefined`μ `null` νμμ `nullable` νμμ΄λΌκ³  νλ©°, μ½λλ‘λ λ€μμ²λΌ ννν  μ μλ€.

```ts
type nullable = undefined | null
const nullable: nullable = undefined;
```

- μ΄ `nullable` νμλ€μ νλ‘κ·Έλ¨μ΄ λμν  λ νλ‘κ·Έλ¨μ λΉμ μμΌλ‘ μ’λ£μν€λ μ£ΌμμμΈμ΄ λλ€.
- μ¦, νλ‘κ·Έλ¨μ μμ μ±μ ν΄μΉλ€. ν¨μν μΈμ΄λ€μ μ΄λ₯Ό λ°©μ§νκΈ° μν΄ μ°μ°μλ ν΄λμ€λ₯Ό μ κ³΅νκΈ°λ νλ€.

### π μ΅μ μ²΄μ΄λ μ°μ°μ
- λ³μκ° μ μΈλ§ λμμ λΏ μ΄λ€ κ°μΌλ‘ μ΄κΈ°νλμ§ μμΌλ©΄ μ½λλ₯Ό μμ±ν  λλ λ¬Έμ κ° μμ§λ§, μ€μ λ‘ μ€ννλ©΄(λ°νμ) μ€λ₯κ° λ°μνλ©΄μ νλ‘κ·Έλ¨μ΄ λΉμ μμΌλ‘ μ’λ£νλ€.
- μ΄λ° μ€λ₯λ μμ μ±μ ν΄μΉλ―λ‘ νλ‘κ·Έλλ° μΈμ΄ μ€κ³μλ€μ μ΅μ μ²΄μ΄λ μ°μ°μμ λ λ³ν© μ°μ°μλ₯Ό μ κ³΅νλ€.

```ts
interface IPerson {
  name: string
  age?: number
}

let person: IPerson;

console.log(person?.name) // λ°νμ μ€λ₯ μμ΄ μ μμ μΌλ‘ μ€νλλ©°, undefinedκ°μ΄ λ°νλλ€.
```

### π λ λ³ν© μ°μ°μ
- λ€μ μ½λλ μ΅μ μ²΄μ΄λ μ°μ°μμ λ λ³ν© μ°μ°μλ₯Ό νκΊΌλ²μ μ¬μ©νλλ°, μ΅μ μ²΄μ΄λ μ°μ°μ λΆλΆμ΄ `undefined`κ° λλ©΄ λ λ³ν© μ°μ°μκ° λμν΄ `undefined` λμ  0μ λ°ννλ€.

```ts
type ICoordinates = { longitude: number }
type ILocation = { country: string, coords: ICoordinates }
type IPerson = { name: string, location: ILocation }

let person: IPerson;

let longitude = person?.location?.coords?.longitude ?? 0;
console.log(longitude); // 0
```

### π nullable νμμ ν¨μν λ°©μ κ΅¬ν
- νμμ€ν¬λ¦½νΈ μΈμ΄λ‘ `Option` νμμ κ΅¬νν΄λ³Έλ€.
- λ€μ μ½λμμ `Option` ν΄λμ€λ μ€μΉΌλΌμμ μ¬μ©λλ λ°©μμΌλ‘ λμνλ€.

```ts
import { Some } from './Some';
import { None } from './None';

export class Option {
  private constructor() {}
  static Some<T>(value: T) { return new Some<T>(value); }
  static None = new None();
}

export { Some, None };
```

- `Option` ν΄λμ€λ μμ±μκ° `private`μΌλ‘ μ μΈλμμΌλ―λ‘, `new` μ°μ°μλ‘ `Option` ν΄λμ€μ μΈμ€ν΄μ€λ₯Ό λ§λ€ μ μλ€. 
- μ¦, `Option` νμ κ°μ²΄λ λ€μμ²λΌ `Option.Some(κ°)` νΉμ `Option.None` ννλ‘λ§ μμ±ν  μ μλ€.
- `Some`κ³Ό `None`μ λ λ€ `IValuable<T>`μ `IFunctor<T>`λΌλ μΈν°νμ΄μ€λ₯Ό κ΅¬ννκ³  μλλ°, λ ν΄λμ€λ κ°κΈ° λ€λ₯Έ μ΄ μΈν°νμ΄μ€λ₯Ό κ΅¬ννλ€.
- `IValuable`μ κ΅¬ννλ `Some`κ³Ό `None`μ μ΄ `getOrElse` λ©μλλ₯Ό λ°λμ κ΅¬νν΄μΌ νλ€.

```ts
export interface IValuable<T> {
  getOrElse(defaultValue: T)
}
```

- ν¨μν νλ‘κ·Έλλ° μΈμ΄μμλ `map`μ΄λΌλ λ©μλκ° μλ νμλ€μ νν°λΌκ³  λΆλ₯Έλ€. λ€μμ νμμ€ν¬λ¦½νΈ μΈμ΄λ‘ μ μΈν νν° μΈν°νμ΄μ€μ΄λ€. `Some`κ³Ό `None` ν΄λμ€λ `IValuable`μ λ¬Όλ‘  μ΄ `IFunctor` μΈν°νμ΄μ€λ κ΅¬ννκ³  μμΌλ―λ‘, μ΄ λ ν΄λμ€λ `getOrElse`μ `map`μ΄λΌλ μ΄λ¦μ λ©μλλ₯Ό μ κ³΅νλ€.

```ts
export interface IFunctor<T> {
  map<U>(fn: (value: T) => U)
}
```

#### π Some ν΄λμ€ κ΅¬ν
- `value` μμ±μ `private`μΌλ‘ μ μΈλμ΄ μμΌλ―λ‘ `Some` ν΄λμ€μ μ¬μ©μλ ν­μ `getOrElse` λ©μλλ₯Ό ν΅ν΄ `Some` ν΄λμ€μ λ΄κΈ΄ κ°μ μ»μ΄μΌ νλ€. λν `value`κ°μ λ³κ²½νλ €λ©΄ ν­μ `map` λ©μλλ₯Ό μ¬μ©ν΄μΌλ§ νλ€.

```ts
import { IValuable } from './IValuable';
import { IFunctor } from './IFunctor';

export class Some<T> implements IValuable<T>, IFunctor<T> {
  constructor(private value: T) {}

  getOrElse(defaultValue: T) {
    return this.value ?? defaultValue;
  }
  map<U>(fn: (T) => U) {
    return new Some<U>(fn(this.value));
  }
}
```

#### π None ν΄λμ€ κ΅¬ν
- λ€μμ `None` ν΄λμ€μ κ΅¬ν λ΄μ©μ΄λ€.

```ts
import { IValuable } from "./IValuable";
import { nullable } from "./nullable";
import { IFunctor } from './IFunctor';

export class None implements IValuable<nullable>, IFunctor<nullable> {
  getOrElse<T>(defaultValue: T | nullable) {
    return defaultValue;
  }
  map<U>(fn: (T) => U) {
    return new None;
  }
}
```

#### π Someκ³Ό None ν΄λμ€ μ¬μ©

```ts
import { Option } from '../option/Option';

let m = Option.Some(1);
let value = m.map((value) => value + 1).getOrElse(1);
console.log(value); // 2

let n = Option.None;
value = n.map((value) => value + 1).getOrElse(0)
console.log(value); // 0
```

### π Option νμκ³Ό μμΈ μ²λ¦¬
- `Option` νμμ λΆμ ν¨κ³Όκ° μλ λΆμ ν¨μλ₯Ό μμ ν¨μλ‘ λ§λλ λ° ν¨κ³Όμ μ΄λ€.
- λ€μ `parseNumber` ν¨μλ `parseInt`μ λ°νκ°μ΄ `NaN`μΈμ§μ λ°λΌ `Option.None`μ΄λ `Option.Some` νμμ κ°μ λ°ννλ€.

```ts
import { IFunctor } from "./IFunctor";
import { IValuable } from "./IValuable";
import { Option } from "./Option";

export const perseNumber = (n: string): IFunctor<number> & IValuable<number> => {
  const value = parseInt(n);
  return isNaN(value) ? Option.None : Option.Some(value);
}
```

- λ€μ νμ€νΈ μ½λλ κ°μ± μ μμ μΌλ‘ λ³νλλ©΄ `map` λ©μλκ° λμν΄ 4κ° μΆλ €λμ§λ§, κ°μ΄ λΉμ μμ μ΄λ©΄ `getOrElse(0)`κ° μ κ³΅νλ 0μ μΆλ ₯νλ€.

```ts
import { parseNumber } from '../option/parseNumber';

let value = parseNumber('1')
  .map((value) => value + 1) // 2
  .map((value) => value * 2) // 4
  .getOrElse(0);

console.log(value);

value = parseNumber('hello world')
  .map((value) => value + 1) // μ½λ°± ν¨μκ° νΈμΆλμ§ μλλ€
  .map((value) => value * 2) // μ½λ°± ν¨μκ° νΈμΆλμ§ μλλ€
  .getOrElse(0); // 0

console.log(value); // 0
```

- μλ°μ€ν¬λ¦½νΈμ `JSON.parse` ν¨μλ λ§€κ°λ³μκ° μ μμ μΈ JSON ν¬λ§· λ¬Έμμ΄μ΄ μλλ©΄ μμΈλ₯Ό λ°μμν¨λ€.
- μμΈλ₯Ό λ°μμν€λ ν¨μλ λΆμ ν¨κ³Όκ° μλ λΆμ ν¨μμ΄μ§λ§, λ€μ `parseJson` ν¨μλ `try/catch` κ΅¬λ¬Έκ³Ό `Option`μ νμ©ν΄ μμ ν¨μκ° λμλ€.

```ts
import { IValuable } from './IValuable';
import { IFunctor } from './IFunctor';
import { Option } from './Option';

export const parseJson = <T>(json: string): IValuable<T> & IFunctor<T> => {
  try {
    const value = JSON.parse(json);
    return Option.Some<T>(value);
  } catch (error) {
    return Option.None;
  }
}
```

- λ€μ νμ€νΈ μ½λλ λΉμ μμ μΌλ‘ μ’λ£νμ§ μκ³  μ μμ μΌλ‘ λμνλ€.

```ts
import { parseJson } from '../option/parseJson';

const json = JSON.stringify({
  name: 'Jack',
  age: 32,
});

let value = parseJson(json).getOrElse({});
console.log(value); // { name: 'Jack', age: 32 }

value = parseJson('hello world').getOrElse({});
console.log(value); // {}
```
