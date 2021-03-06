# ๐ค Chapter 7: Promise์ async/await ๊ตฌ๋ฌธ

## ๐ฆ ๋น๋๊ธฐ ์ฝ๋ฐฑ ํจ์

### ๐ ๋๊ธฐ์ ๋น๋๊ธฐ API
- Node.js์์ ํ์ผ ์์คํ๊ณผ ๊ด๋ จ๋ ๊ธฐ๋ฅ์ ๋ชจ์๋ `fs` ํจํค์ง๋ฅผ ์ ๊ณตํ๋๋ฐ, ๋๊ธฐ ๋น๋๊ธฐ ๋ฒ์ ์ผ๋ก ๋๋์ด ์ ๊ณตํ๋ค. ์๋ฅผ ๋ค์ด, ๋๊ธฐ ๋ฒ์ ์ธ `readFileSync`์ ๋น๋๊ธฐ ๋ฒ์ ์ธ `readFile`๋ก ์ ๊ณตํ๋ค.

```ts
import { readFileSync, readFile } from "fs";

// ๋๊ธฐ ๋ฐฉ์์ผ๋ก ์ฝ๊ธฐ
const buffer: Buffer = readFileSync('./package.json');
console.log(buffer.toString());

// ๋น๋๊ธฐ ๋ฐฉ์์ผ๋ก ์ฝ๊ธฐ
readFile('./package.json', (error: Error, buffer: Buffer) => {
  console.log(buffer.toString());
});

// Promise์ async/await ๊ตฌ๋ฌธ์ ์ฌ์ฉํ ์
const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if(error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });

(async () => {
  const content = await readFilePromise('./package.json');
  console.log(content);
})();
```

- API ํจ์๋ ์ผ๋ฐ ํจ์์ ๋ฌ๋ฆฌ ํ๋๋์คํฌ์ ์ ์ฅ๋ ํ์ผ์ ์ฝ๋ ๋ฑ ์คํ์ ๋ฌผ๋ฆฌ์ ์ธ ์๊ฐ์ด ์์๋๋ค.
- ๋ฐ๋ผ์ ํ์ผ ๋ด์ฉ์ ๋ชจ๋ ์ฝ์ ๋๊น์ง ํ๋ก๊ทธ๋จ์ ๋์์ ์ ์ ๋ฉ์ถ๋ ๋๊ธฐ ๋ฐฉ์์ API์ ํ๋ก๊ทธ๋จ์ ๋์์ ๋ฉ์ถ์ง ์๋ ๋์  ๊ฒฐ๊ณผ๋ฅผ ์ฝ๋ฐฑ ํจ์๋ก ์ป๊ฒ ํ๋ ๋น๋๊ธฐ ๋ฐฉ์์ API๋ฅผ ์ ๊ณตํ๋ค.
- ๋น๋๊ธฐ API์ ์ฝ๋ฐฑ ํจ์๋ฅผ **๋น๋๊ธฐ ์ฝ๋ฐฑ ํจ์**๋ผ๊ณ  ํ๋ค. ๋น๋๊ธฐ ์ฝ๋ฐฑ ํจ์๋ ์ผ๋ฐ ํจ์์ ๋ฌ๋ฆฌ API์ ๋ฌผ๋ฆฌ์ ์ธ ๋์ ๊ฒฐ๊ณผ๋ฅผ ์์ ํ๋ ๋ชฉ์ ์ผ๋ก๋ง ์ฌ์ฉํ๋ค.

### ๐ ๋จ์ผ ์ค๋ ๋์ ๋น๋๊ธฐ API
- ์๋ฐ์คํฌ๋ฆฝํธ๋ ๋จ์ผ ์ค๋ ๋๋ก ๋์ํ๋ฏ๋ก ๋  ์ ์์ผ๋ฉด `readFileSync`์ ๊ฐ์ ๋๊ธฐ API๋ฅผ ์ฌ์ฉํ์ง ๋ง์์ผ ํ๋ค.
- ๋๊ธฐ API๊ฐ ์คํ๋๋ฉด, ์ด์์ฒด์ ๋ ๋๊ธฐ API์ ์์ ๊ฒฐ๊ณผ๋ฅผ ํจ์์ ๋ฐํ๊ฐ์ผ๋ก ๋๋ ค์ค์ผ ํ๋ค. ์ด ๋๋ฌธ์ ์ด์์ฒด์ ๋ ๋๊ธฐ API๊ฐ ์คํ๋ ์ฝ๋๋ฅผ ์ผ์์ ์ผ๋ก ๋ฉ์ถ ๋ค์, ๋ ๋ค๋ฅธ ์ค๋ ๋์์ ์ค์  ์์์ ์คํํด ์ผค๊ณผ๋ฅผ ์ป์ผ๋ฉด ๊ทธ๋์์ผ ์ ์ ๋ฉ์ท๋ ๋๊ธฐ API๋ฅผ ์คํํ๋ฉด์ ๊ฒฐ๊ด๊ฐ์ ๋ฐํํ๋ค. ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ๊ฒฐ๊ณผ๋ฅผ ๋ฐํํ  ๋๊น์ง ์ผ์์ ์ผ๋ก ๋ฉ์ถ๋ ํ์์ด ๋ฐ์ํ๋ค.

### ๐ ์ฝ๋ฐฑ ์ง์ฅ
- ๋น๋๊ธฐ API๋ฅผ ์ฌ์ฉํ๋ฉด ์ฝ๋ฐฑ ํจ์์์ ๋ ๋ค์ ๋ค๋ฅธ ๋น๋๊ธฐ API๋ฅผ ํธ์ถํ๋ ์ฝ๋๋ฅผ ๋ง๋ค ๋ ์ฝ๋๊ฐ ๋งค์ฐ ๋ณต์กํด์ง๋ค.

```ts
import { readFile } from "fs";

readFile('./package.json', (error: Error, buffer: Buffer) => {
  if (error) {
    throw error;
  } else {
    const content: string = buffer.toString();
    console.log(content);
  }

  readFile('./tsconfig.json',(err: Error, buffer: Buffer) => {
    if (error) {
      throw error;
    } else {
      const content: string = buffer.toString();
      console.log(content);
    }
  })
});
```

- `Promise`๋ฅผ ์ฌ์ฉํ๋ฉด ์ด๋ฐ ์ฝ๋ฐฑ ์ง์ฅ์ ๋น ์ง ์ฝ๋๋ฅผ ์ข ๋ ๋ค๋ฃจ๊ธฐ ์ฌ์ด ํํ์ ์ฝ๋๋ก ๋ง๋ค ์ ์๋ค.


## ๐ฆ Promise ์ดํดํ๊ธฐ
- ํ์์คํฌ๋ฆฝํธ์์ `Promise`๋ ๋ค์๊ณผ ๊ฐ์ด ์ ๋ค๋ฆญ ํด๋์ค ํํ๋ก ์ฌ์ฉ๋๋ค.

```ts
const numPromise: Promise<number> = new Promise<number>(์ฝ๋ฐฑํจ์);
const strPromise: Promise<string> = new Promise<string>(์ฝ๋ฐฑํจ์);
const arrayPromise: Promise<number[]> = new Promise<number[]>(์ฝ๋ฒกํ์);
```

- ํ์์คํฌ๋ฆฝํธ `Promise`์ ์ฝ๋ฐฑ ํจ์๋ ๋ค์์ฒ๋ผ `resolve`์ `reject` ํจ์๋ฅผ ๋งค๊ฐ๋ณ์๋ก ๋ฐ๋ ํํ์ด๋ค.

```ts
new Promise<T>((
  resolve: (successValue: T) => void,
  reject: (any) => void,
) => {
  // ์ฝ๋ ๊ตฌํ
});
```

### ๐ resolve์ reject ํจ์
- ๋ค์์ ๋น๋๊ธฐ API์ธ `readFile`์ ํธ์ถํ๋ ๋ด์ฉ์ ํ๋ก๋ฏธ์ค๋ก ๊ตฌํํ ์์ด๋ค.

```ts
import { readFile } from 'fs';

export const readFilePromise = (filename: string): Promise<string> =>
  new Promise<string>((
    resolve: (value: string) => void,
    reject: (error: Error) => void) => {
      readFile(filename, (err: Error, buffer: Buffer) => {
        if(err) {
          reject(err);
        } else {
          resolve(buffer.toString());
        }
      })
    }
  )
```

- ๋ค์ ์ฝ๋๋ `readFilePromise` ํจ์๊ฐ ๋ฐํํ๋ `Promise` ํ์ ๊ฐ์ฒด์ `then`, `catch`, `finally` ๋ฉ์๋๋ฅผ ๋ฉ์๋ ์ฒด์ธ ํํ๋ก ์ฌ์ฉํ๋ค.

```ts
import { readFilePromise } from "./readFilePromise";

readFilePromise('./package.json')
  .then((content: string) => {
    console.log(content);
    return readFilePromise('./tsconfig.json');
  })
  .then((content: string) => {
    console.log(content);
    return readFilePromise('.');
  })
  .catch((err: Error) => console.log('error: ', err.message))
  .finally(() => console.log('ํ๋ก๊ทธ๋จ ์ข๋ฃ'));
```

### ๐ Promise.resolve์ Promise.reject ๋ฉ์๋
- `Promise.resolve(๊ฐ)` ํํ๋ก ํธ์ถํ๋ฉด ํญ์ ์ด ๊ฐ์ `then` ๋ฉ์๋์์ ์ป์ ์ ์๋ค.

```ts
Promise.resolve({ name: 'Jack', age: 32 })
  .then(value => console.log(value)); // { name: 'Jack', age: 32 }
```

- `Promise.reject(Error ํ์ ๊ฐ์ฒด)`๋ฅผ ํธ์ถํ๋ฉด ์ด Error ํ์ ๊ฐ์ฒด๋ ํญ์ `catch` ๋ฉ์๋์ ์ฝ๋ฐฑ ํจ์์์ ์ป์ ์ ์๋ค.

```ts
Promise.reject(new Error('์๋ฌ ๋ฐ์'))
  .catch((err: Error) => console.log('error: ', err.message)); // error: ์๋ฌ ๋ฐ์
```

### ๐ then-์ฒด์ธ
- `Promise` ๊ฐ์ฒด์ `then` ๋ฉ์๋๋ฅผ ์ฌ๋ฌ ๋ฒ ํธ์ถํ๋ ์ฝ๋ ํํ๋ฅผ `then-์ฒด์ธ`์ด๋ผ๊ณ  ํ๋ค.

```ts
Promise.resolve(1)
  .then((value: number) => {
    console.log(value); // 1
    return Promise.resolve(true);
  })
  .then((value: boolean) => {
    console.log(value); // true
    return [1, 2, 3];
  })
  .then((value: number[]) => {
    console.log(value); // [1, 2, 3]
    return { name: 'jack', age: 32 };
  })
  .then((value: { name: string, age: number }) => {
    console.log(value); // { name: 'jack', age: 32 }
  })
```

### ๐Promise.all ๋ฉ์๋
- `Promise.all` ๋ฉ์๋๋ `Promise` ๊ฐ์ฒด๋ฅผ ๋ฐฐ์ด ํํ๋ก ๋ฐ์, ๋ชจ๋  ๊ฐ์ฒด๋ฅผ ๋์์ผ๋ก `resolve`๋ ๊ฐ๋ค์ ๋ฐฐ์ด๋ก ๋ง๋ค์ด ์ค๋ค.
- `Promise.all` ๋ฉ์๋๋ ์ด๋ฐ ๋ด์ฉ์ผ๋ก ๊ตฌ์ฑ๋ ๋ ๋ค๋ฅธ `Promise` ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ฏ๋ก ํด์๋ ๊ฐ๋ค์ ๋ฐฐ์ด์ `then` ๋ฉ์๋๋ฅผ ํธ์ถํด์ ์ป๋๋ค.
- ๋ง์ฝ, ๋ฐฐ์ด์ ๋ด๊ธด `Promise` ๊ฐ์ฒด ์ค ๊ฑฐ์  ๊ฐ์ฒด๊ฐ ๋ฐ์ํ๋ฉด ๋ ๊ธฐ๋ค๋ฆฌ์ง ์๊ณ  ํด๋น ๊ฑฐ์  ๊ฐ์ ๋ด์ `Promise.reject` ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค.

```ts
const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises);

getAllResolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
  .then(result => console.log(result)); // [true, 'hello']

getAllResolvedResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
  .then(result => console.log(result)) // ํธ์ถ๋์ง ์๋๋ค.
  .catch(error => console.log('error: ', error.message)); // error: error
```

### ๐ Promise.race ๋ฉ์๋
- `Promise.race`ํด๋์ค ๋ฉ์๋๋ ๋ฐฐ์ด์ ๋ด๊ธด ํ๋ก๋ฏธ์ค ๊ฐ์ฒด ์ค ํ๋๋ผ๋ `resolve`๋๋ฉด ์ด ๊ฐ์ ๋ด์ `Promise.resolve` ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค. ๋ง์ผ ๊ฑฐ์  ๊ฐ์ด ๊ฐ์ฅ ๋จผ์  ๋ฐ์ํ๋ฉด `promise.reject` ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค.

```ts
Promise.race([Promise.resolve(true), Promise.resolve('hello')])
  .then(value => console.log(value)); // true

Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
  .then(value => console.log(value)) // true
  .catch(error => console.log(error.message)); // ํธ์ถ๋์ง ์๋๋ค

Promise.race([Promise.reject(new Error('error')), Promise.resolve(true)])
  .then(value => console.log(value)) // ํธ์ถ๋์ง ์๋๋ค
  .catch(error => console.log(error.message)); // error
```

## ๐ฆ async์ await ๊ตฌ๋ฌธ

### ๐ async ํจ์์ ๋ ๊ฐ์ง ์ฑ์ง
- `async` ํจ์ ์์ ์๊ฐ ๋ถ์ ํจ์๋ ๋ค์๊ณผ ๊ฐ์ ์ฑ์ง์ ๊ฐ์ง๊ณ  ์๋ค.

> 1. ์ผ๋ฐ ํจ์์ฒ๋ผ ์ฌ์ฉํ  ์ ์๋ค.
> 2. `Promise` ๊ฐ์ฒด๋ก ์ฌ์ฉํ  ์ ์๋ค.

### ๐ async ํจ์๊ฐ ๋ฐํํ๋ ๊ฐ์ ์๋ฏธ
- `async` ํจ์๋ ๊ฐ์ ๋ฐํํ  ์ ์๋ค. ์ด๋ ๋ฐํ๊ฐ์ `Promise` ํํ๋ก ๋ณํ๋๋ฏ๋ก ๋ค์์ฒ๋ผ `then` ๋ฉ์๋๋ฅผ ํธ์ถํด `async` ํจ์์ ๋ฐํ๊ฐ์ ์ป์ด์ผ ํ๋ค.

```ts
const asyncReturn = async() => {
  return [1, 2, 3];
}

asyncReturn()
  .then(value =>  console.log(value)); // [1, 2, 3]
```
### ๐ async ํจ์์ ์์ธ ์ฒ๋ฆฌ

```ts
const asyncException = async () => {
  throw new Error('error');
}

asyncException()
  .catch(err => console.log('error: ', err.message)); // error: error
```

### ๐ async ํจ์์ Promise.all

```ts
import { readFilePromise } from "./readFilePromise"

const readFilesAll = async (fileNames: string[]) => {
  return await Promise.all(
    fileNames.map(fileNames => readFilePromise(fileNames))
  );
}

readFilesAll(['./package.json', './tsconfig.json'])
  .then(([packageJson, tsConfigJson]: string[]) => {
    console.log(packageJson);
    console.log(tsConfigJson);
  })
  .catch(err => console.log(err))
```
