@classDecorator
class XY {

  @propertyDecorator
  private _x = 0;
  private _y = 0;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  @acsessorDecorator
  get y(): number {
    return this._y;
  }

  set y(value) {
    this._y = value;
  }

  @methodDecorator
  console(): void {
    console.log(`{x=${this.x}, y=${this.y}}`);
  }

  @factoryDecorator("Вывод:")
  print(): void {
    console.log(`{x=${this.x}, y=${this.y}}`);
  }
  
  add(@parametrDecorator(-1) value: number = 0) {
    this._x = this._x + value;
    this._y = this._y + value;
  }
}

/**
 * Декоратор класса.
 * @param constructor конструктор класса.
 */
function classDecorator(constructor: typeof XY): void {
  Object.seal(constructor); // запрещает добавлять/удалять свойства и методы к объекту
}

/**
 * Декоратор свойства.
 * @param target конструктор класса.
 * @param key имя свойства.
 */
function propertyDecorator(target: any, key: string): void {
  console.log(target, key);
}

/**
 * Декоратор акссесора.
 * @param target конструктор класса.
 * @param key имя аксессора.
 * @param desc дескриптор метода, {get: Function, set: Function, enumerable: boolean, configurable: boolean}.
 */
 function acsessorDecorator(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(target, key, desc);
}

/**
 * Декоратор метода.
 * @param target конструктор класса. 
 * @param key имя метода.
 * @param desc дескриптор метода, {value: Function, writable: boolean, enumerable: boolean, configurable: boolean}.
 */
function methodDecorator(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;
  desc.value = function() {
    console.log("Это объект:");
    return method.apply(this, arguments);
  }
}

/**
 * Фабрика декораторов.
 * @param message любые параметры.
 * @returns декоратор.
 */
function factoryDecorator(message: string) {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    const method = desc.value;
    desc.value = function() {
      console.log(message);
      return method.apply(this, arguments);
    }
  }
}

/**
 * Фабрика декоратора для параметра.
 * @param value значение.
 * @returns декоратор.
 */
function parametrDecorator(value: number) {
  return function (target: any, key: string, index: number) {
    const method: Function = target[key];
    method.call(target, value);
    target.print();
    console.log(target)
  }   
}

const xy = new XY(4, 5);
xy.console();
xy.add(3);
xy.print();