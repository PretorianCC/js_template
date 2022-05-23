import path, {normalize} from 'path';

// Превращает невалидный путь в работающий.
const pathFile = normalize('C:\\1\\2\\\\3\\..\\4.txt');
console.log(pathFile); // C:\1\2\4.txt