/** Новая таблица в БД mysql */

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
  const queryTableNew = `CREATE TABLE IF NOT EXISTS ${tableEmails} (uid INT(20) AUTO_INCREMENT UNIQUE KEY NOT NULL, name VARCHAR(40), email varchar(40) PRIMARY KEY NOT NULL)`
  await connect.query(queryTableNew, (err)  => {
    if (err) throw error;
  });
  
  await connect.end(err => {
    if (err) console.log(err)
  })
  
  
}