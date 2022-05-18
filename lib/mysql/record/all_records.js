/** Получить все записи таблицы mysql */

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
  
  const tableEmails = 'emails'
  const queryRecords = `SELECT * FROM ${tableEmails}`;
  await connect.query(queryRecords, (err, result, fields)  => {
    if (err) console.log(err);
    console.log(result)
  });
  
  await connect.end(err => {
    if (err) console.log(err)
  })
  
}