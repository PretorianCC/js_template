import { rename } from 'fs';
import { join } from 'path';

rename(
  join(__dirname, 'fs_readFile.ts'),
  join(__dirname, 'fs_readFile.bak'),
  err  => {
    if (err) throw err;
    console.log("Файл переименован");
  }
);