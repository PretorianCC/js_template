// Выполняет функцию callback один раз для каждого элемента
const arr = [1, 2, 3, 4, 5];
arr.reduce((prev, curr, index) => {
  console.log(prev, curr, index)
  return prev
})

const color = ['red', 'green', 'blue'];
color.reduce((prev, curr, index) => {
  console.log({prev, curr, index})
  return curr
})
