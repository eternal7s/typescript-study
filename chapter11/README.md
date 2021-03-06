# π€ Chapter 11: λͺ¨λλ

## π¦ λͺ¨λλ μ΄ν΄νκΈ°
- νλ‘κ·Έλλ°μμ λͺ¨λλλ μΌμ’μ μ½λ μ€κ³ ν¨ν΄μΌλ‘μ λͺ κ°μ μΈν°νμ΄μ€λ₯Ό κ΅¬νν ν΄λμ€λ€.
- λͺ¨λλ ν΄λμ€λ λͺ κ°μ§ κ³΅ν΅μ μΈ νΉμ§μ΄ μλ€.

### π νμ ν΄λμ€λ?
- λͺ¨λλλ₯Ό μ΄ν΄νλ μ²«κ±Έμμ νμ ν΄λμ€κ° μ νμνμ§ μλ κ²μ΄λ€.
- μμ±μμ μλλ₯Ό μ΄ν΄νμ§ λͺ»ν μ½λλ νλ‘κ·Έλ¨μ΄ λΉμ μμ μΌλ‘ μ’λ£λκΈ° λλ¬Έμ μ΄λ₯Ό λ°©μ§νλ €λ©΄ λ§€κ°λ³μ `b`λ λ°λμ `map` λ©μλκ° μλ νμμ΄λΌκ³  νμμ μ νν΄μΌ νλ€.

```ts
const callMap = fn => b => b.map(fn);

// νμμ μ ν
const callMap = <T, U>(fn: (T) => U) => <T extends { map(fn) }>(b: T) => b.map(fn);
```

- λͺ¨λλ λ°©μ μ€κ³λ λ°λμ `map`κ³Ό `of`λΌλ μ΄λ¦μ λ©μλκ° μλ `Monad<T>` ν΄λμ€λ₯Ό λ§λ λ€.

```ts
class Monad<T> {
  constructor(public value: T){}
  static of<U>(value: U): Monad<U> { return new Monad<U>(value) }
  map<U>(fn: (x: T) => U): Monad<U> { return new Monad<U>(fn(this.value)) }
}
```

- μ΄μ²λΌ `Monad<T>`μ κ°μ ν΄λμ€λ₯Ό νμ ν΄λμ€λΌκ³  νλ€. νμ ν΄λμ€λ λ€μμ²λΌ ν¨μλ₯Ό λ§λ€ λ νΉλ³ν νμμΌλ‘ μ μ½νμ§ μμλ λλ€.

```ts
const callMonad = (fn) => (b) => Monad.of(b).map(fn).value;
```

- `Monad<T>`μ κ°μ νμ ν΄λμ€ λλΆμ `callMonad`μ²λΌ νμμ λ°λ₯Έ μμ μ±μ λ³΄μ₯νλ©΄μλ μ½λμ μ¬μ¬μ©μ±μ΄ λ°μ΄λ λ²μ© ν¨μλ₯Ό μ½κ² λ§λ€ μ μλ€.

```ts
callMonad((a: number) => a + 1)(1); // 2
callMonad((a: number[]) => a.map(value => value + 1))([1, 2, 3, 4]); // [2, 3, 4, 5]
```

### π κ³ μ°¨ νμμ΄λ?
- μμ λ³Έ `Monad<T>`λ νμ `T`λ₯Ό `Monad<T>` νμμΌλ‘ λ³ννλ€κ° λκ° λλ©΄ λ€μ νμ `T`λ‘ λ³νν΄μ€λ€.
- `Monad<T>`μ²λΌ νμ `T`λ₯Ό ν λ¨κ³ λ λμ΄λ νμμΌλ‘ λ³ννλ μ©λμ νμμ κ³ μ°¨ νμμ΄λΌκ³  νλ€.

> νμμ€ν¬λ¦½νΈλ 3μ°¨ μ΄μ κ³ μ°¨ νμμ λ§λ€ μλ μλ€

### π μΉ΄νκ³ λ¦¬ μ΄λ‘ 
- https://ko.wikipedia.org/wiki/%EB%B2%94%EC%A3%BC%EB%A1%A0
- μνμμ μ§ν©μ νλ‘κ·Έλλ°μμ νμμ΄λ€. μνμμ μΉ΄νκ³ λ¦¬λ μ§ν©μ μ§ν©μΌλ‘ μ΄ν΄ν  μ μλ€.
- νλ‘κ·Έλλ°μμ μΉ΄νκ³ λ¦¬λ νμμ νμ, μ¦ κ³ μ°¨ νμμΌλ‘ μ΄ν΄ν  μ μλ€. κ·Έλ¦¬κ³  λͺ¨λλλ λ³λμ νΉμ§μ΄ μλ κ³ μ°¨ νμμ΄λ€.

### π ννμ§λλ κ·κ²©
- λͺ¨λλλ λͺ¨λλ λ£°μ΄λΌκ³  νλ μ½λ μ€κ³ μμΉμ λ§μΆ° κ΅¬νλ ν΄λμ€λ₯Ό μλ―Ένλ€.
- ννμ§λλ κ·κ²©μ΄λ, νμ€μΌ νμ€ λΌμ΄λΈλ¬λ¦¬ κ΅¬μ‘°λ₯Ό μλ°μ€ν¬λ¦½νΈ λ°©μμΌλ‘ μ¬κ΅¬μ±ν κ²μ΄λ€.
- [μ΄λ―Έμ§ μ°Έκ³ ](https://github.com/fantasyland/fantasy-land)
- μ΄λ€ ν΄λμ€μ λ€μ λ€ κ°μ§ μ‘°κ±΄μ λͺ¨λ λ§μ‘±νλ€λ©΄ κ·Έ ν΄λμ€λ λͺ¨λλμ΄λ€.

> - νν°(Functor): `map`μ΄λΌλ μΈμ€ν΄μ€ λ©μλλ₯Ό κ°μ§λ ν΄λμ€
> - μ΄νλΌμ΄(Apply): νν°μ΄λ©΄μ `ap`λΌλ μΈμ€ν΄μ€ λ©μλλ₯Ό κ°μ§λ ν΄λμ€
> - μ νλ¦¬μ»€ν°λΈ(Applicative): μ΄νλΌμ΄μ΄λ©΄μ `of`λΌλ ν΄λμ€ λ©μλλ₯Ό κ°μ§λ ν΄λμ€
> - μ²΄μΈ(Chain): μ νλ¦¬μ»€ν°λΈμ΄λ©΄μ `chain`μ΄λΌλ λ©μλλ₯Ό κ°μ§λ ν΄λμ€

### π λͺ¨λλ λ£°
- μ΄λ€ ν΄λμ€μ μ΄λ¦μ΄ `M`μ΄κ³  μ΄ ν΄λμ€μ μΈμ€ν΄μ€λ₯Ό `m`μ΄λΌκ³  ν  λ λͺ¨λλλ μ νλ¦¬μ»€ν°λΈμ μ²΄μΈμ κΈ°λ₯μ κ°μ§κ³  μκ³ , λ€μκ³Ό κ°μ λ κ°μ§ λ²μΉμ λ§μ‘±νκ² κ΅¬νν ν΄λμ€μ΄λ€.
- λͺ¨λλ λ£°μ μΌμͺ½ λ²μΉκ³Ό μ€λ₯Έμͺ½ λ²μΉ

|κ΅¬λΆ|μλ―Έ|
|:---:|:---:|
|μΌμͺ½ λ²μΉ|`M.of(a).chain(f) == f(a)`|
|μ€λ₯Έμͺ½ λ²μΉ|`m.chain(M.of) == m`|

- [ννμ§λλ Monad](https://github.com/fantasyland/fantasy-land#monad)

## π¦ Identity λͺ¨λλ μ΄ν΄μ κ΅¬ν

### π κ° μ»¨νμ΄λ κ΅¬νμ© IValuable<T> μΈν°νμ΄μ€ κ΅¬ν
- μ΄ μ»¨νμ΄λ ν΄λμ€λ `number`μ κ°μ κ΅¬μ²΄μ μΈ νμμ κ°μ κ°μ§λ κ²μ΄ μλλΌ, λͺ¨λ  νμ `T`μ κ°μ κ°μ§ μ μλ μ λ€λ¦­ μ»¨νμ΄λ ν΄λμ€λ₯Ό μκ°ν  μ μλ€.
- μ΄μ²λΌ νμ `T`λ₯Ό κ°μ§λ κ°μ μ»¨νμ΄λλ₯Ό **κ° μ»¨νμ΄λ**λΌκ³  νλ€.

### π ν΄λμ€ μ΄λ¦μ΄ μ IdentityμΈκ°?
- ν¨μν νλ‘κ·Έλλ°μμ `identity`λ ν­μ λ€μμ²λΌ κ΅¬ννλ νΉλ³ν μλ―Έμ ν¨μλ€.

```ts
const identity = <T>(value: T): T => value;
```

- `Identity`λ `map`, `ap`, `of`, `chain`κ³Ό κ°μ κΈ°λ³Έ λ©μλλ§ κ΅¬νν λͺ¨λλμ΄λ€. μΉ΄νκ³ λ¦¬ μ΄λ‘ μμ μμ μ νμμμ λ€λ₯Έ νμμΌλ‘ κ°λ€κ° λμμ¬ λ κ°μ΄ λ³κ²½λμ§ μλ μΉ΄νκ³ λ¦¬λ₯Ό `Identity`λΌκ³  λΆλ₯Έλ€.

### π κ° μ»¨νμ΄λλ‘μμ Identity<T> κ΅¬ννκΈ°

```ts
import { IValuable } from '../interfaces/IValuable';

export class Identity<T> implements IValuable<T> {
  constructor(private _value: T) {}
  value() { return this._value };
};
```

### π ISetoid<T> μΈν°νμ΄μ€μ κ΅¬ν
- ννμ§λλ κ·κ²©μμ `setoid`λ `equals`λΌλ μ΄λ¦μ λ©μλλ₯Ό μ κ³΅νλ μΈν°νμ΄μ€λ₯Ό μλ―Ένλ©°, νμμ€ν¬λ¦½νΈλ‘λ λ€μμ²λΌ κ΅¬νν  μ μλ€.

```ts
import { IValuable } from './IValuable';

export interface ISetoid<T> extends IValuable<T> {
  equals<U>(value: U): boolean;
};
```

- μ΄μ  `Identity<T>`μ `ISetoid<T>`λ₯Ό κ΅¬ννλ€.

```ts
import { ISetoid } from '../interfaces/ISetoid';

export class Identity<T> implements ISetoid<T> {
  constructor(private _value: T) {}
  value() { return this._value };
  equals<U>(that: U): boolean {
    if(that instanceof Identity) {
      return this.value() == that.value();
    }

    return false;
  }
};
```

- νμ€νΈ μ½λλ₯Ό μμ±

```ts
import { Identity } from '../classes/Identity';

const one = new Identity(1);
const anotherOne = new Identity(1);
const two = new Identity(2);

console.log(
  one.equals(anotherOne), // true
  one.equals(two), // false
  one.equals(1), // false
  one.equals(null), // false
  one.equals([1]), // false
);
```

- μ½λλ `Identity<number>` νμ λ³μκ° `one`μ΄ λκ°μ `Identity<number>` νμ λ³μ `anotherOne`κ³Ό λΉκ΅ν  λλ§ `true`λ‘ λ°ννκ³  μλ€.

### π IFunctor<T> μΈν°νμ΄μ€μ κ΅¬ν
- ννμ§λλ κ·κ²©μμ νν°λ `map`μ΄λΌλ λ©μλλ₯Ό μ κ³΅νλ μΈν°νμ΄μ€μ΄λ€.
- λ€μ μ½λλ νμμ€ν¬λ¦½νΈ μΈμ΄μ νΉμ±μ κ³ λ €ν΄ κ΅¬νν κ²μΌλ‘, μΉ΄νκ³ λ¦¬ μ΄λ‘ μμ νν°λ μλνν°(endofunctor)λΌλ νΉλ³ν μ±μ§μ λ§μ‘±μμΌμΌ νλ€.

```ts
export interface IFunctor<T> {
  map<U>(fn: (x: T) => U);
}
```

### π μλνν°λ?
- μλνν°λ νΉμ  μΉ΄νκ³ λ¦¬μμ μΆλ°ν΄λ λμ°© μΉ΄νκ³ λ¦¬λ λ€μ μΆλ° μΉ΄νκ³ λ¦¬κ° λκ² νλ νν°λ₯Ό μλ―Ένλ€.
- λ€μ `Identity<T>`μ `map` λ©μλμ κ΅¬ν λ΄μ©μ μ€λνν°λ‘ λμνκ² νλ μ½λμ΄λ€.

```ts
import { ISetoid } from '../interfaces/ISetoid';
import { IFunctor } from '../interfaces/IFunctor';

export class Identity<T> implements ISetoid<T>, IFunctor<T> {
  constructor(private _value: T) {}
  // IValuable
  value() { return this._value };
  // ISetiod
  equals<U>(that: U): boolean {
    if(that instanceof Identity) {
      return this.value() == that.value();
    }

    return false;
  }
  // IFunctor
  map<U>(fn: (x: T) => U) {
    return new Identity<U>(fn(this.value()));
  }
};
```

### π IApply<T> μΈν°νμ΄μ€μ κ΅¬ν
- ννμ§λλ κ·κ²©μμ μ΄νλΌμ΄(apply)λ μμ μ νν°μ΄λ©΄μ λμμ `ap`λΌλ λ©μλλ₯Ό μ κ³΅νλ μΈν°νμ΄μ€μ΄λ€.

```ts
import { IFunctor } from "./IFunctor";

export interface IApply<T> extends IFunctor<T> {
  ap<U>(b: U);
}
```

- κ·Έλ°λ° `IApply`λ₯Ό κ΅¬ννλ μ»¨νμ΄λλ κ° μ»¨νμ΄λλ‘μλΏλ§ μλλΌ κ³ μ°¨ ν¨μ μ»¨νμ΄λλ‘μλ λμνλ€.

```ts
import { ISetoid } from '../interfaces/ISetoid';
import { IApply } from '../interfaces/IApply';

export class Identity<T> implements ISetoid<T>, IApply<T> {
  // μλ΅..
  // IApply
  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return Identity.of<U>((f as Function)(b));
    }
  }
};
```

### π IApplicative<T> μΈν°νμ΄μ€μ κ΅¬ν
- ννμ§λλ κ·κ²©μμ μ νλ¦¬μ»€ν°λΈλ κ·Έ μμ μ΄ μ΄νλΌμ΄μ΄λ©΄μ `of`λΌλ ν΄λμ€ λ©μλλ₯Ό μΆκ°λ‘ μ κ³΅νλ μΈν°νμ΄μ€μ΄λ€.
- κ·Έλ°λ° νμ¬ νμμ€ν¬λ¦½νΈμμλ μΈν°νμ΄μ€μ μ μ  λ©μλλ₯Ό κ΅¬ννμ§ λͺ»νλ€.

```ts
import { IApply } from "./IApply";

export interface IApplicative<T> extends IApply<T> {
  // static of(value: T);
}
```

- λ€μ μ½λλ `Identity` ν΄λμ€μ `of` ν΄λμ€ λ©μλλ₯Ό κ΅¬νν μμ΄λ€.

```ts
import { ISetoid } from '../interfaces/ISetoid';
import { IApplicative } from '../interfaces/IApplicative';

export class Identity<T> implements ISetoid<T>, IApplicative<T> {
  // μλ΅..
  // IApplicative
  static of<T>(value: T): Identity<T> {
    return new Identity<T>(value);
  }
};
```

### π IChain<T> μΈν°νμ΄μ€μ κ΅¬ν
- ννμ§λλ κ·κ²©μμ μ²΄μΈμ κ·Έ μμ μ΄ μ΄νλΌμ΄μ΄λ©΄μ `chain`μ΄λΌλ λ©μλλ₯Ό κ΅¬ννλ μΈν°νμ΄μ€μ΄λ€.

```ts
import { IApply } from './IApply';

export interface IChain<T> extends IApply<T> {
  chain<U>(fn: (T) => U);
}
```

- `chain` λ©μλλ νν°μ `map`κ³Ό λ¬λ¦¬ μλνν°λ‘ κ΅¬νν΄μΌ ν  μλ¬΄κ° μλ€.

```ts
import { ISetoid } from '../interfaces/ISetoid';
import { IApplicative } from '../interfaces/IApplicative';
import { IChain } from '../interfaces/IChain';

export class Identity<T> implements ISetoid<T>, IChain<T>, IApplicative<T> {
  // μλ΅..
  // IChain
  chain<U>(fn: (T) => U): U {
    return fn(this.value());
  }
};
```

- μλνλμΈ `map`μ ν­μ κ°μ μΉ΄νκ³ λ¦¬μ λ¨Έλ¬΄λ₯Έλ€. λ°λ©΄μ `chain`μ μμ μ΄ λ¨Έλ¬΄λ₯΄κ³  μΆμ μΉ΄νκ³ λ¦¬λ₯Ό μ€μ€λ‘ μ ν΄μΌ νλ€.

```ts
import { Identity } from '../classes/Identity';

console.log(
  Identity.of(1).map((value) => `the count is ${value}`).value(),
  Identity.of(1).chain((value) => Identity.of(`the count is ${value}`)).value(),
);
// the count is 1 the count is 1
```

### π IMonad<T> μΈν°νμ΄μ€μ κ΅¬ν
- ννμ§λλ κ·κ²©μμ λͺ¨λλλ λ€μμ²λΌ μ²΄μΈκ³Ό μ νλ¦¬μ»€ν°λΈλ₯Ό κ΅¬νν κ²μ΄λ€.

```ts
import { IChain } from './IChain';
import { IApplicative } from './IApplicative';

export interface IMonad<T> extends IChain<T>, IApplicative<T> {};
```

- λ€μμ `Identity<T>` λͺ¨λλκ° μμ±λ κ²μ΄λ€.

```ts
import { ISetoid } from '../interfaces/ISetoid';
import { IMonad } from '../interfaces/IMonad';

export class Identity<T> implements ISetoid<T>, IMonad<T> {
  constructor(private _value: T) {}
  // IValuable
  value() { return this._value };
  // ISetiod
  equals<U>(that: U): boolean {
    if(that instanceof Identity) {
      return this.value() == that.value();
    }

    return false;
  }
  // IFunctor
  map<U>(fn: (x: T) => U) {
    return new Identity<U>(fn(this.value()));
  }
  // IApply
  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return Identity.of<U>((f as Function)(b));
    }
  }
  // IApplicative
  static of<T>(value: T): Identity<T> {
    return new Identity<T>(value);
  }
  // IChain
  chain<U>(fn: (T) => U): U {
    return fn(this.value());
  }
};
```

- λ€μ μ½λλ μμ±λ `Identity<T>` λͺ¨λλκ° `M.of(a).chain(f) == f(a)` μΌμͺ½ λ²μΉμ λ§μ‘±νλμ§ νμ€νΈνλ λ΄μ©μ΄λ€.

```ts
import { Identity } from '../classes/Identity';

const a = 1;
const f = a => a * 2;

console.log(
  Identity.of(a).chain(f) == f(a), // true
);
```

- λ€μμ `Identity<T>`κ° `m.chain(M.of) == m` λͺ¨λλ μ€λ₯Έμͺ½ λ²μΉμ μΆ©μ‘±νλμ§λ₯Ό νμ€νΈνλ λ΄μ©μ΄λ€.

```ts
import { Identity } from '../classes/Identity';

const m = Identity.of(1);

console.log(
  m.chain(Identity.of).equals(m),
);
```

- λ€μ μ½λλ λ§μΉ λ°°μ΄μ `map`, `filter` λ©μλλ₯Ό λ©μλ μ²΄μΈμΌλ‘ μ½λ©νλ―, `Identity` νμ κ°μ²΄ `jack`μ λ©μλλ€μ μ²΄μΈ ννλ‘ νΈμΆνλ€.
- λͺ¨λλλ μ΄μ²λΌ μ μΈν νλ‘κ·Έλλ°μ μΌλμ λκ³  μ€κ³λ κ²μ΄λ€.

```ts
import { Identity } from '../classes/Identity';

type IPerson = {
  name: string,
  age: number,
};

const jack = Identity.of(['Jack', 32]);

console.log(
  jack
    .map(([name, age]) => ({ name, age }))
    .chain((p: IPerson) => Identity.of(p))
    .map(({ name, age }) => [name, age])
    .value()[0] === jack.value()[0] // true
);
```

## π¦ Maybe λͺ¨λλ μ΄ν΄μ κ΅¬ν

### π Maybe λͺ¨λλλ?
- Maybeλ μ€λ₯μΌ λμ μ μμ μΌ λλ₯Ό λͺ¨λ κ³ λ €νλ©΄μλ μ¬μ©νλ μͺ½ μ½λλ₯Ό κ°κ²°νκ² μμ±ν  μ μκ² ν΄μ€λ€.
- Maybe λͺ¨λλλ 10μ₯μ `Option`μ `Some`, `None`κ³Ό λΉμ·ν μλ―Έλ₯Ό κ°μ§ `Just`μ `Nothing`μ΄λΌλ λ κ°μ§ νμμ μ κ³΅νλ€.
- `Maybe`λ κ·Έ μμ²΄κ° λͺ¨λλκ° μλλΌ, `Maybe`κ° μ κ³΅νλ `Just<T>`μ `Nothing`νμμ΄ λͺ¨λλμ΄λ€.

```ts
export class Maybe<T> {
  static Just<U>(value: U) {
    return new Just<U>(value);
  }
  static Nothing = new Nothing;
}
```

- `Maybe`μ μ΄λ° μ€κ³ λͺ©μ μ μ½λμ μμ μ±μ ν¨μν λ°©μμΌλ‘ λ³΄μ₯νκΈ° μν΄μμ΄λ€.
- μ½λμ μ μ©λλ κ°μ λ°λΌ μ΄λ€ λλ μ μμ μ΄κ³  μ΄λ€ λλ `undefined`, `null`, `Infinity` λ±μ κ°μ μ λ°ν  λ `Maybe`λ₯Ό μ¬μ©νλ©΄ λ§€μ° ν¨μ¨μ μΈ λ°©μμΌλ‘ μ½λλ₯Ό μμ±ν  μ μλ€.

### π Maybeκ° ν¨μμ λ°ν νμμΌ λμ λ¬Έμ μ 
- νμ¬ νμμ€ν¬λ¦½νΈλ `Just<number> | Nothing`κ³Ό κ°μ λ ν΄λμ€μ ν©μ§ν© νμμ λ§λλ©΄ μ€λ₯κ° λ°μνλ€.
- νμμ€ν¬λ¦½νΈμ μ΄λ¬ν νΉμ± λλ¬Έμ `Maybe` ν΄λμ€λ λ€μ `_IMaybe` μΈν°νμ΄μ€μ `IMonad` μΈν°νμ΄μ€λ₯Ό ν©ν΄ λμ `IMaybe` νμμ μ κ³΅νλ€.

```ts
export interface _IMaybe<T> {
  isJust(): boolean;
  isNothing(): boolean;
  getOrElse(defaultValue: T): T;
};
```

### π Just λͺ¨λλ κ΅¬ν
- `Identity`λͺ¨λλμ λ¬λ¦¬ `ISetoid`μΈν°νμ΄μ€λ₯Ό κ΅¬ννμ§ μλλ°, μ΄λ `Just`κ° `Nothing`μΌ λλ₯Ό κ³ λ €ν΄ `value()`κ° μλ `getOrElse(0)`κ³Ό κ°μ ννλ‘ λμνλ κ²μ μΌλν΄ λ κ²μ΄λ€.

```ts
import { _IMaybe } from './_IMaybe';
import { IMonad } from '../interfaces/IMonad';

export class Just<T> implements _IMaybe<T>, IMonad<T> {
  constructor(private _value: T) {}
  value(): T { return this._value; }

  // IApplicative
  static of<T>(value: T): Just<T> {
    return new Just<T>(value);
  }

  // IMaybe
  isJust() { return true }
  isNothing() { return false }
  getOrElse<U>(defaultValue: U) { return this.value() }

  // IFunctor
  map<U, V>(fn: (x: T) => U): Just<U> {
    return new Just<U>(fn(this.value()));
  }

  // IApply
  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return Just.of<U>((f as Function)(b))
    }
  }
  
  // IChain
  chain<U>(fn: (T) => U): U {
    return fn(this.value());
  }
}
```

### π Nothing λͺ¨λλ κ΅¬ν
- `Nothing` λͺ¨λλλ `Just` λͺ¨λλμ λ¬λ¦¬ μ½λλ₯Ό μλ²½νκ² μ€νμν€μ§ μλ κ²μ΄ μ€κ³ λͺ©μ μ΄λ€.

```ts
import { _IMaybe } from './_IMaybe';
import { IMonad } from '../interfaces/IMonad';

export class Nothing implements _IMaybe<null>, IMonad<null> {
  // IApplicative
  static of<T>(value: T = null): Nothing { return new Nothing; }

  // IMaybe
  isJust() { return false; }
  isNothing() { return true; }
  getOrElse<U>(defaultValue: U) { return defaultValue; }

  // IFunctor
  map<U, V>(fn: (x) => U): Nothing { return new Nothing }

  // IApply
  ap<U>(b: U) {
    return new Nothing;
  }

  // IChain
  chain<U>(fn: (T) => U): Nothing { return new Nothing; }
}
```

### π Justμ Nothing λͺ¨λλ λ¨μ νμ€νΈ
- λ€μ νμ€νΈ μ½λλ `Just`κ° `Identity`μ²λΌ μ μμ μΈ λͺ¨λλλ‘ λμνλ©΄μ `_IMaybe` μΈν°νμ΄μ€ κΈ°λ₯μ μΆκ°λ‘ μ κ³΅νλ κ²μ λ³΄μ¬μ€λ€.

```ts
import * as R from 'ramda';

import { Just } from '../classes/Just';

console.log(
  Just.of(100).isJust(), // true
  Just.of(100).isNothing(), // false
  Just.of(100).getOrElse(1), // 100
  Just.of(100).map(R.identity).getOrElse(1), // 100
  Just.of(R.identity).ap(100).getOrElse(1), // 100
  Just.of(100).chain(Just.of).getOrElse(1), // 100
);
```

- `Nothing` λͺ¨λλλ `Just`μ λ¬λ¦¬ μμ μ λͺ¨λλ κ΄λ ¨ μ½λλ₯Ό λμμν€μ§ λ§μμΌ νλ€.
- λν, `undefined`λ  `null`, `NaN`, `Infinity`μ κ°μ κ°μ λ°νν΄μλ μ λλ€.

```ts
import { Nothing } from '../classes/Nothing';
import { Just } from '../classes/Just';

console.log(
  Nothing.of().isJust(), // false
  Nothing.of().isNothing(), // true
  Nothing.of().getOrElse(1), // 1
  Nothing.of().map((x) => x + 1).getOrElse(1), // 1
  Nothing.of().ap(1).getOrElse(1), // 1
  Nothing.of().chain(Just.of).getOrElse(1), // 1
);
```

### π Maybe νμ€νΈ
- μ μ²΄μ μΈ μμ  λ΄μ©μ μ± λλ μ½λ μ°Έκ³  (P.318 ~ P.319)
- λ€μ `getJokeAsMaybe` ν¨μλ μ μμ μΈ λ°μ΄ν°λ `Maybe.Just`λ‘ μ²λ¦¬νκ³ , μ€λ₯κ° λ°μνλ©΄ `reject` ν¨μλ₯Ό νΈμΆνμ§ μκ³  `Maybe.Nothing`μ λ°ννλ€.

```ts
import * as R from 'ramda';

import { JokeType, getRandomJoke } from './getRandomJoke';
import { IMaybe, Maybe } from './classes/Maybe';

const _getJokeAsMaybe = async() => {
  const jockItem: JokeType = await getRandomJoke();
  const jock = R.view(R.lensProp('joke'), jockItem);
  return jock;
}

export const getJokeAsMaybe = () => new Promise<IMaybe<string>>((resolve, reject) => {
  _getJokeAsMaybe()
    .then((jock: string) => resolve(Maybe.Just(jock)))
    .catch(e => resolve(Maybe.Nothing)); // rejectκ° μλ resolve
});

export { IMaybe, Maybe };
```

- `getJokeAsMaybe`λ μλ¬κ° λ°μνλ©΄ `reject` νΈμΆ λμ  `Maybe.Nothing`μ λ°ννλ―λ‘ λ€μ νμ€νΈ μ½λλ `catch`λ¬Έμ΄ μμ΄ κ°κ²°νλ€.

```ts
import { getJokeAsMaybe, IMaybe } from '../getJokeAsMaybe';

(async() => {
  const joke: IMaybe<string> = await getJokeAsMaybe();
  console.log(joke.getOrElse('something wrong'));
})();
```

- `Maybe`λ μ΄μ²λΌ μ€λ₯μΌ λμ μ μμΌ λλ₯Ό λͺ¨λ κ³ λ €νλ©΄μλ μ¬μ©νλ μͺ½ μ½λλ₯Ό λ§€μ° κ°κ²°νκ² μμ±ν  μ μκ² ν΄μ€λ€.

## π¦ Validation λͺ¨λλ μ΄ν΄μ κ΅¬ν

### π Validation λͺ¨λλλ?
- λ°μ΄ν°λ μλλ° κ·Έ λ°μ΄ν°κ° μ ν¨νμ§λ₯Ό νλ¨νλ μ©λλ‘ μ€κ³λ λͺ¨λλκ° `Validation`μ΄λ€.
- `Validation` λͺ¨λλλ ννμ§λλμ μ΄νλΌμ΄ κ·κ²©μ μμ‘΄ν΄ λμνλ€.
- `Validation` ν΄λμ€λ `Maybe`μ λΉμ·νκ² `Success`μ `Failure` λ κ°μ§ λͺ¨λλλ‘ κ΅¬μ±λλ€.
- `Success`μ `Failure` λͺ¨λλλ κΈ°λ³Έμ μΌλ‘ `Identity` λͺ¨λλμ `ap` λ©μλ λ°©μμΌλ‘ λμνλ€. `ap` λ©μλλ₯Ό μ¬μ©ν γ· λλ `Identity` λͺ¨λλμ `value`κ° ν¨μμ¬μΌ νλ€.

```ts
import { Identity } from '../classes/Identity';

const add = (a: number) => (b: number) => a + b;

console.log(
  add(1)(2),  // 3
  Identity.of(add).ap(1).ap(2).value(), // 3
);
```

### π Validation ν΄λμ€ κ΅¬μ‘°
- `Validation` ν΄λμ€λ `Maybe`μ λΉμ·νκ² `Success`μ `Failure` λ κ°μ§ λͺ¨λλλ‘ κ΅¬μ±λλ€.

```ts
import { Success } from './Success';
import { Failure } from './Failure';

export class Validation {
  static Success = Success;
  static Failure = Failure;
  static of<T>(fn: T): Success<T> {
    return this.Success.of<T>(fn);
  }
}

export { Success, Failure };
```

- `Success`μ `Failure` λͺ¨λλλ λ€μ μΈν°νμ΄μ€λ₯Ό κ΅¬ννκ³  μλ€.

```ts
export interface IValidation<T> {
  isSuccess: boolean;
  isFailure: boolean;
};
```

### π Success λͺ¨λλ κ΅¬ν
- `Success` λͺ¨λλλ `IChain` ννλ‘λ λμνμ§ μμΌλ―λ‘ `IFunctor`μ `IApply`, `IApplicative`λ§ κ΅¬ννλ€.
- κ·Έλ¦¬κ³  λ€λ₯Έ λ©μλλ€κ³Ό λ¬λ¦¬ `ap` λ©μλλ λ§€κ°λ³μκ° `Failure` μΈμ§μ λ°λΌ μ‘°κΈ λ€λ₯΄κ² λμνλ€.

```ts
import { IApply } from '../interfaces/IApply';
import { IFunctor } from '../interfaces/IFunctor';
import { IValidation } from '../interfaces/IValidation';

export class Success<T> implements IValidation<T>, IFunctor<T>, IApply<T> {
  constructor(public value: T, public isSuccess = true, public isFailure = false) {}

  // IApplicative
  static of<U>(value: U): Success<U> {
    return new Success<U>(value);
  }

  // IFunctor
  map<U>(fn: (x: T) => U) {
    return new Success<U>(fn(this.value));
  }

  // IApply
  ap(b) {
    return b.isFailure ? b : b.map(this.value);
  }
}
```

- `Success` ν΄λμ€μ `value`λ νμ¬ ν¨μλ€.
- λ€μ νμ€νΈ μ½λλ₯Ό μ€νν΄ λ³΄λ©΄, `checkSuccess` 2μ°¨ κ³ μ°¨ ν¨μκ° μ΅μ’μ μΌλ‘ `boolean` νμμ κ°μ λ°ννλ―λ‘ μ΅μ’ `Success` κ°μ²΄μ `value`κ°μ `true`μ΄λ€.

```ts
import { Success } from '../classes/Success';

const checkSuccess = <T>(a: Success<T>) => (b: Success<T>): boolean =>
  [a, b].filter(({ isFailure }) => isFailure === true).length === 0;

console.log(
  Success.of(checkSuccess)
    .ap(Success.of(1))
    .ap(Success.of(2))
);
// Success { value: true, isSuccess: true, isFailure: false }
```

### π Failure λͺ¨λλ κ΅¬ν
- `Failure` λͺ¨λλλ μ΅μ’μ μΌλ‘ μλν μμΈμ λ¬Έμμ΄ λ°°μ΄λ‘ μ μ₯νλ€.

```ts
import { IApply } from '../interfaces/IApply';
import { IFunctor } from '../interfaces/IFunctor';
import { IValidation } from '../interfaces/IValidation';

export class Failure<T> implements IValidation<T>, IFunctor<T>, IApply<T> {
  constructor(public value: T[], public isSuccess = false, public isFailure = true) {}

  // IApplicative
  static of<U>(value: U[]): Failure<U> {
    return new Failure<U>(value);
  }

  // IFunctor
  map(fn) {
    return new Failure<T>(fn(this.value));
  }

  // IApply
  ap(b) {
    return b.isFailure ? new Failure<T>([...this.value, ...b.value]) : this;
  }
}
```

### π λΉλ°λ²νΈ κ²μ¦ κΈ°λ₯ κ΅¬ν

- λΉλ°λ²νΈ κ²μ¦μ `password`λΌλ μμ±μ΄ μμ΄μΌ νκ³ , μ΄ μμ±μ `string` νμμ κ°μ΄ λ€μ΄ μμ΄μΌ νλ€.

```ts
import { Failure } from '../classes/Failure';
import { Success } from '../classes/Success';

export const checkNull = <S, F>(o: { password?: string }) => {
  const { password } = o;

  return (password === undefined || typeof password !== 'string') ?
    new Failure(['Password can not be null']) : new Success(o);
};
```

- λ¬Έμμ΄ κΈΈμ΄κ° μ΅μ 6μ μ΄μμ΄μ΄μΌ νλ€λ λ± κ²μ¦μ λ€μ `checkLength` ν¨μλ‘ κ΅¬ννλ€.

```ts
import { Failure } from '../classes/Failure';
import { Success } from '../classes/Success';

export const checkLength = (o: { password?: string }, minLength: number = 6) => {
  const { password } = o;

  return (!password || password.length < minLength) ?
    new Failure(['Password must have more than 6 characters']) : new Success(o);
};
```

- λ€μ μ½λμμ `checkPassword` ν¨μλ μ΄λ¬ν λ΄μ©μ κ΅¬νν μμ΄λ€.

```ts
import { Validation } from './classes/Validation';
import { checkNull } from './utils/checkNull';
import { checkLength } from './utils/checkLength';

export const checkPassword = (o): [object, string[]] => {
  const result = Validation.of(a => b => o)
    .ap(checkNull(o))
    .ap(checkLength(o));

  return result.isSuccess ? [result.value, undefined] : [undefined, result.value];
};
```

- λ€μμ `checkPassword` ν¨μλ₯Ό νμ€νΈνλ μ½λμ΄λ€.

```ts
import { checkPassword } from '../checkPassword';

[
  { password: '123456' },
  { password: '1234' },
  {},
  { pa: '123456' },
]
  .forEach((target, index) => {
    const [ value, failureReason ] = checkPassword(target);

    if (failureReason) {
      console.log(index, 'validation fail.', JSON.stringify(failureReason));
    } else {
      console.log(index, 'validation ok.', JSON.stringify(value));
    }
  });

// 0 validation ok. {"password":"123456"}
// 1 validation fail. ["Password must have more than 6 characters"]
// 2 validation fail. ["Password can not be null","Password must have more than 6 characters"]
// 3 validation fail. ["Password can not be null","Password must have more than 6 characters"]
```

### π μ΄λ©μΌ μ£Όμ κ²μ¦ κΈ°λ₯ κ΅¬ν
- μ κ·μμ μ¬μ©ν μ ν½μ± κ²μ¦ νλ³

```ts
import { Success } from '../classes/Success';
import { Failure } from '../classes/Failure';

export const checkEmailAddress = (o: { email?: string }) => {
  const { email } = o;

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(email) ? new Success(email) : new Failure(['invalid email address']);
};
```

- λ€μ `checkEmail` ν¨μλ `checkEmailAddress` μ νΈλ¦¬ν° ν¨μλ₯Ό μ¬μ©ν΄ λ°μ΄ν° μ ν¨μ±μ νλ³νλ λ΄μ©μ΄λ€.

```ts
import { Validation } from './classes/Validation';
import { checkEmailAddress } from './utils/checkEmailAddress';

export const checkEmail = (o): [object, string[]] => {
  const result = Validation.of(a => o)
    .ap(checkEmailAddress(o));

  return result.isSuccess ? [result.value, undefined] : [undefined, result.value];
};
```

- λ€μμ νμ€νΈ μ½λμ΄λ€.

```ts
import { checkEmail } from '../checkEmail';

[
  { email: 'abc@efg.com' },
  { email: 'abcefg' },
].forEach((target, index) => {
  const [ value, failureReason ] = checkEmail(target);

  if (failureReason) {
    console.log(index, 'validation fail.', JSON.stringify(failureReason));
  } else {
    console.log(index, 'validation ok.', JSON.stringify(value));
  }
});

// 0 validation ok. {"email":"abc@efg.com"}
// 1 validation fail. ["invalid email address"]
```

## π¦ IO λͺ¨λλ μ΄ν΄μ κ΅¬ν

### π IO λͺ¨λλλ?
- `Promise` νμ κ°μ²΄λ μμ±ν  λ λκ²¨μ£Όλ μ½λ°± ν¨μκ° `then` λ©μλλ₯Ό νΈμΆν΄μΌ λΉλ‘μ λμνλλ°, μ΄λ² μ μμ μ€λͺνλ IO λͺ¨λλλ μ΄λ° λ°©μμΌλ‘ λμνλ€.

```ts
import { IO } from './classes/IO';

const work = () => {
  console.log('work called...');
  return { name: 'Jack', age: 32 };
}

const result = IO.of(work).runIO(); // runIO λ©μλκ° νΈμΆλλ©΄ κ·Έλ λμνλ€.
console.log(result); // { name: 'Jack', age: 32 }
```

### π μ λͺ¨λλ μ΄λ¦μ΄ IOμΈκ°?
- IO λͺ¨λλλ μ¬λ¬ κ°μ νμΌ μμΆλ ₯μ μ μΈν νλ‘κ·Έλλ° λ°©μμΌλ‘ μμ±ν  μ μκ² κ³ μλμλ€.
- `runIO` λ©μλκ° νΈμΆλμ΄μΌ λΉλ‘μ λμνκΈ° μμνλ€.

```ts
import * as fs from 'fs';
import * as R from 'ramda';

const work1 = () => fs.readFileSync('package.json');
const work2 = (json1) => () => {
  const json2 = fs.readFileSync('tsconfig.json');
  return [json1, json2];
};

const result = IO.of(work1)
  .chain(json1 => IO.of(work2(json1)))
  .map(R.map(JSON.parse))
  .map(R.reduce((result: object, obj: object) => ({ ...result, ...obj }), {}))
  .runIO()

console.log(result); // package.jsonκ³Ό tsconfig.json νμΌ λ΄μ© μΆλ ₯
```

### π IO λͺ¨λλλ₯Ό μ¬μ©ν  λ μ£Όμν  μ 
- ν¨μν νλ‘κ·Έλλ°μ ν  λ ν¨μκ° μμ ν¨μμ¬μΌ νλ€. κ·Έλ°λ° λΉλκΈ° μμΆλ ₯, νλ‘λ―Έμ€, μμ±κΈ° λ±μ λΆμν¨κ³Όλ₯Ό λ°μνλ ν¨μλ₯Ό λ§λ€μ΄ λ²λ¦°λ€.
- κ·Έλμ μ μμ μμλ λκΈ° λ²μ μΈ `readFileSync` ν¨μλ₯Ό μ¬μ©νλ€.

### π runIO λ©μλ μ΄ν΄νκΈ°
- IO λͺ¨λλμ `runIO` λ©μλλ λ€μ μ½λμ²λΌ μ¬λ¬ κ°μ λ§€κ°λ³μλ₯Ό μ¬μ©ν΄ λμμν¬ μ μλ€.

```ts
export interface IRunIO {
  runIO<R>(...args: any[]): R;
};
```

### π IO λͺ¨λλ κ΅¬ν
- `IO` λͺ¨λλ κ΅¬ν μ½λμμλ `IApply` λ©μλλ₯Ό κ΅¬ννμ§ μνλ€.
- `IO` λͺ¨λλμ `map` λ©μλλ `runIO`κ° νΈμΆλκΈ° μ κΉμ§λ λμνμ§ λ§μμΌ νλ€.
- μ΄μ λ°λΌ λ€λ₯Έ λͺ¨λλμ λ€λ₯΄κ² μλ ₯λ°μ μ½λ°± ν¨μλ₯Ό `pipe`λ₯Ό μ¬μ©ν΄ μ‘°ν©νλ λ°©μμΌλ‘ κ΅¬νν΄μΌ νλ€.

```ts
import { IRunIO } from '../interfaces/IRunIO';
import { IFunctor } from '../interfaces/IFunctor';

const pipe = (...funcs) => (arg) => funcs.reduce((value, fn) => fn(value), arg);

export class IO implements IRunIO, IFunctor<Function> {
  constructor(public fn: Function) {}

  static of(fn: Function) { return new IO(fn); }

  // IRunIO
  runIO<T>(...args: any[]): T {
    return this.fn(...args) as T;
  }

  // IFunctor
  map(fn: Function): IO {
    const f: Function = pipe(this.fn, fn);

    return IO.of(f);
  }

  // IChain
  chain(fn) {
    const that = this;

    return IO.of((value) => {
      const io = fn(that.fn(value));
      
      return io.fn();
    });
  }
}
```

- `chain` λ©μλλ νμ μ£Όμμ λ¬λ©΄ μ½λκ° μ»΄νμΌλμ§ μλλ€. μ΄ μ½λλ μλ°μ€ν¬λ¦½νΈμ²λΌ μ κ·Όν΄μΌ λμνλ€.
- `chain`μ μλ ₯λλ μ½λ°± ν¨μ `fn`μ `IO`νμ κ°μ²΄λ₯Ό λ°ννλ€. `fn` νΈμΆμ λ°νκ°μ `IO` νμ κ°μ²΄μ΄λ€. λν, μ΄ `IO` νμ κ°μ²΄μ μ μ₯λλ ν¨μ λν `IO` νμ κ°μ²΄λ₯Ό λ°ννλ ννλ‘ κ΅¬νλμμΌλ―λ‘ `io.fn()` ν¨μλ₯Ό νΈμΆν΄ `chain` λ©μλκ° λ λ€λ₯Έ `IO` νμ κ°μ²΄λ₯Ό λ°ννλλ‘ κ΅¬νλμ΄ μλ€.

### π μ λ©μλλ€μ λ°νκ° μ»κΈ°
- `IO` λͺ¨λλλ μμν  λμ μ½λ°± ν¨μκ° `runIO` νΈμΆ λ μ λ¬ν λ§€κ°λ³μλ₯Ό λ°λ λ°©λ²κ³Ό κ·Έ μ΄νμ `map` νΉμ `chain` λ©μλκ° μ μμμ κ²°κ΄κ°μ λ°λ ννκ° λ€λ₯΄λ€.

```ts
import { IO } from '../classes/IO';

const result = IO.of((a1) => {
  console.log('io started', a1);
  return a1;
})
.runIO(1); // runIOκ° μ λ¬ν΄ μ€ μμκ°

console.log(result);
// io started 1
// 1
```

- λ€μ μ½λμμ `IO` κ°μ²΄μ μ½γΉλ°± ν¨μλ `a1` λ³μ«κ°μ λ°ννλλ°, `map` λ©μλλ μ΄ κ°μ λ€λ₯Έ λͺ¨λλμμ λ΄€λ κ²κ³Ό λκ°μ λ°©μμΌλ‘ μ»λλ€.

```ts
import { IO } from '../classes/IO';

const result = IO.of((a1) => {
  console.log('io started', a1);
  return a1;
})
.map((a2) => {
  console.log('first map called', a2);
  return a2 + 1;
})
.runIO(1);

console.log(result);
// io started 1
// first map called 1
// 2
```

- κ·Έλ¬λ `chain` λ©μλμΌ λλ IO λͺ¨λλλ₯Ό λ°νν΄μΌ νλ―λ‘ λ€μκ³Ό κ°μ μ½λκ° λλ€.

```ts
import { IO } from '../classes/IO';

const result = IO.of((a1) => {
  console.log('io started', a1);
  return a1;
})
.chain((a2) => {
  return IO.of(() => {
    console.log('first chain called', a2);
    return a2 + 1;
  })
})
.runIO(1);

console.log(result);
// io started 1
// first chain called 1
// 2
```

- κ²°λ‘ μ μΌλ‘ `chain` λ©μλμμ μ μμμ κ²°κ³Όλ₯Ό μ»μΌλ €λ©΄ λ€μ μ½λμ²λΌ λ§μΉ 2μ°¨ κ³ μ°¨ ν¨μ ννλ‘ λ³΄μ΄λ λ°©μμΌλ‘ κ΅¬νν΄μΌ νλ€.

```ts
import { IO } from '../classes/IO';

const chainCB = a2 => IO.of(() => {
  console.log('first chain called');
  return a2 + 1;
});

const result = IO.of((a1) => {
  console.log('io started', a1);
  return a1;
})
.chain(chainCB)
.runIO(1);

console.log(result);
// io started 1
// first chain called 1
// 2
```
