import {getName} from './second.mjs';

// Tree shaking
const a = 5;
const b = 10;

function someFn() {
  return '123';
}

console.log('Hello world' + getName() + someFn());
