export const listPrimeNumbers = (targetLimit: number): number[] => {
  const trackingArray: boolean[] = [],
    upperLimit = Math.sqrt(targetLimit),
    primesList: number[] = [];

  for (let i = 0; i < targetLimit; i++) {
    trackingArray.push(true);
  }

  for (let i = 2; i <= upperLimit; i++) {
    if (trackingArray[i]) {
      for (var j = i * i; j < targetLimit; j += i) {
        trackingArray[j] = false;
      }
    }
  }

  for (let i = 2; i < targetLimit; i++) {
    if (trackingArray[i]) {
      primesList.push(i);
    }
  }

  return primesList;
};
