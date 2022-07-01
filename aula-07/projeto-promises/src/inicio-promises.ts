export const somaPromise = new Promise((resolve, reject) => {
  try {
    const numero1 = 1;
    const numero2 = 1;

    const soma = numero1 + numero2;
    resolve(soma);
  } catch (error) {
    reject("Ocorreu um erro inesperado");
  }
});

async function bootstrap() {
  try {
    const resultado = await somaPromise;
    console.log(resultado);
    console.log("meu código continuou executando");
  } catch (error) {}
}

bootstrap();
