/** Подключение к БД mysql */

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
  
  await connect.end(err => {
    if (err) console.log(err)
  })
  
  
}