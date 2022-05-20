// Возвращает новый массив, в котором все элементы вложенных под массивов были рекурсивно "подняты" на указанный уровень depth.

const arr1 = [1, 2, [3, 4]]
console.log(arr1.flat()) // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
console.log(arr2.flat()) // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]]
console.log(arr3.flat(2)) // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(arr4.flat(Infinity)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr5 = [1, 2, , 4, 5] 
console.log(arr5.flat()) // [1, 2, 4, 5]

const arr6 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(arr4.flat(2)) // [ 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]
