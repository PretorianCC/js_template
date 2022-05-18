const multiplay = require('./app')

it('Проверяем что 2 * 2 равно 4', () => {
  expect(multiplay(2, 2)).toBe(4)
})

describe("Тест app.js", () => {
  it('Проверяем что 2 * 2 равно 4', () => {
    expect(multiplay(2, 2)).toBe(4)
  })  
  it('Проверяем если аргументы не переданы то вернется ноль', () => {
    expect(multiplay()).toBe(0)
  })  
})