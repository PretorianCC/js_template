/** Переименование таблицы в mysql */

const mysql = require('mysql')

const config = {
  host: 'list-site.ru',
  user: '*****',
  database: '*****',
  password: '*****'
}

main()
async function main() {
  const connect = await mysql.createConnection(config)
  connect.connect(err => {
    if (err) {
      console.log('Ошибка подключения к базе данных.')
      return
    }
  })
  
  const tbTestAllRecords = "RENAME TABLE test TO emails;";
  await connect.query(tbTestAllRecords, (err, result, fields)  => {
    if (err) console.log(err);
  });
  
  await connect.end(err => {
    if (err) console.log(err)
  })
  
}