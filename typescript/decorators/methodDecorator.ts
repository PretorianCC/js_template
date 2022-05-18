namespace methodDecoratorName {

  class User {
    name: string = "default";

    @Log
    getName() {
      throw new Error('Error');
    }
  }

  // Добавить логирование в метод.
  function Log(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    const method = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      return await method?.apply(target, args);
    }
  }

  // Перехват ошибок для асинхронных методов.
  function CatchAsync(retrow: boolean = false) {
    return (
      target: Object,
      propertyKey: string | symbol,
      descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value;
    descriptor.value = async (...args: any[]) => {
      try {
        return await method?.apply(target, args);
      } catch(e) {
        if (e instanceof Error) {
          console.log(e.message);
          if (retrow) {
            throw e;
          }
        }
      }
    }
  }

  }
  console.log(new User().getName());

}