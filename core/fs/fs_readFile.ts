import { readFile } from 'fs';
import { join } from 'path';

// Получить из файла
readFile(join(__dirname, 'fs_readFile.ts'), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

// Получить из файла строку
readFile(join(__dirname, 'fs_readFile.ts'), 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});