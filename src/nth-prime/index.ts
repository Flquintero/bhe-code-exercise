import { generateListLimit } from '../utils/list-parameters';
import { listPrimeNumbers } from '../utils/list-prime-numbers';

export const getNthPrime = (targetNumber: number): number => {
  const primeListLimit: number = generateListLimit(targetNumber);
  return listPrimeNumbers(primeListLimit)[targetNumber];
};
