# π€ Chapter 2: νμμ€ν¬λ¦½νΈ νλ‘μ νΈ μμ±κ³Ό κ΄λ¦¬

<details><summary>Table of Contents</summary>

- π¦ νμμ€ν¬λ¦½νΈ νλ‘μ νΈ λ§λ€κΈ° [:link:](#-νμμ€ν¬λ¦½νΈ-νλ‘μ νΈ-λ§λ€κΈ°)
  - π νλ‘μ νΈ μμ±μ κ΄μ μμ ν¨ν€μ§ μ€μΉνκΈ° [:link:](#-νλ‘μ νΈ-μμ±μ-κ΄μ μμ-ν¨ν€μ§-μ€μΉνκΈ°)
  - π νλ‘μ νΈ μ΄μ©μ κ΄μ μμ ν¨ν€μ§ μ€μΉνκΈ° [:link:](#-νλ‘μ νΈ-μ΄μ©μ-κ΄μ μμ-ν¨ν€μ§-μ€μΉνκΈ°)
  - π tsconfig.json νμΌ λ§λ€κΈ° [:link:](#-tsconfigjson-νμΌ-λ§λ€κΈ°)
  - π src λλ ν°λ¦¬μ μμ€ νμΌ λ§λ€κΈ° [:link:](#-src-λλ ν°λ¦¬μ-μμ€-νμΌ-λ§λ€κΈ°)
  - π package.json μμ  [:link:](#-packagejson-μμ )
- π¦ λͺ¨λ μ΄ν΄νκΈ° [:link:](#-λͺ¨λ-μ΄ν΄νκΈ°)
  - π runsServer.ts νμΌμ λͺ¨λν [:link:](#-indexts-νμΌμ-λͺ¨λν)
  - π export ν€μλ [:link:](#-export-ν€μλ)
  - π import ν€μλ [:link:](#-import-ν€μλ)
  - π import * as κ΅¬λ¬Έ [:link:](#-import--as-κ΅¬λ¬Έ)
  - π export default ν€μλ [:link:](#-export-default-ν€μλ)
  - π μΈλΆ ν¨ν€μ§λ₯Ό μ¬μ©ν  λ importλ¬Έ
 [:link:](#-μΈλΆ-ν¨ν€μ§λ₯Ό-μ¬μ©ν -λ-importλ¬Έ)
- π¦ tsconfig.json νμΌ μ΄ν΄λ³΄κΈ° [:link:](#-tsconfigjson-νμΌ-μ΄ν΄λ³΄κΈ°)
  - π module ν€ [:link:](#-module-ν€)
  - π moduleResolution ν€ [:link:](#-moduleResolution-ν€)
  - π target ν€ [:link:](#-target-ν€)
  - π baseUrlκ³Ό outDir ν€ [:link:](#-baseurlκ³Ό-outdir-ν€)
  - π paths ν€ [:link:](#-paths-ν€)
  - π esModuleInterop ν€ [:link:](#-esModuleInterop-ν€)
  - π sourceMap ν€ [:link:](#-sourceMap-ν€)
  - π downlevelIteration ν€ [:link:](#-downleveliteration-ν€)
  - π noImplicitAny ν€ [:link:](#-noimplicitany-ν€)

</details>

## π¦ νμμ€ν¬λ¦½νΈ νλ‘μ νΈ λ§λ€κΈ°
- νμμ€ν¬λ¦½νΈ κ°λ°μ Node.js νλ‘μ νΈλ₯Ό λ§λ  λ€μ, κ°λ° μΈμ΄λ₯Ό νμμ€ν¬λ¦½νΈλ‘ μ€μ νλ λ°©μμΌλ‘ μ§ννλ€.
- λλ ν°λ¦¬λ₯Ό νλ λ§λ€κ³  μ¬κΈ°μ `package.json` νμΌμ λ§λλ κ²μΌλ‘ μμνλ€.
- ν°λ―Έλμμ `npm init` λͺλ ΉμΌλ‘ `package.json` νμΌμ μμ±νλ€.

```bash
> npm init --y
```

- `package.json`μ Node.jsκ° κ΄λ¦¬νλ ν¨ν€μ§ κ΄λ¦¬ νμΌλ‘μ **νλ‘μ νΈ μ λ³΄μ κ΄λ ¨ ν¨ν€μ§κ° κΈ°λ‘λλ€.**
- μ΄ νμΌμ μ΄μ©ν΄ νλ‘μ νΈλ₯Ό κ°λ°νκ³  μ€ννλ λ° νμν ν¨ν€μ§λ₯Ό κ΄λ¦¬ν  μ μλ€.

### π νλ‘μ νΈ μμ±μ κ΄μ μμ ν¨ν€μ§ μ€μΉνκΈ°
- νλ‘μ νΈ κ΅¬νμ νμν λ€μν μ€νμμ€ ν¨ν€μ§λ₯Ό `npm install` νΉμ `npm i` λͺλ ΉμΌλ‘ μ€μΉνλ€.
- μ΄ μ΅μμΌλ‘ μ€μΉνλ©΄ ν΄λΉ ν¨ν€μ§ μ λ³΄κ° `package.json` νμΌμ μλμΌλ‘ κΈ°λ‘λλ€.

```bash
// dependencies ν­λͺ©μ λ±λ‘
> npm i --save 
> npm i -S

// devDependencies ν­λͺ©μ λ±λ‘
> npm i --save-dev
> npm i -D
```

- νμμ€ν¬λ¦½νΈ νλ‘μ νΈλ λ³΄ν΅ `typescript`μ `ts-node` ν¨ν€μ§λ₯Ό μ€μΉνλ€.

```bash
> npm i -D typescript ts-node
```

- νμμ€ν¬λ¦½νΈλ κΈ°λ³Έμ μΌλ‘ ESNext μλ°μ€ν¬λ¦½νΈ λ¬Έλ²μ ν¬ν¨νκ³  μμ§λ§, μλ°μ€ν¬λ¦½νΈμλ μμ ν λ€λ₯Έ μΈμ΄μ΄λ€.
- μ¦, μλ°μ€ν¬λ¦½νΈ μ»΄νμΌλ¬λ `a => a + 1`κ³Ό κ°μ μ½λλ₯Ό λμμν¬ μλ μμ§λ§, νμμ€ν¬λ¦½νΈ μ»΄νμΌλ¬λ `(a: number): number => a + 1`μ²λΌ **νμμ΄ λͺμμ μΌλ‘ μ€μ λμ΄** μμ΄μΌλ§ μ½λκ° λ¬Έλ²μ λ§κ² μμ±λμλμ§λ₯Ό κ²μ¦ν΄ μ½λλ₯Ό λμμν¨λ€.
- `@types/`κ° μμ λΆλ νμ λΌμ΄λΈλ¬λ¦¬λ€μ ν­μ `index.d.ts`λΌλ μ΄λ¦μ νμΌμ κ°μ§κ³  μμΌλ©°, νμμ€ν¬λ¦½νΈ μ»΄νμΌλ¬λ μ΄ νμΌμ λ΄μ©μ λ°νμΌλ‘ chance, ramdaμ κ°μ λΌμ΄λΈλ¬λΌκ° μ κ³΅νλ ν¨μλ€μ μ¬λ°λ₯΄κ² μ¬μ©νλμ§ κ²μ¦νλ€.
- νμμ€ν¬λ¦½νΈλ λν μΉ λΈλΌμ°μ λ Node.jsκ° κΈ°λ³Έμ μΌλ‘ μ κ³΅νλ νμλ€μ μ‘΄μ¬λ κ·Έλ₯μ μμ§ λͺ»νλ€.
- μλ₯Ό λ€μ΄, `Promise`μ κ°μ νμμ μ¬μ©νλ €λ©΄ `@types/node`λΌλ ν¨ν€μ§λ₯Ό μ€μΉν΄μΌ νλ€.

```bash
> npm i -D @types/node
```

### π νλ‘μ νΈ μ΄μ©μ κ΄μ μμ ν¨ν€μ§ μ€μΉνκΈ°
- νλ‘μ νΈλ₯Ό λ§λλ κ³Όμ μμ ν¨ν€μ§λ₯Ό μ€μΉνλ©΄ νλ‘μ νΈ λλ ν°λ¦¬ μλμ `node_modules`μ΄λΌλ λλ ν°λ¦¬κ° μκΈ°κ³ , μ¬κΈ°μ ν΄λΉ ν¨ν€μ§κ° μ€μΉλλ€.
- λ³΄ν΅ νλ‘μ νΈλ₯Ό κ΅¬ννλ©΄ μ¬λ¬ ν¨ν€μ§κ° μ€μΉλκ² λκΈ° λλ¬Έμ `node_modules` λλ ν°λ¦¬ ν¬κΈ°κ° λ§€μ° μ»€μ§λ€. κ·Έλμ λ€λ₯Έ μ¬λμκ² νλ‘μ νΈλ₯Ό μ λ¬ν  λλ `node_modules` λλ ν°λ¦¬λ₯Ό λͺ¨λ μ§μ΄λ€.
- λ°λΌμ λ€λ₯Έ μ¬λμ΄ μμ±ν νλ‘μ νΈλ₯Ό μ λ¬λ°μ μ΄μ©ν  λλ κ°μ₯ λ¨Όμ  `package.json` νμΌμ΄ μλ λλ ν°λ¦¬μμ λ€μ λͺλ Ήμ μ€νν΄μΌ νλ€.

```bash
> npm i
```
### π tsconfig.json νμΌ λ§λ€κΈ°
- νμμ€ν¬λ¦½νΈ νλ‘μ νΈλ νμμ€ν¬λ¦½νΈ μ»΄νμΌλ¬μ μ€μ  νμΌμΈ `tsconfig.json` νμΌμ΄ μμ΄μΌ νλ€.
- μ΄ νμΌμ `tsc --init` λͺλ ΉμΌλ‘ λ§λ€ μ μλ€.

```bash
> tsc --init
```

- κΈ°λ³Έ `tsconfig.json` νμΌμ μ€μ  κ°λ°μ μ§ννλ λ° νμν λ§μ μ΅μμ΄ λΉνμ±νλμ΄ μλ€.
- λ°λΌμ λ³΄ν΅μ νλ‘μ νΈμ νμν μ΅μλ§ μ€μ ν΄μ κ°λ΅νκ² νλ€.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "ES5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}
```
- μμ κ°μ λ΄μ©μΌλ‘ μμ±λ `tsconfig.json` νμΌμ κΈ°λ³Έ μ€μ  νμΌλ‘ μ μ©νλ€.

### π src λλ ν°λ¦¬μ μμ€ νμΌ λ§λ€κΈ°
- μμμ λ§λ  `include` ν­λͺ©μλ `["src/**/*"]`λΌλ κ°μ΄ μ€μ λμ΄ μλλ°, μ΄κ²μ `./src`μ `./src/utils` λλ ν°λ¦¬μ μ΄ νλ‘μ νΈμ λͺ¨λ  νμμ€ν¬λ¦½νΈ μμ€ νμΌμ΄ μλ€λ λ»μ΄λ€.
- `tsconfig.json` μ€μ λλ‘ νλ‘μ νΈλ₯Ό κ΅¬μ±νκ³ μ λ€μ λͺλ ₯μΌλ‘ `src/utils` λλ ν°λ¦¬λ₯Ό μμ±νλ€.

```bash
> mkdir -p src/utils
```

- κ·Έλ¦¬κ³  κ° λλ ν°λ¦¬μ μ€μ΅νλ λ° νμν μμ€ νμΌμ λ§λ λ€.

```bash
> touch src/runsServer.ts src/utils/makePerson.ts
```

- `makePerson.ts`μ λ€μκ³Ό κ°μ΄ μλ ₯νλ€.

```ts
export function makePerson(name: string, age: number) {
  return { 
    name: name, 
    age: age,
  };
}

export function testMakePerson() {
  console.log(
    makePerson('Jane', 22),
    makePerson('Jack', 33),
  );
}
```

- `runsServer.ts`μ λ€μκ³Ό κ°μ΄ μλ ₯νλ€.

```ts
import { testMakePerson } from './utils/makePerson';

testMakePerson();
```

### π package.json μμ 
- νμμ€ν¬λ¦½νΈ νλ‘μ νΈλ₯Ό κ°λ°ν  λλ `ts-node`λ₯Ό μ¬μ©νμ§λ§, λ§μ κ°λ°μ΄ μλ£λλ©΄ νμμ€ν¬λ¦½νΈ μμ€μ½λλ₯Ό ES5 μλ°μ€ν¬λ¦½νΈ μ½λλ‘ λ³νν΄ `node`λ‘ μ€νν΄μΌ νλ€.
- κ·Έλ κ² λλ¬Έμ λ€μμ²λΌ `package.json` νμΌμ μ΄κ³  `script` ν­λͺ©μ `dev`μ `build` λͺλ Ήμ μΆκ°νλ€.

```json
{
  "name": "chapter-2",
  "version": "1.0.0",
  "description": "νμμ€ν¬λ¦½νΈ νλ‘μ νΈ λ§λ€κΈ°",
  "main": "src/index.js",
  "scripts": {
    "dev": "ts-node src",
    "build": "tsc && node dist"
  },
  /* μλ΅ */
}
```

- `dev` λͺλ Ήμ κ°λ° μ€μ `src` λλ ν°λ¦¬μ μλ `runsServer.ts` νμΌμ μ€ννλ μ©λλ‘ μ¬μ©νλ©°, `build` λͺλ Ήμ κ°λ°μ΄ μλ£λ ν νλ‘κ·Έλ¨μ λ°°ν¬νκΈ° μν΄ `dist` λλ ν°λ¦¬μ ES5 μλ°μ€ν¬λ¦½νΈ νμΌμ λ§λ€ λ μ¬μ©νλ€.
- μ΄ λͺλ Ήλ€μ `npm run λͺλ Ή` ννλ‘ μ¬μ©νλ€.

```bash
> npm run dev
{ name: 'Jane', age: 22 } { name: 'Jack', age: 33 }
```

- ν°λ―Έλμμ λ€μ λͺλ Ήμ μ€νν΄ `dist` λλ ν°λ¦¬μ ES5 μλ°μ€ν¬λ¦½νΈ νμΌμ λ§λ λ€.

```bash
> npm run build
```

- λ€μμ `build` λͺλ ΉμΌλ‘ λ§λ  `dist` λλ ν°λ¦¬μ ES5λ‘ μ»΄νμΌλ `index.js` νμΌκ³Ό `makePerson.js`μ΄λ€.
- `index.js`

```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var makePerson_1 = require("./utils/makePerson");
makePerson_1.testMakePerson();
//# sourceMappingURL=index.js.map
```

- `makePerson.js`
```js
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePerson = exports.makePerson = void 0;
function makePerson(name, age) {
    return {
        name: name,
        age: age,
    };
}
exports.makePerson = makePerson;
function testMakePerson() {
    console.log(makePerson('Jane', 22), makePerson('Jack', 33));
}
exports.testMakePerson = testMakePerson;
//# sourceMappingURL=makePerson.js.map
```

> [πμλ‘κ°κΈ°](#-chapter-2-νμμ€ν¬λ¦½νΈ-νλ‘μ νΈ-μμ±κ³Ό-κ΄λ¦¬)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)

## π¦ λͺ¨λ μ΄ν΄νκΈ°
- νμμ€ν¬λ¦½νΈμμλ `runsServer.ts`μ κ°μ μμ€ νμΌμ λͺ¨λ(module)μ΄λΌκ³  νλ€.
- μ½λ κ΄λ¦¬μ μ μ§ λ³΄μλ₯Ό νΈλ¦¬νκ² νλ €κ³  λͺ¨λλ§λ€ κ³ μ ν κΈ°λ₯μ κ΅¬ννλ λ°©μμΌλ‘ μμ€μ½λλ₯Ό λΆν νλ€. μ΄λ¬ν μμμ λͺ¨λν(modulization)λΌκ³  νλ€.
- νμμ€ν¬λ¦½νΈλ μ΄λ₯Ό μν΄ `export`μ `import`λΌλ ν€μλλ₯Ό μ κ³΅νλ€.

```ts
let MAX_AGE = 100;

interface IPerson {
  name: string,
  age: number,
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {};
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil((Math.random() * max));
}

const makePerson = 
  ( name: string, age: number = makeRandomNumber()) => ({ name, age });

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane');
  let jack: IPerson = makePerson('Jack');
  console.log(jane, jack);
}

testMakePerson();
```

- ν°λ―Έλμμ λ€μ λͺλ ΉμΌλ‘ `runsServer.ts` νμΌμ μ€ννλ€.

```bash
> npm run dev
```

- μ½λλ₯Ό μ΄ν΄νκ³  μμ ν λ €νλ λ΄μ©μ΄ μ‘°κΈ λ³΅μ‘ν΄λ³΄μΈλ€.
- `runsServer.ts` νμΌμ λ΄μ©μ λΆλ¦¬ν΄μ λͺ¨λνλ₯Ό μ§ννλ€.

### π runsServer.ts νμΌμ λͺ¨λν
- `runsServer.ts` νμΌμ λͺ¨λννκΈ° μν΄ `src` λλ ν°λ¦¬ μλμ `person` λλ ν°λ¦¬λ₯Ό μμ± ν κ·Έ μμ `Person.ts`λΌλ μ΄λ¦μ νμΌμ λ§λ λ€.
- κ·Έλ¦¬κ³  `runsServer.ts` νμΌμμ λ€μκ³Ό κ°μ λ΄μ©μ `Person.ts` νμΌλ‘ μ?κ²¨ μ λλ€.

```ts
let MAX_AGE = 100;

interface IPerson {
  name: string,
  age: number,
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {};
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil((Math.random() * max));
}

const makePerson = 
  ( name: string, age: number = makeRandomNumber()) => ({ name, age });
```

- `runsServer.ts`

```ts
const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane');
  let jack: IPerson = makePerson('Jack');
  console.log(jane, jack);
}

testMakePerson();
```
- νμ§λ§ μ΄ μνλ‘ μ½λλ₯Ό μ€νν΄ λ³΄λ©΄ μ€λ₯κ° λ°μνλ€.
- μ΄ κ²½μ° νμμ€ν¬λ¦½νΈμ `export`μ `import` κ΅¬λ¬Έμ ν΅ν΄ ν΄κ²°ν  μ μλ€.

### π export ν€μλ
- `Person.ts` νμΌμ `IPerson`κ³Ό `makePerson` μ μΈλΆμ `export` ν€μλλ₯Ό μΆκ°νλ€.
- `export` ν€μλλ `interface`, `class`, `type`, `let`, `const` ν€μλ μμλ λΆμΌ μ μλ€.

```ts
let MAX_AGE = 100;

export interface IPerson {
  name: string,
  age: number,
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {};
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil((Math.random() * max));
}

export const makePerson = 
  ( name: string, age: number = makeRandomNumber()): IPerson => ({ name, age });
```

### π import ν€μλ
- μ΄λ€ νμΌμ΄ `export` ν€μλλ‘ λ΄λ³΄λΈ μ¬λ²μ λ°μμ μ¬μ©νλ €λ©΄ `import` ν€μλλ‘ ν΄λΉ μ¬λ²μ λΆλ¬μ¨λ€.

```ts
import { μ¬λ²λͺ©λ‘ } from 'νμΌμ μλ κ²½λ‘';
```

- `runsServer.ts`

```ts
import { IPerson, makePerson } from "./person/Person";

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane');
  let jack: IPerson = makePerson('Jack');
  console.log(jane, jack);
}

testMakePerson();
```

### π import * as κ΅¬λ¬Έ
- `import` κ΅¬λ¬Έμ λ λ€λ₯Έ ννλ λ€μμ²λΌ `as` ν€μλλ₯Ό ν¨κ» μ¬μ©νλ κ²μ΄λ€.

```ts
import * as μ¬λ² from 'νμΌ μλ κ²½λ‘';
```

- `src/utils` λλ ν°λ¦¬μ `makeRandomNumber.ts` λΌλ νμΌμ λ§λ€κ³  `Person.ts`μμ λ€μκ³Ό κ°μ λ΄μ©μ μ?κ²¨ μ λλ€.

```ts
let MAX_AGE = 100;

export function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil((Math.random() * max));
}
```

- κ·Έλ¦¬κ³  `Person.ts` νμΌμ μ΄κ³  μ²« μ€μ λ€μκ³Ό κ°μ `import * as` κ΅¬λ¬Έμ μμ±ν ν `U.` μ½λλ₯Ό μΆκ°νλ€.

```ts
import * as U from "../utils/makeRandomNumber";

// μλ΅..

export const makePerson = 
  ( name: string, age: number = U.makeRandomNumber()): IPerson => ({ name, age });
```
- `makeRandomNumber`λ₯Ό λΆλ¦¬νμκ³ , `Person.ts` νμΌμμλ `U`λΌλ μ¬λ²λ‘ μ κ·Όν  μ μλλ‘ `import * as` κ΅¬λ¬Έμ μ§μ νλ€.

### π export default ν€μλ
- νμμ€ν¬λ¦½νΈλ μλ°μ€ν¬λ¦½νΈμ νΈννκΈ° μν΄ `export default` κ΅¬λ¬Έμ μ κ³΅νλ€.
- `person` λλ ν°λ¦¬μ `IPerson.ts` νμΌμ λ§λ€κ³  λ€μκ³Ό κ°μ΄ μμ±νλ€.

```ts
export default interface IPerson {
  name: string,
  age: number,
}
```

- `export default` ν€μλλ ν λͺ¨λμ΄ λ΄λ³΄λ΄λ κΈ°λ₯ μ€ μ€μ§ ν κ°μλ§ λΆμΌ μ μλ€.
- `import`λ¬ΈμΌλ‘ λΆλ¬μ¬ λ μ€κ΄νΈ `{}` μμ΄ μ¬μ©ν  μ μλ€.
- `Person.ts` νμΌμ μμ νλ€.

```ts
import { makeRandomNumber } from "../utils/makeRandomNumber";
import IPerson from "./IPerson";


export default class Person implements IPerson {
  constructor(public name: string, public age: number = makeRandomNumber()) {};
}

export const makePerson = 
  ( name: string, age: number = makeRandomNumber()): IPerson => ({ name, age });
```

- `runsServer.ts`λ₯Ό λ€μκ³Ό κ°μ΄ λ°μνλ€.

```ts
import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";

const testMakePerson = (): void => {
  let jane: IPerson = makePerson('Jane');
  let jack: IPerson = new Person('Jack');
  console.log(jane, jack);
}

testMakePerson();
```

### π μΈλΆ ν¨ν€μ§λ₯Ό μ¬μ©ν  λ importλ¬Έ
- λ€μμ²λΌ `chance`μ `ramda`λΌλ ν¨ν€μ§λ₯Ό μ€μΉν΄μ€λ€.

```bash
> npm i -S chance ramda
> npm i -D @types/chance @types/ramda
```

- `package.json`

```json
{
  /* μλ΅.. */
  "devDependencies": { /* -D μ΅μ */
    "@types/chance": "^1.1.1",
    "@types/node": "^14.14.16",
    "@types/ramda": "^0.27.34",
    "ts-node": "^9.1.1",
    "typescript": "^4.1.3"
  },
  "dependencies": { /* -S μ΅μ */
    "chance": "^1.1.7",
    "ramda": "^0.27.1"
  }
}
```

- `chance` ν¨ν€μ§λ κ°μ§ λ°μ΄ν°(fake data)λ₯Ό λ§λ€μ΄ μ£Όλ λ° μ¬μ©λλ©°, `ramda`λ ν¨μν μ νΈλ¦¬ν° ν¨ν€μ§μ΄λ€.
- `runsServer.ts` νμΌμ λ€μκ³Ό κ°μ΄ μμ νλ€.

```ts
import IPerson from "./person/IPerson";
import Person from "./person/Person";

import Chance from 'chance';
import * as R from 'ramda';

const chance = new Chance();

let persons: IPerson[] = R.range(0, 2)
  .map((n: number) => new Person(chance.name(), chance.age()));

console.log(persons);
```

- `chance`μ `ramda`λ μΈλΆ ν¨ν€μ§μ΄λ―λ‘ `node_modules` λλ ν°λ¦¬μ μλ€.
- λ°λΌμ κ²½λ‘μμ `./`λ±μ μλ΅ν μ± `import`λ₯Ό ν  μ μλ€.

```bash
> npm run dev
> npm run build
```

> [πμλ‘κ°κΈ°](#-chapter-2-νμμ€ν¬λ¦½νΈ-νλ‘μ νΈ-μμ±κ³Ό-κ΄λ¦¬)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)

## π¦ tsconfig.json νμΌ μ΄ν΄λ³΄κΈ°
- ν°λ―Έλμμ `tsc --help`λ₯Ό μ€ννλ©΄ λ€μκ³Ό κ°μ λ΄μ©μ λ³Ό μ μλ€.
- μ΄λ₯Ό ν΅ν΄ `tsc` μ»΄νμΌλ¬λ **μ»΄νμΌ μ΅μκ³Ό λμ νμΌ λͺ©λ‘** λ κ°μ§λ₯Ό μλ ₯λ°λλ€λ κ²μ μ μ μλ€.

```bash
> tsc --help
Version 4.1.3
Syntax:   tsc [options] [file...] // tsc λͺλ Ή νμ

Examples: tsc hello.ts
          tsc --outFile file.js file.ts
          tsc @args.txt
          tsc --build tsconfig.json

Options:
 -h, --help                                         Print this message.
 -w, --watch                                        Watch input files.
 ... μλ΅ ...
```

- μμμ λ§λ  `tsconfig.json` νμΌμ λ³΄λ©΄ λ€μμ²λΌ κ΅¬μ±λμ΄μλ€.

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "ES5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}
```

- `compilerOptions` ν­λͺ©μ `tsc` λͺλ Ή νμμμ **μ΅μ**μ λνλ΄κ³ , `includes` ν­λͺ©μ **λμ νμΌ λͺ©λ‘**μ λνλΈλ€.
- `include`μ `["src/**/*"]`λ `src` νμ λλ ν°λ¦¬μ μλ λͺ¨λ  νμΌμ μ»΄νμΌ λμμΌλ‘ ν¬ν¨νλ€λ μλ―Έμ΄λ€.

### π module ν€
- νμμ€ν¬λ¦½νΈ μμ€μ½λκ° μ»΄νμΌλμ΄ λ§λ€μ΄μ§ ES5 μλ°μ€ν¬λ¦½νΈ μ½λλ μΉ λΈλΌμ°μ μ Node.js μμͺ½μμ λͺ¨λ λμν΄μΌ νλ€.
- κ·Έλ°λ° μΉ λΈλΌμ°μ μ Node.jsλ λ¬Όλ¦¬μ μΌλ‘ λμνλ λ°©μμ΄ λ¬λΌμ μ¬λ¬ κ°μ νμΌλ‘ λΆν λ μλ°μ€ν¬λ¦½νΈ μ½λ λν μΉ λΈλΌμ°μ μ Node.js μμͺ½μμ κ°κ° λ€λ₯΄κ² λμνλ€.
- μλ°μ€ν¬λ¦½νΈ λͺ¨λμ μΉ λΈλΌμ°μ μμλ **AMD**(**asynchronous module definition**) λ°©μμΌλ‘ λμνκ³ , Node.jsμ²λΌ μΉ λΈλΌμ°μ κ° μλ νκ²½μμλ **CommonJS** λ°©μμΌλ‘ λμνλ€.
- `tsconfig.json` νμΌμμ `compilerOptions` ν­λͺ©μ `module` ν€λ λμ λμ νλ«νΌμ΄ μΉ λΈλΌμ°μ μΈμ§ Node.jsμΈμ§λ₯Ό κ΅¬λΆν΄ κ·Έμ λ§λ λͺ¨λ λ°©μμΌλ‘ μ»΄νμΌνλ €λ λͺ©μ μΌλ‘ μ€μ νλ€.

```json
{
  "compilerOptions": {
    "module": "commonjs", /* Node.js */
    "module": "amd", /* μΉ λΈλΌμ°μ  */
  },
}
```
### π moduleResolution ν€
- `module`ν€μ κ°μ΄ `commonjs`μ΄λ©΄ Node.jsμμ λμνλ κ²μ μλ―Ένλ―λ‘, **`moduleResolution`ν€κ°μ ν­μ `node`λ‘ μ€μ **νλ€.
- λ°λ©΄μ `module`ν€κ°μ΄ `amd`μ΄λ©΄ **`moduleResolution`ν€κ°μ `classic`μΌλ‘ μ€μ **νλ€.

### π target ν€
- `target` ν€μλ **νΈλμ€νμΌν  λμ μλ°μ€ν¬λ¦½νΈ λ²μ μ μ€μ **νλ€.
- λλΆλΆ es5λ₯Ό ν€κ°μΌλ‘ μ€μ νλ€.

### π baseUrlκ³Ό outDir ν€
- `baseUrl`κ³Ό `outDir` ν€μλ **νΈλμ€νμΌλ ES5 μλ°μ€ν¬λ¦½νΈ νμΌμ μ μ₯νλ λλ ν°λ¦¬λ₯Ό μ€μ νλ€.**
- `tsc`λ `tsconfig.json` νμΌμ΄ μλ λλ ν°λ¦¬μμ μ€νλλ€. λ°λΌμ νμ¬ λλ ν°λ¦¬λ₯Ό μλ―Ένλ `"."`λ‘ `baseUrl` ν€κ°μΌλ‘ μ€μ νλ κ²μ΄ λ³΄ν΅μ΄λ€.
- `outDir`ν€λ **νμ λλ ν°λ¦¬μ μ΄λ¦**μ΄λ€.

### π paths ν€
- `paths` ν€μλ **μμ€ νμΌμ `import`λ¬Έμμ `form` λΆλΆμ ν΄μν  λ μ°ΎμμΌ νλ λλ ν°λ¦¬λ₯Ό μ€μ νλ€.**
- `import` λ¬Έμ μ°ΎμμΌ νλ μμ€κ° μΈλΆ ν¨ν€μ§μ΄λ©΄ `node_modules` λλ ν°λ¦¬μμ μ°ΎμμΌ νλ―λ‘ ν€κ°μ `node_modules/*`λ ν¬ν¨νλ€.

### π esModuleInterop ν€
- μ€νμμ€ μλ°μ€ν¬λ¦½νΈ λΌμ΄λΈλ‘λ¦¬ μ€μλ μΉ λΈλΌμ°μ μμ λμνλ€λ κ°μ μΌλ‘ λ§λ€μ΄μ§ κ²μ΄ μλλ°, μ΄λ€μ `CommonJS` λ°©μμΌλ‘ λμνλ νμμ€ν¬λ¦½νΈ μ½λμ νΌλμ μ€ μ μλ€.
- `chance`κ° λ°λ‘ AMDλ°©μμ μ μ λ‘ ν΄μ κ΅¬νλ λΌμ΄λΈλ¬λ¦¬μ΄λ€. λ°λΌμ `chance` ν¨ν€μ§κ° λμνλ €λ©΄ `esModuleInterop` ν€κ°μ λ°λμ `true`λ‘ μ€μ ν΄μΌ νλ€.

### π sourceMap ν€
- `sourceMap` ν€ κ°μ΄ `true`μ΄λ©΄ νΈλμ€νμΌ ν°λ ν°λ¦¬μλ `.js` νμΌ μ΄μΈμλ `.js.map` νμΌμ΄ λ§λ€μ΄μ§λ€.
- μ΄ μμ€λ§΅ νμΌμ **λ³νλ μλ°μ€ν¬λ¦½νΈ μ½λκ° νμμ€ν¬λ¦½νΈ μ½λμ μ΄λμ ν΄λΉνλμ§λ₯Ό μλ €μ€λ€.**
- μμ€λ§΅ νμΌμ μ£Όλ‘ λλ²κΉν  λ μ¬μ©λλ€.

### π downlevelIteration ν€
- μμ±κΈ°(generator)λΌλ νμμ€ν¬λ¦½νΈ κ΅¬λ¬Έμ΄ μλλ°, μ΄ κ΅¬λ¬Έμ΄ μ μ±μ μΌλ‘ λμνλ €λ©΄ `downlevelIteration` ν€κ°μ λ°λμ `true`λ‘ μ€μ ν΄μΌ νλ€.

### π noImplicitAny ν€
- νμμ€ν¬λ¦½νΈ μ»΄νμΌλ¬λ κΈ°λ³Έμ μΌλ‘ `f(a, b)` μ²λΌ λ§€κ°λ³μμ `a, b`μ νμμ λͺμνμ§ μμ μ½λμΌ κ²½μ° `f(a: any, b: any)`μ²λΌ μμμ μΌλ‘ `any`νμμΌλ‘ μ€μ ν κ²μΌλ‘ κ°μ£Όνλ€.
- μ΄λ° ννμ μ½λλ νμμ€ν¬λ¦½νΈ μΈμ΄μ μ₯μ μ κ°μ§ κ²μ΄ μλλ―λ‘ μ½λμ λ¬Έμ κ° μμμ μλ €μ€λ€.
- νμ§λ§ μ²μ λ°°μ°λ μ¬λμ μμ₯μμλ μ€λ₯ λ©μμ§μ μλ―Έκ° μ§κ΄μ μ΄μ§ μμ νΌλμ μ€λ€.
- μ΄ μ±μμλ `noImplicitAny`ν€ κ°μ `false`λ‘ μ€μ νλ€.

> [πμλ‘κ°κΈ°](#-chapter-2-νμμ€ν¬λ¦½νΈ-νλ‘μ νΈ-μμ±κ³Ό-κ΄λ¦¬)  |  [πλ©μΈμΌλ‘ μ΄λ](https://github.com/saseungmin/typescript_programming_study)