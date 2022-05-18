namespace parametrDecoratorName {

  class User {
    private _users: number;

    getUserInDatabase(): number {
      return this._users;
    }

    setUserInDatabase(@Positive() num: number): void {
      this._users = num;
    }
  }

  // Нельзя установить декоратор на оба ацессора, только на set или get, но распространяться будет на оба.
  function Positive() {
    return (target: Object, propertyKey: string | symbol, parametrIndex: number) => {
    }
  }

  const user = new User();
}
