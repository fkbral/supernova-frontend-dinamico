interface IPerson {
  name: string
  age: number,
  ageDoubled: number,
  email: string,
  isAboveAge: () => boolean
}

const person1: IPerson = {
  age: 23,
  get ageDoubled() {
    return this.age * 2
  },
  email: 'maria221@outlook.com',
  name: 'Maria da Silva',
  // isAboveAge: function(age: number) {
  //   return age >= 18 
  // }
  isAboveAge() {
    return this.age >= 18 
  }
}

const person2: IPerson = {
  age: 15,
  get ageDoubled() {
    return this.age * 2
  },
  email: 'joana342@outlook.com',
  name: 'Joana da Silva',
  isAboveAge() {
    return this.age >= 18 
  }
}

// pessoa1.ageTripled = pessoa1.age * 3
// pessoa2.ageTripled = pessoa2.age * 5
// pessoa2.ageDoubled = pessoa1.age * 10
console.log(person1.isAboveAge())
console.log(person2.isAboveAge())
console.log(person1.ageDoubled)
console.log(person2.ageDoubled)
console.log(person1)
console.log(person2)