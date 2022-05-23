import {parse} from 'path';

// Полная информация о путях к файлу
const pathFile = parse(__filename);
console.log(pathFile);
/* {
  root: 'c:\\',
  dir: 'c:\\Projects\\Node\\js_template\\core\\path',
  base: 'path.parse.ts',
  ext: '.ts',
  name: 'path.parse'
} */