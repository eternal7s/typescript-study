import * as R from 'ramda';

const words: string[] = R.split(' ')(`Hello world!, I'm Peter.`);
console.log('split');
console.log(words);
console.log('join');
console.log(R.join(' ', words));