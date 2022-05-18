// Сопоставимый тип Required<T> удаляет все необязательные модификаторы ?: приводя члены объекта к обязательным.  
namespace Required {

  interface IColor {
    R: number;
    G: number;
    B: number;
    A?: number;
  }

  type Color = Required<IColor>;

  /*
  {
    R: number;
    G: number;
    B: number;
    A: number;
  }
  */
  const color: IColor = {R: 0, G: 0, B: 0, A: 255};

  console.log(color);
}