"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForAboveMemoryLimit = void 0;
// this is going to act almost like a midddleware
const checkForAboveMemoryLimit = (targetLimit) => {
    const memoryLimit = 50000000;
    if (targetLimit > memoryLimit) {
        throw Error(`Nth position can't be larger than ${memoryLimit}`);
    }
};
exports.checkForAboveMemoryLimit = checkForAboveMemoryLimit;
