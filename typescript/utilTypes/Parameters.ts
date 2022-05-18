// Создает тип кортежа из типов, используемых в параметрах типа функции Type.
namespace Parameters {

  class User {
    constructor(public id: number, public name: string) {}
  }

  function getData(id: number): User {
    return new User(id, 'user');
  }

  type RP = Parameters<typeof getData>;
  /*
  type RT = [id: number];
  */

}