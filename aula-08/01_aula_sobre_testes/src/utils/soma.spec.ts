import { soma, subtracao } from "./operacoes"

describe('Função soma', () => {
  test('A soma de dois números (1 + 2) é igual a 3', function() {
    const resultado = soma(1, 2)

    expect(resultado).toEqual(3)
  })

  test('A soma de dois números (0 + 0) é igual a 0', function() {
    const resultado = soma(0, 0)

    expect(resultado).toEqual(0)
  })

  test('A soma de três números (1 + 2 + 0) é igual a 3', function() {
    const resultado = soma(1, 2, 0)

    expect(resultado).toEqual(3)
  })

  test('A soma de três números (0 + 1 + 2) é igual a 3', function() {
    const resultado = soma(0, 1, 2)

    expect(resultado).toEqual(3)
  })

  test('A subtracao de dois números iguais (10, 10) é igual a 0', () => {
    expect(subtracao(10, 10)).toEqual(0)
  })

  test('A subtracao de um número com a metade dele (10, 10/2) é igual a o número divido por 2', () => {
    expect(subtracao(10, 10/2)).toEqual(10/2)
  })

  test('A subtracao de um número com a metade dele (10, 10/2) é igual a o número divido por 2', () => {
    expect(subtracao(11, 11/2)).toEqual(11/2)
  })

  test('A subtracao de três números (3, 5, 1) é igual a -3', () => {
    expect(subtracao(3,5,1)).toEqual(-3)
  })
})