// Создает тип, состоящий из типа экземпляра функции конструктора в Type.
namespace InstanceType {

  class C {
    x = 0;
    y = 0;
  }
 
  type T0 = InstanceType<typeof C>;
  /*
  type T0 = C
  */
}