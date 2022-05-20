// Создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const arr = [1, 2, 3, 4, 5];
let result = arr.map((curr, index) => ({index, curr}));
console.log(result);

const color = ['red', 'green', 'blue'];
result = color.map(curr => `Это цвет: ${curr}`)
console.log(result);