import { checkForAboveMemoryLimit } from '../utils/memory-check';
import { generateListLimit } from '../utils/list-parameters';
import { listPrimeNumbers } from '../utils/list-prime-numbers';
export const getNthPrime = (targetNumber) => {
    try {
        checkForAboveMemoryLimit(targetNumber);
        const primeListLimit = generateListLimit(targetNumber);
        return listPrimeNumbers(primeListLimit, targetNumber).at(-1);
    }
    catch (error) {
        throw new Error(error);
    }
};
