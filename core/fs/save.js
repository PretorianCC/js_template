/** Запись файла синхронно. */

const fs = require('fs')

fs.writeFile('one.txt', 'work', err => {
  if (err) console.log('Ошибка записи файла.')
})