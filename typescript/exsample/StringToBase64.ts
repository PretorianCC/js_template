import { Buffer } from 'buffer';
namespace StringToBase64 {
  const buf = Buffer.from('hello world', 'utf8');
  const base64 = buf.toString('base64');
  console.log(base64);
}