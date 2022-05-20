// Выполняет указанную функцию один раз для каждого элемента в массиве.

let func = (currentValue, index, array) => {
  console.log(currentValue, index, array);
};

[1, 2, 3, 4, 5].forEach(func);
[1, 2, 3, 4, 5].forEach((currentValue, index, array) => console.log(currentValue, index, array) );