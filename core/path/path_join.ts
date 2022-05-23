import {join} from 'path';

// Создает правильный путь для текущей ОС
const pathFile = join(__dirname, 'template', 'index.html');
console.log(pathFile); // c:\Projects\Node\js_template\core\path\template\index.html