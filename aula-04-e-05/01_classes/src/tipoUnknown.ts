interface Aluno {
  nome: string,
  mediaGlobal: number,
}

const aluno1 = {
  nome: 'Fulano',
  mediaGlobal: 8.8,
}

function calculaMediaSemestral(aluno: unknown | Aluno) {
  console.log((aluno as Aluno).nome)
  // console.log((aluno as Aluno).idade)
}