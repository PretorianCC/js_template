namespace type {

  // простой тип
  type stringOrNumber = string | number

  function print1(coord: stringOrNumber) {}

  // объектный тип
  type D2Point = {
    x: number;
    y: number;
  }

  function print2(coord: D2Point) {}

  // наследование типа
  type D3Point = D2Point & {
    z: number
  }

  const xyz: D3Point = {x: 1, y: 2, z: 3}

  // объектный тип
  type RGBA = {
    readonly R: number, // только для чтения
    readonly G: number, // только для чтения
    readonly B: number, // только для чтения
    readonly A?: number // необязательное свойство
  }

  const rgba: RGBA = {R: 1, G:2, B: 3};

  // литеральный тип
  const j: 'test' = 'test'

  // литеральный тип вместе с интерфейсом
  type actionType = 'up' | 'down'

  interface ComplexAction {
    s: string
  }

  function perfomAction(action: actionType | ComplexAction) {
    switch(action) {
      case 'up': return -1
      case 'down': return 1
    }
  }
}

