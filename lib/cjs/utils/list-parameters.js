"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateListLimit = void 0;
const generateListLimit = (targetPosition) => {
    const startLimit = '10';
    const growthFactor = targetPosition.toString().length + startLimit.length;
    return parseInt(startLimit.padEnd(growthFactor, '0'));
};
exports.generateListLimit = generateListLimit;
