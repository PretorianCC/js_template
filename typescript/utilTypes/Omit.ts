// Создает тип, выбирая все свойства из Type, а затем удаляя Keys (строковый литерал или объединение строковых литералов).

namespace Omit {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type Color = Omit<IColor, 'A'>
  /*
  type Color = {
    R: number;
    G: number;
    B: number;
  }
  */
}