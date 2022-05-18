// Размер объекта

function roughSizeOfObject(object: any ) {
  var objectList: any[] = Array<any>();
  var recurse = function(value: any ) {
      var bytes = 0;

      if ( typeof value === 'boolean' ) {
          bytes = 4;
      } else if ( typeof value === 'string' ) {
          bytes = value.length * 2;
      } else if ( typeof value === 'number' ) {
          bytes = 8;
      } else if (typeof value === 'object' && objectList.indexOf( value ) === -1) {
          objectList[ objectList.length ] = value;
          for( let i in value ) {
              bytes += 8; // assumed existence overhead
              bytes += recurse( value[i] )
          }
      }
      return bytes;
  }
  return recurse( object );
}

namespace SizeObject {
  const value: {x: number, y: number} = {x: 1, y: 2};
  const size = roughSizeOfObject(value);
  console.log(`Размер в объекте: ${size}`); // 32 байта
}

namespace SizeObjectType {
  type XY = {
    x: number;
    y: number;
  }

  const value: XY = {x: 1, y: 2};
  const size = roughSizeOfObject(value);
  console.log(`Размер в типе: ${size}`); // 32 байта
}

namespace SizeObjectClass {
  class XY {
    constructor(public x: number, public y: number) {}

    add(): number {
      return this.x + this.y;
    }

    sub(): number {
      return this.x + this.y;
    }
  }

  const value: XY = new XY(1, 2);
  const size = roughSizeOfObject(value);
  console.log(`Размер в классе: ${size}`); // 48 байт
}

namespace SizeTypeClass {
  type XY = {
    x: number;
    y: number;
  }

  class XYClass {
    constructor(public xy: XY) {}

    add(): number {
      return this.xy.x + this.xy.y;
    }

    sub(): number {
      return this.xy.x + this.xy.y;
    }
  }

  const xy: XY = {x: 1, y: 2};
  const value: XYClass = new XYClass(xy);
  const size = roughSizeOfObject(value);
  console.log(`Размер в классе типа: ${size}`); // 56 байт

}