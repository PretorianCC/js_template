/** Хранит дополнительные свойства объекта не присутствующие в самом объекте. */
// require('reflect-metadata')

// const box = {
//   color: 'black'
// }

// // Метаданные для объекта
// Reflect.defineMetadata('note', 'hello', box)
// Reflect.defineMetadata('width', 30, box)
// const note = Reflect.getMetadata('note', box)
// const width = Reflect.getMetadata('width', box)

// console.log(note, width)

// // Метаданные для свойств объекта
// Reflect.defineMetadata('note', 'white', box, 'color')
// const color = Reflect.getMetadata('note', box, 'color')
// console.log(color)


class Car {
  drive() {
    console.log("dffdfd")
  }
}
Object.defineProperties(Car.prototype, {
  thisWillShow: {
      value: function () {},
      enumerable: true
  },
  thisWillNotShow: {
      value: function () {},
      enumerable: false
  }
});
console.log(Car.prototype)