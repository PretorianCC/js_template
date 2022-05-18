const color: string[] = ['red', 'green', 'blue'];
const num: number[] = [1, 2, 3, 4, 5];

// Создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const result1: {index: number, curr: number}[] = num.map((curr: number, index: number): {index: number, curr: number} => ({index, curr}));
console.log(result1);

const result2: string[] = color.map((curr: string, index: number): string => `Это цвет: ${curr}`);
console.log(result2);

// Выполняет функцию callback один раз для каждого элемента
num.reduce((prev: number, curr: number, index: number): number => {
  console.log(prev, curr, index)
  return prev
})

color.reduce((prev: string, curr: string, index: number): string => {
  console.log({prev, curr, index})
  return curr
})

// Объединяет все элементы массива в строку через указанный разделитель.
const strJoin: string = color.join('-');
console.log(strJoin);

// Возвращает новый массив склеивая массивы.
const concatArr: number[] = num.concat(num, num);
console.log(concatArr);

// Создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const resultFilter: number[] = num.filter((el: number): boolean => el > 3);
console.log(resultFilter);