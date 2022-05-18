// Сопоставимый тип Partial<T> добавляет членам объекта модификатор ?: делая их таким образом необязательными.
// Тип сопоставления Partial<T> является гомоморфным и не влияет на существующие модификаторы, а лишь расширяет модификаторы конкретного типа. 
namespace Partial {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type Color = Partial<IColor>;
  /*
  {
    R?: number | undefined;
    G?: number | undefined;
    B?: number | undefined;
    A?: number | undefined;
  }
  */  

  const color: Color = {};

  console.log(color);
}