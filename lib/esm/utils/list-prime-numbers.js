export const listPrimeNumbers = (targetLimit, nthPosition) => {
    const trackingArray = new Uint8Array(targetLimit + 1), upperLimit = Math.sqrt(targetLimit), primesList = [];
    trackingArray.fill(1);
    // Set 0 and 1 to not prime
    trackingArray[0] = 0;
    trackingArray[1] = 0;
    for (let i = 2; i <= upperLimit; i++) {
        if (trackingArray[i]) {
            for (var j = i * i; j < targetLimit; j += i) {
                trackingArray[j] = 0;
            }
        }
    }
    for (let i = 2; i < targetLimit; i++) {
        if (trackingArray[i]) {
            primesList.push(i);
            if (primesList.length - 1 === nthPosition) {
                return primesList;
            }
        }
    }
    return primesList;
};
