/**
 * Создание модели таблицы и полей.
 */

const { Model, DataTypes } = require('sequelize');

/**  Типы:
Strings
DataTypes.STRING             // VARCHAR(255)
DataTypes.STRING(1234)       // VARCHAR(1234)
DataTypes.STRING.BINARY      // VARCHAR BINARY
DataTypes.TEXT               // TEXT
DataTypes.TEXT('tiny')       // TINYTEXT
DataTypes.CITEXT             // CITEXT          PostgreSQL и SQLite только.

Boolean
DataTypes.BOOLEAN            // TINYINT(1)

Numbers
DataTypes.INTEGER            // INTEGER
DataTypes.BIGINT             // BIGINT
DataTypes.BIGINT(11)         // BIGINT(11)
DataTypes.FLOAT              // FLOAT
DataTypes.FLOAT(11)          // FLOAT(11)
DataTypes.FLOAT(11, 10)      // FLOAT(11,10)
DataTypes.REAL               // REAL            PostgreSQL only.
DataTypes.REAL(11)           // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12)       // REAL(11,12)     PostgreSQL only.
DataTypes.DOUBLE             // DOUBLE
DataTypes.DOUBLE(11)         // DOUBLE(11)
DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)
DataTypes.DECIMAL            // DECIMAL
DataTypes.DECIMAL(10, 2)     // DECIMAL(10,2)

Unsigned & Zerofill integers - MySQL/MariaDB only
В MySQL и MariaDB типы данных INTEGER, BIGINT, FLOAT и DOUBLE могут быть установлены как беззнаковые или нулевые (или оба):
DataTypes.INTEGER.UNSIGNED
DataTypes.INTEGER.ZEROFILL
DataTypes.INTEGER.UNSIGNED.ZEROFILL

Dates

DataTypes.DATE       // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6)    // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY   // DATE without time

UUIDs
Для UUID используйте DataTypes.UUID. Он становится типом данных UUID для PostgreSQL и SQLite, и CHAR (36) для MySQL.
Sequelize может автоматически создавать UUID для этих полей, просто используйте Sequelize.UUIDV1 или Sequelize.UUIDV4 в качестве значения по умолчанию:
{
  type: DataTypes.UUID,
  defaultValue: Sequelize.UUIDV4 // Or Sequelize.UUIDV1
}
*/

/**
Поля свойств:
type (DataTypes) - тип
allowNull (boolean) - разрешить значение null
unique (boolean)- уникальное значение
primaryKey (boolean) - уникальный первичный ключ
autoIncrement (boolean) - можно использовать для создания auto_incrementing целых столбцов
field (String) - можно указать имя настраиваемого столбца с помощью атрибута
comment (String) - комментарий к полю
bar_id: {         - ссылка на другую модель
    type: DataTypes.INTEGER,
    references: {
      model: Bar, - ссылка на другую модель
      key: 'id', - имя столбца ссылочной модели

      // В PostgreSQL можно дополнительно объявить, когда проверять ограничение внешнего ключа, передавая тип Deferrable.
      deferrable: Deferrable.INITIALLY_IMMEDIATE
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Немедленная проверка ограничений внешнего ключа
      // - `Deferrable.INITIALLY_DEFERRED` - Отложить проверку ограничений внешнего ключа до конца транзакции
      // - `Deferrable.NOT` - Вообще не откладывать проверку (по умолчанию) - это не позволит динамически изменять правило в проводке
    }
  }
*/

class User extends Model {

  static get model() {
    return {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      }
    }
  }

  static connectTable(sequelize) {
    User.init(User.model, {
      sequelize,
      modelName: this.name // Название модели
    });
  }

}

module.exports = User