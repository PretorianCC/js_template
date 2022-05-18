// Создает тип кортежа или массива из типов функции конструктора. Он создает тип кортежа со всеми типами параметров (или ни чего, если тип не является функцией).
namespace ConstructorParameters {

  class User {
    constructor(public id: number, public name: string) {}
  }

  type RС = ConstructorParameters<typeof User>;
  /*
  type RС = [id: number, name: string];
  */

}