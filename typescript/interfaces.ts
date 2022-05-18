namespace interfaces {

  // интерфейс
  interface IPoint {
    x: number;
    y: number;
    xy(): number;
  }

  // наследование в интерфейсе
  interface I3DPoint extends IPoint{
    z: number;
  }

  function print3(coord: IPoint) {}

  // дополнение интерфейсов
  interface ITest {
    a: number;
  }
  interface ITest {
    b: number;
  }

  // Неограниченное число ключ и значение в интерфейсе
  interface KeyTest {
    [key: string]: number
  }

  // преобразование из наследуемых интерфейсов
  const c1 = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint
  }
  // const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

  const iTest: ITest = {a: 1, b: 3};
  console.log(iTest);

}