import { CreatePersonDTO, Person } from "./Person";

interface CreateStudentDTO extends CreatePersonDTO {
  globalAverage: number
  attendance: number
}

class Student extends Person {
  public globalAverage
  // private _attendance
  #attendance: number

  constructor(data: CreateStudentDTO) {
    const { name, age, email, globalAverage, attendance } = data
    // const persondata = { name, age, email }
    // super(persondata)
    super({ name, age, email })
    
    console.log(this.teste)
    this.globalAverage = globalAverage
    this.attendance = attendance
  }

  get attendance() {
    return this.#attendance
  }

  set attendance(attendance: number) {
    if(attendance < this.#attendance){
      return
    }

    this.#attendance = attendance
  }
}

const aluno1 = new Student({
  name: 'Maria da Silva',
  age: 23,
  email: 'maria221@outlook.com',
  globalAverage: 8.5,
  attendance: 9,
})

// console.log(aluno1)
console.log(aluno1)
console.log(aluno1.attendance)
// console.log(aluno1.teste)
// console.log(aluno1.#teste)
// console.log(aluno1.#attendance)
// console.log(aluno1._attendance)

aluno1.attendance = 4

// console.log(aluno1)
