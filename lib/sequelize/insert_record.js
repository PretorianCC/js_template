const { Sequelize } = require('sequelize')
const User = require('./model')

const sequelize = new Sequelize('*****', '*****', '*****', {
  host: 'list-site.ru',
  dialect: 'mysql',
  logging: false    // Отключить логирование в терминал
})


main()
const user = User.connectTable(sequelize);
async function main() {

  try {
    await sequelize.authenticate();
    console.log('Подключение успешно установлено.');
  } catch (err) {
    console.error('Не удалось подключиться к базе данных:', err);
    return
  }
  
  await sequelize.sync();

  const record = {
    name: 'Sergey Kurganov',
    email: 'pi.2002@yandex.ru'
  }

  const result = await User.create(record);
  console.log(result.toJSON());
  sequelize.close()
}