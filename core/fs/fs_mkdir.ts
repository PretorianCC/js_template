import {mkdir} from 'fs';
import {join} from 'path';

// Создает каталог
mkdir(join(__dirname, 'views'), err => {
  if (err) throw new Error(err.toString());
  console.log('Папка создана');
});