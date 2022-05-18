namespace propertyDecoratorName {

  class User {
    @Max(100)
    users: number;

    getUserInDatabase() {
      throw new Error('Ошибка');
    }
  }

  function Max(max: number) {
    return (target: Object, propertyKey: string | symbol) => {
      let value: number;
      const setter = function (newValue: number) {
        if (value > max) {
          console.log(`Нельзя установить значение больше ${max}`);
        } else {
          value = newValue;
        }
      }
      const getter = function () {
        return value;
      }
      Object.defineProperty(target, propertyKey, {
        set: setter,
        get: getter
      });
    }
  }

  const user = new User();
  user.users = 1;
  console.log(user.users);

}