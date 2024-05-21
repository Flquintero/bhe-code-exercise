// this is going to act almost like a midddleware
export const checkForAboveMemoryLimit = (targetLimit: number): void => {
  const memoryLimit = 50000000;
  if (targetLimit > memoryLimit) {
    throw Error(`Nth position can't be larger than ${memoryLimit}`);
  }
};
