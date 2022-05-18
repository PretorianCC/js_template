namespace classDecoratorName {

  @noneNameUser
  class User {
    name: string = "default";

    getName() {
      return this.name;
    }
  }

  function noneNameUser<T extends { new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      name = "none";
    }
  }

  console.log(new User().getName());

}