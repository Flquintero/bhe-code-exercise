const ListParameters = require('../../utils/list-parameters');
const PrimeNumbers = require('../../utils/list-prime-numbers');

export const getNthPrime = (targetNumber: number): number => {
  const primeListLimit: number = ListParameters.generateListLimit(targetNumber);
  return PrimeNumbers.listPrimeNumbers(primeListLimit)[targetNumber];
};
