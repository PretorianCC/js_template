/** Запись json файла синхронно. */

const fs = require('fs')

const child = {
  name: 'Sergey Kurganov',
  age: 48,
  department: 'History',
  car: 'no'
}

fs.writeFile('one.json', JSON.stringify(child), err => {
  if (err) console.log('Ошибка записи файла.')
})