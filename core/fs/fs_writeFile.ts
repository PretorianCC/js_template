import { writeFile } from 'fs';
import { join } from 'path';

// Записывает в файл строку асинхронно
writeFile(join(__dirname, 'one.txt'), 'work', err => {
  if (err) throw new Error(err.toString());
  console.log('Файл создан');
})