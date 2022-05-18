// Геттеры и сеттеры.

class XY {

  constructor(x = 0, y = 0) {
    this._x = x
    this._y = y
  }

  set x(val) {
    this._x = val
  }

  get x() {
    return this._x
  }

  set y(val) {
    this._y = val
  }

  get y() {
    return this._y
  }

  toString() {
    return `{ x=${this.x}, y=${this.y} }`
  }

  runtimeType() {
    return 'XY'
  }

}

const xy = new XY(4, 5)
console.log(xy.toString())
console.log(xy.runtimeType())