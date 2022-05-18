class D2_Point {
  // private - доступно только в классе
  // readonly - только читать, но не записывать (запись разрешена только в конструкторе)
  // protected - доступно в классе наследнике
  // static - доступно не в объекте, а в самом классе

  constructor(private x: number, private y: number) {}

  private func() {
    this.x = 10
  }
}

const point = new D2_Point(1, 2)
console.log(point)

class D3_Point extends D2_Point {
  z: number
  constructor(x: number, y: number, z: number) {
    super(x, y)
    this.z = z
  }
}

const point3d = new D3_Point(0, 0, 0)

// статические данные и методы
class StaticTest {
  static c = 'asd'
  static test() {}
}

const cc = StaticTest.c

// абстрактные классы
abstract class TestAbstract {
  myMethod() {}
}

class TestExAbstract extends TestAbstract {}

const abs = new TestExAbstract()
