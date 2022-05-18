// Создает тип путем извлечения из команды «Тип» всех членов объединения, которые могут быть назначены для объединения.

namespace Extract {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type ColorEx = Extract<'red' | 'green' | 'blue' | IColor, string>
  /*
  type ColorEx = 'red' | 'green' | 'blue'
  */
}