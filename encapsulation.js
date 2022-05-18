// 1. Создание объекта.
const User1 = {
  name: 'Maks',
  getName() {
    return this.name
  },
  setName(name) {
    this.name = name
  }
}

console.log(User1.getName())

// 2. Замыкание.
function User2(name) {
  let userName = name
  
  return {
    getName() {
      return userName
    },
    setName(name) {
      userName = name
    }
  }
}

const sergey = new User2('Sergey')
console.log(sergey.getName())

// 3. Замыкание с защитой методов от изменения.
function User3(name) {
  let userName = name
  
  return Object.freeze({
    getName() {
      return userName
    },
    setName(name) {
      userName = name
    }
  })
}

const vadim = new User3('Vadim')
console.log(vadim.getName())

// 4. Замыкание с помощью символа.
function User4(name) {
  const symbol = Symbol()
  
  return {
    [symbol]: name,
    getName() {
      return this[symbol]
    },
    setName(name) {
      this[symbol] = name
    }
  }
}

const anton = new User4('Anton')
console.log(anton.getName())

function User(name = "User"){
  this.name = name;
  this.isAdmin = true;
}

const ser = new User()
console.log(ser);