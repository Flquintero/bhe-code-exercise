export const generateListLimit = (targetPosition: number): number => {
  const startLimit = '10';
  const growthFactor = targetPosition.toString().length + startLimit.length;
  return parseInt(startLimit.padEnd(growthFactor, '0'));
};
