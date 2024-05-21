import { checkForAboveMemoryLimit } from '../utils/memory-check';
import { generateListLimit } from '../utils/list-parameters';
import { listPrimeNumbers } from '../utils/list-prime-numbers';

export const getNthPrime = (targetNumber: number): number => {
  try {
    checkForAboveMemoryLimit(targetNumber);
    const primeListLimit: number = generateListLimit(targetNumber);
    return listPrimeNumbers(primeListLimit, targetNumber).at(-1);
  } catch (error: any) {
    throw new Error(error);
  }
};
