import { Buffer } from 'buffer';

const buf = Buffer.from('hello world', 'utf8');
const base64 = buf.toString('base64');
console.log(base64);