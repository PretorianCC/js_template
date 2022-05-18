namespace factoryDecoratorName {

  @setName('sergey')
  @CreatedAt
  class User {
    name: string = "default";

    getName() {
      return this.name;
    }
  }

  function setName(name: string) {
    return <T extends { new(...args: any[]): {}}>(constructor: T) => {
      return class extends constructor {
        name = name;
      }
    }
  }

  // Для добавление к типу класса свойства декоратора.
  type CreatedAt = {
    createdAt: Date;
  };

  // Декоратор добавляет время инстансу класса.
  function CreatedAt<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      createdAt = new Date();
    }
  }

  console.log(new User().getName());
  console.log((new User() as User & CreatedAt).createdAt);


}