// Выполнение нескольких промисов последовательно.
function num() {
  return new Promise((resolve, reject) => resolve(2))
}

function mul(n) {
  return new Promise((resolve, reject) => resolve(n * n))
}

function add(n) {
  return new Promise((resolve, reject) => resolve(n + n))
}

num()
  .then(data => {    
    console.log(data)
    return mul(data)
  })
  .then(data => {
    console.log(data)
    return add(data)
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log("Закончен функционал 2"))
