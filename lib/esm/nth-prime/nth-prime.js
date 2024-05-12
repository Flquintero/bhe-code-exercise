import { generateListLimit } from '@/utils/list-parameters';
import { listPrimeNumbers } from '@/utils/list-prime-numbers';
export const getNthPrime = (targetNumber) => {
    const primeListLimit = generateListLimit(targetNumber);
    return listPrimeNumbers(primeListLimit)[targetNumber];
};
