import {resolve} from 'path';

// Создает корректный путь, при нескольких противоречащих данных о пути.
const pathFile = resolve(__dirname, './template', '/index.html');
console.log(pathFile); // c:\index.html