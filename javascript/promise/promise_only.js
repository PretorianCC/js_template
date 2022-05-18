// Использование одного промиса.
const promise = new Promise((resolve, reject) => {
  resolve("Ok")
})
promise
  .then(x => {
    console.log(x + " 1")
    return x
  })
  .then(y => {
    throw("error")
    console.log(y + " 2")
  })
  .catch( err => console.log(err))
  .finally(() => console.log("Закончен функционал 1"))
