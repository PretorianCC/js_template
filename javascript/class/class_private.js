// Приватные гетторы, сетторы, методы

class Person {
  #birthYear = 1993

  get #age() {
    return this.#getYear() - this.#birthYear
  }

  logAge() {
    console.log(this.#age)
  }

  #getYear() {
    return new Date().getFullYear()
  }
}

const person = new Person()
person.logAge()
