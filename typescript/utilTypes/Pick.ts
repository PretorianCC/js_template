// Создает тип, выбирая набор свойств Keys (строковый литерал или объединение строковых литералов) из Type.

namespace Pick {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type Color = Pick<IColor, 'R' | 'G' | 'B'>
  /*
  type Color = {
    R: number;
    G: number;
    B: number;
  }
  */
}