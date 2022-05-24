import {appendFile} from 'fs';
import { join } from 'path';

// Добавить новый контент в файл
appendFile(join(__dirname, 'one.txt'), ' add content', err => {
  if (err) throw new Error(err.toString());
  console.log('Добавлен контент');
});