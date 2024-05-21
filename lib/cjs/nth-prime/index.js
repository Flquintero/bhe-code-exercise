"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNthPrime = void 0;
const memory_check_1 = require("../utils/memory-check");
const list_parameters_1 = require("../utils/list-parameters");
const list_prime_numbers_1 = require("../utils/list-prime-numbers");
const getNthPrime = (targetNumber) => {
    try {
        (0, memory_check_1.checkForAboveMemoryLimit)(targetNumber);
        const primeListLimit = (0, list_parameters_1.generateListLimit)(targetNumber);
        return (0, list_prime_numbers_1.listPrimeNumbers)(primeListLimit, targetNumber).at(-1);
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.getNthPrime = getNthPrime;
