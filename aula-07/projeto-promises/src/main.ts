import { setTimeoutPromise } from "./setTimeoutPromise";
// Estados das promises: resolved ou rejected ou pending (XOR)

export async function esperaIntervalo() {
  const tempo = 3000;

  setTimeoutPromise(() => {
    const nome = "Fulano";

    return `Olá, ${nome}`;
  }, 2000)
    .then((cumprimento) => {
      console.log(cumprimento);

      return setTimeoutPromise(() => {
        const numero1 = 14;
        const numero2 = 33;

        const soma = numero1 + numero2;
        return soma;
      }, 1500);
    })
    .catch((error) => {
      console.error(error);
    })
    .then((soma) => console.log(soma))
    .catch((error) => {
      console.error(error);
    });

  await setTimeoutPromise(() => {
    console.log(`passaram-se ${tempo}ms na promise`);
  }, tempo);

  const resultadoDaSoma = await setTimeoutPromise(() => {
    const numero1 = 1;
    const numero2 = 1;

    const soma = numero1 + numero2;
    return soma;
  }, tempo);

  console.log(resultadoDaSoma);

  setTimeout(() => {
    console.log(`passaram-se ${tempo}ms`);
  }, tempo);

  console.log("instrução síncrona");
}

await setTimeoutPromise(() => {
  console.log(`passaram-se ${1200}ms na promise`);
}, 1200);

esperaIntervalo();
