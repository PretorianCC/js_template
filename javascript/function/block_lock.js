/** Функция замыкание */

function lock(n) {
  let iterator = n
  return function() {
    return ++iterator
  }
}

const a = lock(3)
console.log(a())
console.log(a())
console.log(a())