import { setTimeoutPromise } from "./setTimeoutPromise";

async function runPromises() {
  //   const multiplicacao1 = await new Promise((resolve, reject) => resolve(2 * 3));
  //   console.log(multiplicacao1);

  //   const multiplicacao2 = await setTimeoutPromise(() => 3 * 3, 1000);
  //   console.log(multiplicacao2);

  //   const multiplicacao3 = await setTimeoutPromise(() => 20 * 3, 1000);
  //   console.log(multiplicacao3);

  //   const multiplicacao4 = await setTimeoutPromise(() => 10 * 2, 1000);
  //   console.log(multiplicacao4);

  //   const multiplicacao5 = await setTimeoutPromise(() => 1 * 2, 1000);
  //   console.log(multiplicacao5);

  const promises = await Promise.allSettled([
    new Promise((resolve) => resolve(2 * 3)),
    setTimeoutPromise(() => 3 * 3, 1000),
    setTimeoutPromise(() => 20 * 3, 1000),
    setTimeoutPromise(() => 10 * 2, 1000),
    // new Promise((_, reject) => reject("Ocorreu um erro")),
    setTimeoutPromise(() => {
      throw new Error("Ocorreu um erro");
    }, 2000),
    setTimeoutPromise(() => 1 * 2, 1000),
    // fetch("https://api.github.com/users/fkbral").then((data) => data.json()),
    (await fetch("https://api.github.com/users/fkbral")).json(),
  ]);

  console.log(promises);

  const resolvedPromises = promises.filter(
    (promise) => promise.status === "fulfilled"
  ) as PromiseFulfilledResult<number | Record<string, any>>[];

  const resolvedPromisesValues = resolvedPromises.map(
    (promise) => promise.value
  );

  console.log(resolvedPromisesValues);

  console.log("o programa segue");
}

async function runPromisesWithThen() {
  Promise.allSettled([
    new Promise((resolve) => resolve(2 * 3)),
    setTimeoutPromise(() => 3 * 3, 1000),
    setTimeoutPromise(() => 20 * 3, 1000),
    setTimeoutPromise(() => 10 * 2, 1000),
    // new Promise((_, reject) => reject("Ocorreu um erro")),
    setTimeoutPromise(() => {
      throw new Error("Ocorreu um erro");
    }, 2000),
    setTimeoutPromise(() => 1 * 2, 1000),
    // fetch("https://api.github.com/users/fkbral").then((data) => data.json()),
    (await fetch("https://api.github.com/users/fkbral")).json(),
  ]).then((promises) => {
    console.log(promises);

    const resolvedPromises = promises.filter(
      (promise) => promise.status === "fulfilled"
    ) as PromiseFulfilledResult<number | Record<string, any>>[];

    const resolvedPromisesValues = resolvedPromises.map(
      (promise) => promise.value
    );

    console.log(resolvedPromisesValues);

    console.log("o programa segue");
  });
}

runPromises();
// runPromisesWithThen();
