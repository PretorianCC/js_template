import {basename} from 'path';

// Возвращает последнюю часть пути (например название файла)
const filePath = basename(__filename);
const namePath = basename(__filename, '.ts');
console.log(filePath); // path_basename.ts
console.log(namePath); // path_basename