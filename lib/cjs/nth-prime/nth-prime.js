"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNthPrime = void 0;
const list_parameters_1 = require("@/utils/list-parameters");
const list_prime_numbers_1 = require("@/utils/list-prime-numbers");
const getNthPrime = (targetNumber) => {
    const primeListLimit = (0, list_parameters_1.generateListLimit)(targetNumber);
    return (0, list_prime_numbers_1.listPrimeNumbers)(primeListLimit)[targetNumber];
};
exports.getNthPrime = getNthPrime;
