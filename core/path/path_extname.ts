import {extname} from 'path';

// Возвращает имя расширения файла
const extFile = extname(__filename);
console.log(extFile); // .ts