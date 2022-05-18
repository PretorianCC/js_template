/** Вставить запись в таблицу mysql */

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
  const queryInsertRecord = `INSERT INTO ${tableEmails} SET ?`;
  const record = {
    name: 'Sergey Kurganov',
    email: 'pi_2002@mail.ru'
  }
  await connect.query(queryInsertRecord, record, (err, result, fields)  => {
    if (err) console.log(err);
  });
  
  await connect.end(err => {
    if (err) console.log(err)
  })
  
}