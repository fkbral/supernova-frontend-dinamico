import { Person } from "./models/Person"
// const pessoa1 = new Person('Maria da Silva', 23, 'maria221@outlook.com')
// const pessoa2 = new Person('Joana da Silva', 15, 'joana342@outlook.com')


const pessoa1 = new Person({
  name: 'Maria da Silva',
  age: 23,
  email: 'maria221@outlook.com',
})

const pessoa2 = new Person({
  name: 'Joana da Silva', 
  age: 15, 
  email: 'joana342@outlook.com',
})

// pessoa1.ageTripled = pessoa1.age * 3
// pessoa2.ageTripled = pessoa2.age * 5
// pessoa2.ageDoubled = pessoa1.age * 10
console.log(pessoa1.isAboveAge())
console.log(pessoa2.isAboveAge())
console.log(pessoa1)
console.log(pessoa2)

// pessoa1.ageDoubled = () => 'teste'
// pessoa1.calculateAgeDoubled = () => 'teste'
console.log(pessoa1.ageDoubled)
// console.log(pessoa1.calculateAgeDoubled())