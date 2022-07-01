export function setTimeoutPromise<T>(
  callback: () => T,
  timeInMiliseconds: number
): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(callback());
      } catch (error) {
        reject(error);
      }
    }, timeInMiliseconds);
  });
}
