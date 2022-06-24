interface PersonContract {
  name: string
  age: number,
  ageDoubled: number,
  email: string,
  isAboveAge: () => boolean
}

interface CreatePersonDTO {
  name: string
  age: number
  email: string
}

class Person implements PersonContract {
  public name
  public age
  public email
  protected teste: string

  // constructor(name: string, age: number, email: string) {
  constructor(data: CreatePersonDTO) {
    const { name, age, email} = data
    
    this.name = name
    this.age = age
    this.email = email
    this.teste = 'qualquer coisa'
  }

  get ageDoubled(): number {
    return this.age * 2
  }

  isAboveAge(): boolean {
    return this.age >= 18
  } 

  // calculateAgeDoubled(): number {
  //   return this.age * 2
  // }
}

export { Person, CreatePersonDTO }