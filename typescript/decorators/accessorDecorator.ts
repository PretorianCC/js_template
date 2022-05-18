namespace accessorDecoratorName {

  class User {
    private _users: number;

    @Log()
    set users(num: number) {
      this._users = num;
    }

    get users(): number {
      return this._users;
    }

    getUserInDatabase() {
      throw new Error('Ошибка');
    }
  }

  // Нельзя установить декоратор на оба ацессора, только на set или get, но распространяться будет на оба.
  function Log() {
    return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
      const set = descriptor.set;
      descriptor.set = (...args: any) => {
        console.log(args);
        set?.apply(target, args);
      }
    }
  }

  const user = new User();
  user.users = 100;
}
