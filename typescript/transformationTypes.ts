// Тип ключей
type PointTT = {
  x: number,
  y: number
}
type P = keyof PointTT

// Получить тип
function MyF() {
  return {a: 1}
}
type K = ReturnType<typeof MyF>

// Получить тип из массива
const MyArray = [
  {name: 'Вася', age: 30}
]
type Person = typeof MyArray[number]
type Age = typeof MyArray[number]['age']

// Получать тип по условию
type MessageOf<T> = T extends {message: unknown} ? T['message'] : never
interface Email {
  message: string
}
interface Cat {
  test: number
}
type EmailMessageContents = MessageOf<Email>
type CatMessageContents = MessageOf<Cat>

// Мапить один тип на другой
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean
}

// Литеральные типы, подставить строку из другого типа
type world = 'world'
type Gretting = `hello ${world}`