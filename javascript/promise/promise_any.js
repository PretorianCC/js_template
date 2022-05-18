// Выполнение первого самого быстрого промиса.
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((value) => console.log(value));