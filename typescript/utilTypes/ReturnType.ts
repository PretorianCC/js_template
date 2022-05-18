// Создает тип, состоящий из возвращаемого типа функции Type.
namespace ReturnType {

  class User {
    constructor(public id: number, public name: string) {}
  }

  function getData(id: number): User {
    return new User(id, 'user');
  }

  type RT = ReturnType<typeof getData>;
  /*
  type RT = User;
  */

}