// Строит тип исключением из UnionType всех членов, которые являются присваиваемыми ExcludedMembers. Обратно Extract.

namespace Exclude {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type ColorEx = Exclude<'red' | 'green' | 'blue' | IColor, string>
  /*
  type ColorEx = IColor
  */
}