export function soma(...numeros: number[]) {
  const resultado = numeros.reduce((acc, numero) => acc + numero, 0)
  return resultado
}

export function subtracao(...numeros: number[]) {
  return numeros.reduce((acc, numero) => acc - numero, 2 * numeros?.[0])
}

// export function multiplica(numero1: number, numero2: number) {
//   return numero1 * numero2
// }