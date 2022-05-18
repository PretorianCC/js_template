// Сопоставимый тип Readonly<T> добавляет каждому члену объекта модификатор readonly, делая их тем самым только для чтения.
namespace Readonly {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type Color = Readonly<IColor>;

  /*
  {
    readonly R: number;
    readonly G: number;
    readonly B: number;
    readonly A?: number | undefined;
  }
  */
  const color: IColor = {R: 0, G: 0, B: 0};
  // color.R = 100; // Ошибка, только для чтения
  console.log(color);

}