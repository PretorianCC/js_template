// Выполнение нескольких промисов сразу вместе.
function mul(n) {
  return new Promise((resolve, reject) => resolve(n * n))
}

function add(n) {
  return new Promise((resolve, reject) => resolve(n + n))
}

Promise.all([
  mul(3),
  add(3)
])
  .then(([numMul, numAdd]) => console.log(numMul, numAdd))
  .catch(err => console.log(err))
  .finally(() => console.log("Закончен функционал 3"))

  
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values);
});